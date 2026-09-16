(() => {
  "use strict";

  const CONTENT = window.RUEDA_CONTENT;
  const TOTAL_DOORS = 5;

  const state = {
    mode: "individual",
    characterId: null,
    visited: [],
    results: [],
    currentDimension: null,
    currentChoice: null,
    crossShown: false,
    switchCompared: false,
    rulesSeen: false,
    returnScreen: "home"
  };

  const screens = [...document.querySelectorAll("[data-screen]")];
  const characterGrid = document.querySelector("#characterGrid");
  const switchCharacterGrid = document.querySelector("#switchCharacterGrid");
  const wheel = document.querySelector("#gameWheel");
  const spinButton = document.querySelector("#spinButton");

  function $(selector) { return document.querySelector(selector); }
  function byId(id) { return CONTENT.characters.find((item) => item.id === id); }
  function dimensionById(id) { return CONTENT.dimensions.find((item) => item.id === id); }
  function scenarioById(id) { return CONTENT.scenarios[id]; }

  function currentScreenName() {
    return document.querySelector("[data-screen].is-active")?.dataset.screen || "home";
  }

  function showScreen(name) {
    screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name));
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    requestAnimationFrame(() => {
      const active = document.querySelector(`[data-screen="${name}"]`);
      active?.focus?.({ preventScroll: true });
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function resetState({ keepMode = false } = {}) {
    state.mode = keepMode ? state.mode : "individual";
    state.characterId = null;
    state.visited = [];
    state.results = [];
    state.currentDimension = null;
    state.currentChoice = null;
    state.crossShown = false;
    state.switchCompared = false;
    state.rulesSeen = false;
    state.returnScreen = "home";
  }

  function renderCharacters(target, compact = false) {
    target.innerHTML = "";
    CONTENT.characters.forEach((character, index) => {
      if (target === switchCharacterGrid && character.id === state.characterId) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `character-card${compact ? " character-card--compact" : ""}`;
      button.dataset.character = character.id;
      button.innerHTML = `
        <span class="avatar avatar--${(index % 4) + 1}">${character.avatar}</span>
        <span class="character-copy">
          <strong>${character.name}, ${character.age}</strong>
          <small>${character.intro}</small>
        </span>
        <span class="card-arrow" aria-hidden="true">↗</span>`;
      target.append(button);
    });
  }

  function chooseCharacter(id) {
    state.characterId = id;
    state.visited = [];
    state.results = [];
    state.currentDimension = null;
    state.crossShown = false;
    updatePlayerUI();
    buildWheelLabels();
    if (!state.rulesSeen) {
      state.returnScreen = "wheel";
      showScreen("rules");
    } else {
      showScreen("wheel");
    }
  }

  function updatePlayerUI() {
    const character = byId(state.characterId);
    if (!character) return;
    $("#playerAvatar").textContent = character.avatar;
    $("#playerName").textContent = `${character.name}, ${character.age}`;
    $("#playerSummary").textContent = character.intro;
    $("#modeBadge").textContent = state.mode === "workshop" ? "Modo taller" : "Individual";
    updateProgress();
  }

  function updateProgress() {
    const next = Math.min(state.results.length + 1, TOTAL_DOORS);
    $("#doorProgress").textContent = `Puerta ${next} de ${TOTAL_DOORS}`;
    $("#doorProgress2").textContent = `Puerta ${next} de ${TOTAL_DOORS}`;
  }

  function buildWheelLabels() {
    if (wheel.dataset.ready === "true") return;
    CONTENT.dimensions.forEach((dimension, index) => {
      const chip = document.createElement("span");
      chip.className = "wheel-chip";
      chip.style.setProperty("--i", index);
      chip.textContent = dimension.icon;
      chip.title = dimension.name;
      wheel.append(chip);
    });
    wheel.dataset.ready = "true";
  }

  function spinWheel() {
    if (spinButton.disabled) return;
    const remaining = CONTENT.dimensions.map((item) => item.id).filter((id) => !state.visited.includes(id));
    if (!remaining.length) return;

    spinButton.disabled = true;
    $("#wheelHint").textContent = "La rueda está girando…";
    const chosen = remaining[Math.floor(Math.random() * remaining.length)];
    state.currentDimension = chosen;

    const degrees = 720 + Math.floor(Math.random() * 360);
    wheel.style.setProperty("--spin", `${degrees}deg`);
    wheel.classList.remove("is-spinning");
    void wheel.offsetWidth;
    wheel.classList.add("is-spinning");

    const delay = prefersReducedMotion() ? 150 : 1050;
    window.setTimeout(() => {
      const dim = dimensionById(chosen);
      $("#wheelHint").textContent = `${dim.icon} ${dim.name}: ${dim.question}`;
      window.setTimeout(() => {
        spinButton.disabled = false;
        openDoor(chosen);
      }, prefersReducedMotion() ? 50 : 550);
    }, delay);
  }

  function openDoor(dimensionId) {
    const character = byId(state.characterId);
    const dimension = dimensionById(dimensionId);
    const scenario = scenarioById(dimensionId);
    const [status, note] = character.access[dimensionId];

    $("#dimensionBadge").textContent = `${dimension.icon} ${dimension.name}`;
    $("#doorDimension").textContent = `${dimension.icon} ${dimension.name} · ${dimension.question}`;
    $("#door-title").textContent = scenario.title;
    $("#doorScenario").textContent = scenario.text;
    $("#doorIcon").textContent = status === "open" ? "🟢" : status === "context" ? "🟡" : "🟣";

    const condition = $("#conditionBox");
    condition.className = `condition-box condition-box--${status}`;
    const meanings = {
      open: "En esta situación, el personaje encuentra menos obstáculos externos.",
      context: "En esta situación, los apoyos y las barreras del entorno pueden cambiar mucho lo que ocurre.",
      barrier: "En esta situación, llegar a la misma posibilidad puede exigir más esfuerzo, apoyo, tiempo o recursos."
    };
    condition.innerHTML = `<strong>${statusLabel(status)}</strong><p class="condition-meaning">${meanings[status]}</p><p>${note}</p>`;

    $("#decision-title").textContent = `Estás jugando como ${character.name}. ¿Qué decides hacer?`;
    $("#decisionPrompt").textContent = `Elige una acción que ${character.name} podría tomar desde su situación. No estás decidiendo por el centro, la familia o el grupo: esa parte aparecerá después como reflexión sobre el entorno.`;

    const list = $("#choiceList");
    list.innerHTML = "";
    scenario.choices.forEach(([choiceId, label, feedback], index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "decision-option";
      button.dataset.choice = choiceId;
      button.dataset.feedback = feedback;
      button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${label}</strong>`;
      list.append(button);
    });

    $("#decisionFeedback").hidden = true;
    $("#continueDoor").hidden = true;
    state.currentChoice = null;
    showScreen("door");
  }

  function statusLabel(status) {
    return status === "open" ? "Puerta más abierta" : status === "context" ? "Depende del contexto" : "Puerta con más barreras";
  }

  function chooseDecision(button) {
    if (state.currentChoice) return;
    state.currentChoice = button.dataset.choice;
    [...document.querySelectorAll(".decision-option")].forEach((item) => {
      item.disabled = true;
      item.classList.toggle("is-selected", item === button);
    });
    const feedback = $("#decisionFeedback");
    const character = byId(state.characterId);
    const scenario = scenarioById(state.currentDimension);
    feedback.innerHTML = `<strong>LO QUE HACE ${character.name.toUpperCase()}</strong><p>${button.dataset.feedback}</p><div class="feedback-system"><strong>Y EL ENTORNO TAMBIÉN CUENTA</strong><p>${scenario.system}</p></div>`;
    feedback.hidden = false;
    $("#continueDoor").hidden = false;
  }

  function commitDoor() {
    const id = state.currentDimension;
    const character = byId(state.characterId);
    const scenario = scenarioById(id);
    const [status, note] = character.access[id];

    if (!state.visited.includes(id)) state.visited.push(id);
    if (!state.results.some((result) => result.dimensionId === id)) {
      state.results.push({ dimensionId: id, status, note, choice: state.currentChoice });
    }
    updateProgress();

    if (state.mode === "workshop") {
      $("#pauseQuestion").textContent = scenario.workshop;
      showScreen("pause");
      return;
    }
    continueAfterDoor();
  }

  function continueAfterDoor() {
    if (state.results.length >= TOTAL_DOORS) {
      renderSwitchCharacters();
      showScreen("switch");
      return;
    }

    if (!state.crossShown && state.results.length >= 3) {
      state.crossShown = true;
      renderCross();
      showScreen("cross");
      return;
    }

    $("#wheelHint").textContent = "La rueda elegirá una dimensión que todavía no hayas recorrido.";
    showScreen("wheel");
  }

  function renderCross() {
    const visited = state.results.map((result) => result.dimensionId);
    let match = CONTENT.intersections.find((item) => item.ids.every((id) => visited.includes(id)));

    if (!match) {
      const pair = state.results.slice(-2).map((item) => item.dimensionId);
      match = {
        ids: pair,
        text: "Estas dos dimensiones no actúan por separado: el contexto de una persona puede hacer que la misma situación sea más fácil, más costosa o directamente inaccesible."
      };
    }

    const [a, b] = match.ids.map(dimensionById);
    $("#crossA").textContent = `${a.icon} ${a.name}`;
    $("#crossB").textContent = `${b.icon} ${b.name}`;
    $("#crossText").textContent = match.text;
  }

  function renderSwitchCharacters() {
    renderCharacters(switchCharacterGrid, true);
    $("#comparisonBox").hidden = true;
    $("#finishSwitch").hidden = true;
    state.switchCompared = false;
  }

  function compareCharacter(otherId) {
    const original = byId(state.characterId);
    const other = byId(otherId);
    const sample = state.results.find((r) => r.status === "barrier") || state.results.find((r) => r.status === "context") || state.results[0];
    const dim = dimensionById(sample.dimensionId);
    const [originalStatus, originalNote] = original.access[sample.dimensionId];
    const [otherStatus, otherNote] = other.access[sample.dimensionId];

    $("#comparisonBox").innerHTML = `
      <p class="kicker">Misma puerta · ${dim.icon} ${dim.name}</p>
      <div class="comparison-grid">
        <article><strong>${original.name}</strong><span class="status-pill status-pill--${originalStatus}">${statusLabel(originalStatus)}</span><p>${originalNote}</p></article>
        <article><strong>${other.name}</strong><span class="status-pill status-pill--${otherStatus}">${statusLabel(otherStatus)}</span><p>${otherNote}</p></article>
      </div>
      <p class="comparison-question">¿La misma decisión tiene el mismo coste para las dos personas?</p>`;
    $("#comparisonBox").hidden = false;
    $("#finishSwitch").hidden = false;
    state.switchCompared = true;
    [...switchCharacterGrid.querySelectorAll(".character-card")].forEach((card) => card.classList.toggle("is-selected", card.dataset.character === otherId));
  }

  function renderMap() {
    const buckets = { open: $("#mapOpen"), context: $("#mapContext"), barrier: $("#mapBarrier") };
    Object.values(buckets).forEach((node) => { node.innerHTML = ""; });

    state.results.forEach((result) => {
      const dim = dimensionById(result.dimensionId);
      const item = document.createElement("article");
      item.className = "map-item";
      item.innerHTML = `<strong>${dim.icon} ${dim.name}</strong><p>${result.note}</p>`;
      buckets[result.status].append(item);
    });

    Object.entries(buckets).forEach(([status, node]) => {
      if (!node.children.length) node.innerHTML = `<p class="empty-map">Ninguna de las puertas recorridas quedó aquí.</p>`;
    });

    const visited = state.results.map((r) => r.dimensionId);
    const crosses = CONTENT.intersections.filter((item) => item.ids.every((id) => visited.includes(id)));
    const summary = $("#crossSummary");
    if (crosses.length) {
      summary.innerHTML = `<p class="kicker">Tus cruces</p>${crosses.map((item) => {
        const labels = item.ids.map((id) => dimensionById(id)).map((d) => `${d.icon} ${d.name}`).join(" + ");
        return `<article><strong>${labels}</strong><p>${item.text}</p></article>`;
      }).join("")}`;
    } else {
      summary.innerHTML = `<p class="kicker">Tus cruces</p><p>Las puertas recorridas ya muestran que las dimensiones cambian según el contexto. En otra partida aparecerán combinaciones diferentes.</p>`;
    }
  }

  function chooseActionPath(path) {
    const options = CONTENT.challenges[path];
    const challenge = options[Math.floor(Math.random() * options.length)];
    const labels = { ver: ["👁️ VER", "Mirar de otra manera"], acompanar: ["🤝 ACOMPAÑAR", "Repartir el coste de actuar"], cambiar: ["✊ CAMBIAR", "Mover una regla o un contexto"] };
    $("#challengeCard").innerHTML = `<p class="kicker">Reto elegido · ${labels[path][0]}</p><h3>${labels[path][1]}</h3><p>${challenge}</p>`;
    $("#challengeCard").hidden = false;
    $("#restartButton").hidden = false;
    $("#printButton").hidden = false;
    [...document.querySelectorAll(".action-path")].forEach((button) => button.classList.toggle("is-selected", button.dataset.path === path));
  }

  function showRules() {
    const current = currentScreenName();
    state.returnScreen = current === "rules" ? state.returnScreen : current;
    $("#rulesContinue").textContent = state.characterId ? "Volver al juego" : "Empezar a jugar";
    showScreen("rules");
  }

  function leaveRules() {
    state.rulesSeen = true;
    const destination = state.characterId
      ? (state.returnScreen && state.returnScreen !== "rules" ? state.returnScreen : "wheel")
      : "mode";
    showScreen(destination);
  }

  function handleAction(action) {
    switch (action) {
      case "home": resetState(); renderCharacters(characterGrid); showScreen("home"); break;
      case "show-rules": showRules(); break;
      case "rules-continue": leaveRules(); break;
      case "rules-back": showScreen(state.returnScreen && state.returnScreen !== "rules" ? state.returnScreen : "home"); break;
      case "show-about": showScreen("about"); break;
      case "choose-mode": showScreen("mode"); break;
      case "back-mode": showScreen("mode"); break;
      case "random-character": {
        const pick = CONTENT.characters[Math.floor(Math.random() * CONTENT.characters.length)];
        chooseCharacter(pick.id);
        break;
      }
      case "change-character": renderCharacters(characterGrid); showScreen("characters"); break;
      case "spin": spinWheel(); break;
      case "continue-door": commitDoor(); break;
      case "resume-from-pause": continueAfterDoor(); break;
      case "continue-cross": $("#wheelHint").textContent = "La rueda elegirá una dimensión que todavía no hayas recorrido."; showScreen("wheel"); break;
      case "finish-switch": renderMap(); showScreen("map"); break;
      case "go-action": showScreen("action"); break;
      case "restart": resetState({ keepMode: true }); state.rulesSeen = true; renderCharacters(characterGrid); showScreen("characters"); break;
      case "print": window.print(); break;
      default: break;
    }
  }

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      handleAction(actionButton.dataset.action);
      return;
    }

    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) {
      state.mode = modeButton.dataset.mode;
      renderCharacters(characterGrid);
      showScreen("characters");
      return;
    }

    const characterButton = event.target.closest("#characterGrid [data-character]");
    if (characterButton) {
      chooseCharacter(characterButton.dataset.character);
      return;
    }

    const switchButton = event.target.closest("#switchCharacterGrid [data-character]");
    if (switchButton) {
      compareCharacter(switchButton.dataset.character);
      return;
    }

    const decisionButton = event.target.closest(".decision-option");
    if (decisionButton) {
      chooseDecision(decisionButton);
      return;
    }

    const pathButton = event.target.closest("[data-path]");
    if (pathButton) chooseActionPath(pathButton.dataset.path);
  });

  renderCharacters(characterGrid);
  buildWheelLabels();
})();
