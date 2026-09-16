/*
  CONTENIDO CONFIGURABLE
  ----------------------
  Este archivo concentra personajes, dimensiones, situaciones y retos.
  Puede editarse sin tocar la lógica del juego.
*/

window.RUEDA_CONTENT = {
  dimensions: [
    { id: "resources", name: "Dinero", icon: "💰", question: "¿Con qué recursos cuento?" },
    { id: "place", name: "Lugar", icon: "🏠", question: "¿Dónde me ha tocado vivir?" },
    { id: "origin", name: "Origen", icon: "🌍", question: "¿Cómo se percibe mi origen?" },
    { id: "language", name: "Lengua", icon: "🗣️", question: "¿Mi forma de hablar encaja?" },
    { id: "age", name: "Edad", icon: "🧑", question: "¿Cuánto se escucha mi voz?" },
    { id: "identity", name: "Identidad", icon: "⚧", question: "¿Cómo se percibe mi género?" },
    { id: "affectivity", name: "Afectividad", icon: "❤️", question: "¿Puedo mostrar quién quiero ser?" },
    { id: "ability", name: "Capacidad", icon: "♿", question: "¿Está el mundo diseñado para mí?" },
    { id: "family", name: "Familia", icon: "👨‍👩‍👧", question: "¿Qué red tengo detrás?" },
    { id: "rights", name: "Derechos", icon: "🪪", question: "¿Tengo el mismo reconocimiento?" }
  ],

  characters: [
    {
      id: "leire",
      name: "Leire",
      age: 15,
      avatar: "L",
      intro: "Vive en una ciudad mediana, tiene una red familiar estable y practica baloncesto.",
      detail: "En casa pueden afrontar gastos imprevistos pequeños. Habla las lenguas habituales de su entorno y suele moverse sola por la ciudad.",
      access: {
        resources: ["open", "En casa pueden cubrir la mayoría de gastos cotidianos y algunos imprevistos."],
        place: ["open", "Tiene transporte y servicios cerca."],
        origin: ["open", "Su origen suele percibirse como mayoritario en su entorno."],
        language: ["open", "Domina las lenguas que se usan en el instituto y en los trámites."],
        age: ["context", "Su opinión cuenta en algunos espacios, aunque las decisiones importantes siguen en manos adultas."],
        identity: ["context", "En el deporte a veces encuentra expectativas distintas por ser chica."],
        affectivity: ["open", "No suele prever consecuencias por hablar de a quién le gusta."],
        ability: ["open", "Los espacios que frecuenta suelen estar diseñados para sus necesidades."],
        family: ["open", "Tiene personas adultas disponibles para acompañarla y defender sus derechos."],
        rights: ["open", "Tiene documentación y acceso habitual a los servicios de su entorno."]
      }
    },
    {
      id: "amadou",
      name: "Amadou",
      age: 16,
      avatar: "A",
      intro: "Llegó hace dos años con parte de su familia. Le gusta la música y quiere buscar un trabajo de verano.",
      detail: "Habla varias lenguas. Entiende bien la lengua del instituto, pero todavía duda en situaciones formales y algunos trámites dependen de personas adultas.",
      access: {
        resources: ["context", "En casa hay que planificar con cuidado los gastos no esenciales."],
        place: ["open", "Vive cerca de transporte y servicios."],
        origin: ["barrier", "A veces otras personas hacen suposiciones sobre él por su nombre o su origen."],
        language: ["context", "Se comunica bien, pero algunas situaciones formales requieren más esfuerzo."],
        age: ["context", "Como adolescente, su voz no siempre se considera suficiente en trámites o decisiones."],
        identity: ["open", "No suele encontrar barreras explícitas por cómo se percibe su género."],
        affectivity: ["open", "No es una fuente habitual de barreras en los escenarios del juego."],
        ability: ["open", "Los espacios habituales responden a sus necesidades físicas y sensoriales."],
        family: ["context", "Tiene apoyo familiar, aunque no siempre hay una persona adulta disponible para acompañar gestiones."],
        rights: ["barrier", "Algunas oportunidades están condicionadas por documentación, plazos o trámites que no controla él solo."]
      }
    },
    {
      id: "june",
      name: "June",
      age: 14,
      avatar: "J",
      intro: "Vive en un pueblo pequeño, le encanta dibujar y participa en un grupo juvenil una vez por semana.",
      detail: "Para llegar a muchas actividades depende de horarios de autobús o de que alguien pueda llevarla. Es neurodivergente y los ambientes muy ruidosos pueden saturarla.",
      access: {
        resources: ["open", "Su familia puede asumir la mayoría de gastos ordinarios."],
        place: ["barrier", "Tiene menos transporte y menos servicios cerca que alguien que vive en el centro de una ciudad."],
        origin: ["open", "Su origen no suele convertirse en una barrera en su entorno."],
        language: ["open", "Habla las lenguas habituales de su entorno."],
        age: ["context", "Necesita apoyo adulto para desplazamientos y algunas decisiones."],
        identity: ["open", "No suele encontrar barreras explícitas por cómo se percibe su género."],
        affectivity: ["open", "No es una fuente habitual de barreras en los escenarios del juego."],
        ability: ["context", "El ruido, las instrucciones ambiguas o los cambios inesperados pueden volver inaccesible una actividad."],
        family: ["open", "Tiene una red familiar disponible, aunque coordinar desplazamientos no siempre es fácil."],
        rights: ["open", "Tiene acceso habitual a servicios y documentación."]
      }
    },
    {
      id: "alex",
      name: "Alex",
      age: 17,
      avatar: "X",
      intro: "Está terminando el instituto, toca la guitarra y se identifica como persona no binaria.",
      detail: "Cuenta con amistades que respetan su identidad, pero no todos los espacios usan su nombre y pronombres de forma consistente.",
      access: {
        resources: ["open", "Tiene recursos suficientes para actividades habituales."],
        place: ["open", "Vive cerca de servicios y puede desplazarse con autonomía."],
        origin: ["open", "Su origen no suele convertirse en una barrera en su entorno."],
        language: ["open", "Domina las lenguas habituales de su entorno."],
        age: ["context", "Tiene bastante autonomía, pero algunas decisiones siguen dependiendo de personas adultas."],
        identity: ["barrier", "En ciertos espacios su identidad se cuestiona, se ignora o se convierte en motivo de comentarios."],
        affectivity: ["context", "Valora antes si un espacio es seguro para hablar de vínculos o afectos."],
        ability: ["open", "Los espacios habituales responden a sus necesidades físicas y sensoriales."],
        family: ["context", "Tiene apoyo de parte de su red, pero no todas las personas adultas entienden igual su identidad."],
        rights: ["context", "Algunos formularios, normas o registros no contemplan bien su identidad."]
      }
    },
    {
      id: "samira",
      name: "Samira",
      age: 13,
      avatar: "S",
      intro: "Vive con su madre y dos hermanos. Le gusta bailar y a veces ayuda a cuidar al más pequeño.",
      detail: "En casa se hablan dos lenguas y el presupuesto es ajustado. Tiene amigas cerca, pero no siempre puede quedarse a actividades de tarde.",
      access: {
        resources: ["barrier", "Una actividad con coste puede exigir renunciar a otra necesidad familiar."],
        place: ["context", "Tiene servicios cerca, aunque algunos desplazamientos de tarde son difíciles."],
        origin: ["context", "En ocasiones recibe preguntas o comentarios que la hacen sentirse observada por su origen familiar."],
        language: ["open", "Habla con soltura las lenguas de su entorno y además otra lengua familiar."],
        age: ["context", "Su edad limita autonomía y hace que algunas personas adultas decidan sin preguntarle."],
        identity: ["context", "A veces recibe expectativas distintas sobre cómo debería vestir o comportarse."],
        affectivity: ["open", "No es una fuente habitual de barreras en los escenarios del juego."],
        ability: ["open", "Los espacios habituales responden a sus necesidades físicas y sensoriales."],
        family: ["barrier", "Las responsabilidades de cuidado pueden impedirle participar aunque quiera hacerlo."],
        rights: ["open", "Tiene acceso habitual a servicios y documentación."]
      }
    },
    {
      id: "iker",
      name: "Iker",
      age: 16,
      avatar: "I",
      intro: "Usa silla de ruedas, es fan de los videojuegos y participa en el consejo escolar.",
      detail: "Tiene una familia con recursos y apoyo. El principal problema aparece cuando un lugar, transporte o actividad se ha diseñado sin accesibilidad.",
      access: {
        resources: ["open", "Su familia puede asumir gastos habituales y apoyos técnicos."],
        place: ["context", "La accesibilidad del transporte y de los edificios cambia mucho según el lugar."],
        origin: ["open", "Su origen no suele convertirse en una barrera en su entorno."],
        language: ["open", "Domina las lenguas habituales de su entorno."],
        age: ["context", "Su voz se escucha en algunos espacios, aunque muchas decisiones siguen siendo adultocéntricas."],
        identity: ["open", "No suele encontrar barreras explícitas por cómo se percibe su género."],
        affectivity: ["open", "No es una fuente habitual de barreras en los escenarios del juego."],
        ability: ["barrier", "Una actividad deja de ser accesible si hay escaleras, transporte no adaptado o falta de apoyos."],
        family: ["open", "Tiene una red familiar disponible para apoyar gestiones y desplazamientos."],
        rights: ["context", "Sobre el papel tiene los mismos derechos, pero ejercerlos puede depender de que se cumplan medidas de accesibilidad."]
      }
    }
  ],

  scenarios: {
    resources: {
      title: "Plan de fin de semana",
      text: "Tu grupo quiere hacer una excursión que cuesta 38 € entre transporte, comida y entrada.",
      workshop: "¿Poder pagar es una decisión personal o una condición de partida? ¿Qué podría hacer el grupo para que nadie quede fuera?",
      system: "El grupo puede revisar el precio, ofrecer una alternativa equivalente o crear apoyos sin obligar a nadie a explicar su situación económica.",
      choices: [
        ["mirar", "Antes de decidir, miro si el coste encaja con mis posibilidades y, si no, lo digo sin tener que justificar mi situación.", "Reconocer el límite propio permite pedir cambios o apoyos sin convertir la situación económica en algo que haya que demostrar."],
        ["alternativa", "Pregunto si podemos buscar una opción gratuita o más barata para que el precio no decida quién participa.", "El personaje usa su voz para señalar una barrera concreta y proponer una alternativa que beneficia al grupo."],
        ["seguir", "Acepto el plan tal como está y no pregunto si el precio puede dejar a alguien fuera.", "Es una reacción posible, especialmente si el coste no te afecta. También muestra cómo una barrera puede pasar desapercibida para quien no la vive."]
      ]
    },
    place: {
      title: "Llegar también cuenta",
      text: "Hay un taller interesante a las 18:30, pero termina cuando ya casi no hay transporte público.",
      workshop: "Cuando una actividad es ‘para todo el mundo’, ¿incluye también la posibilidad real de llegar y volver?",
      system: "Quien organiza puede cambiar el horario, elegir un lugar mejor conectado o prever opciones de vuelta seguras antes de anunciar la actividad.",
      choices: [
        ["comprobar", "Antes de apuntarme, compruebo cómo podría volver a casa y digo si el horario me deja sin opciones.", "El personaje hace visible una condición que a veces se trata como un problema privado, aunque dependa del diseño de la actividad."],
        ["renunciar", "Si el horario me complica la vuelta, decido no ir y no comento el motivo.", "Puede ser una forma de evitar una situación difícil, pero la barrera queda invisible y puede repetirse en la siguiente actividad."],
        ["pedir-cambio", "Pregunto si podemos adelantar la hora o buscar una forma segura de volver para poder participar.", "Pedir un ajuste conecta la necesidad del personaje con una solución concreta sin convertirla en falta de interés."]
      ]
    },
    origin: {
      title: "Un nombre en el currículum",
      text: "Envías una solicitud para un trabajo de verano. Una persona comenta que tu nombre ‘suena extranjero’ y pregunta de dónde eres ‘de verdad’.",
      workshop: "¿Qué parte de esta situación tiene que ver con capacidades reales y qué parte con prejuicios?",
      system: "La selección debería centrarse en criterios del puesto y evitar preguntas o filtros que conviertan el origen percibido en una desventaja.",
      choices: [
        ["broma", "Me río para que no parezca que me molesta.", "A veces reír es una estrategia para salir del momento, pero no convierte el comentario en neutral."],
        ["limite", "Señalo que mi origen no debería decidir si encajo en el puesto y vuelvo a hablar de mis capacidades.", "El personaje nombra la barrera y devuelve la conversación a los criterios relevantes para el trabajo."],
        ["justificar", "Intento demostrar que soy ‘como cualquiera’ para tranquilizar a quien ha hecho el comentario.", "Esta reacción puede ayudar a salir del momento, pero obliga a la persona afectada a responder a un prejuicio que no ha creado."]
      ]
    },
    language: {
      title: "Hablar delante de la clase",
      text: "Tienes que presentar un proyecto oral. La clase usa una lengua que algunas personas dominan con más seguridad que otras.",
      workshop: "¿Evaluar la forma de hablar es siempre lo mismo que evaluar lo que una persona sabe?",
      system: "El centro puede ofrecer apoyos, criterios de evaluación claros y distintas formas de demostrar conocimientos sin confundir dominio lingüístico con capacidad.",
      choices: [
        ["apoyo", "Si expresarme me exige más esfuerzo, pido usar apoyos visuales y preparar algunas palabras clave.", "El personaje busca una herramienta concreta para mostrar lo que sabe sin ocultar que la lengua puede añadir dificultad."],
        ["silencio", "Si temo equivocarme, intento hablar lo mínimo posible para que nadie note mis errores.", "Reduce el riesgo de exposición, pero también puede limitar oportunidades de practicar y ser escuchado."],
        ["preparar", "Pido más tiempo para preparar la presentación o practicar antes con una persona de confianza.", "Buscar preparación y apoyo puede reducir la presión sin convertir la dificultad lingüística en falta de conocimiento."]
      ]
    },
    age: {
      title: "Decidir sin jóvenes",
      text: "El centro va a cambiar una norma que afecta directamente al alumnado. La reunión final solo incluye a personas adultas.",
      workshop: "¿A partir de qué momento una voz se considera ‘suficientemente adulta’ para participar en decisiones que le afectan?",
      system: "El centro puede crear mecanismos reales de participación juvenil antes de tomar decisiones que afectan directamente al alumnado.",
      choices: [
        ["representacion", "Pido que el alumnado tenga una representación real antes de que se tome la decisión.", "El personaje reclama una vía concreta para que su experiencia cuente sin asumir que debe decidirlo todo."],
        ["aceptar", "Acepto la decisión sin pedir participar porque pienso que las personas adultas sabrán qué es lo mejor.", "La experiencia adulta puede aportar, pero no sustituye automáticamente la experiencia de quienes viven la norma."],
        ["rumor", "Expreso mi desacuerdo en redes, pero no busco ningún canal para hacer llegar mi opinión al centro.", "Expresa malestar, aunque deja la decisión en el mismo lugar si no se conecta con una vía de participación."]
      ]
    },
    identity: {
      title: "Entrar al equipo",
      text: "Quieres apuntarte a una actividad deportiva. Alguien hace un comentario sobre qué personas ‘pegan’ más con ese equipo.",
      workshop: "¿Qué reglas son realmente necesarias para el deporte y cuáles son expectativas sociales sobre género?",
      system: "El club o el centro puede revisar criterios de acceso, lenguaje y normas para que los estereotipos de género no funcionen como filtros informales.",
      choices: [
        ["reglas", "Pregunto qué criterio deportivo concreto justifica el comentario o una posible exclusión.", "El personaje obliga a distinguir entre una necesidad real de la actividad y una expectativa social."],
        ["retirada", "Decido irme para evitar más comentarios.", "Salir puede ser una forma de protegerse, pero también muestra cómo el entorno puede cerrar una puerta sin una prohibición formal."],
        ["apoyo", "Busco a una persona responsable del equipo y le explico lo que ha pasado antes de decidir si sigo.", "Pedir apoyo traslada parte de la responsabilidad a quien tiene capacidad para intervenir en el espacio."]
      ]
    },
    affectivity: {
      title: "Contar a quién quieres",
      text: "En una conversación, el grupo habla de parejas. No sabes si mencionar a la persona que te gusta cambiará cómo te tratan.",
      workshop: "¿Qué señales hacen que un espacio se sienta seguro o inseguro para hablar de la propia vida afectiva?",
      system: "Un grupo seguro no obliga a nadie a revelar su vida afectiva y corta burlas, rumores o comentarios que convierten una identidad en motivo de presión.",
      choices: [
        ["elegir", "Decido yo cuándo y con quién compartir a quién me gusta.", "La privacidad y el ritmo propio forman parte de poder vivir los afectos con seguridad."],
        ["presion", "Lo cuento aunque no me sienta con seguridad porque creo que debería demostrar que no me da miedo.", "Nadie tiene que exponerse para demostrar valentía o para educar al resto."],
        ["confianza", "Primero se lo cuento a una persona de confianza y observo cómo se siente el ambiente antes de decidir si lo comparto con más gente.", "El personaje usa su red y evalúa el contexto antes de exponerse, algo que puede ser una estrategia legítima de cuidado." ]
      ]
    },
    ability: {
      title: "La actividad está arriba",
      text: "La clase organiza una actividad en un edificio con escaleras y no está claro si existe una alternativa de acceso adecuada.",
      workshop: "¿La barrera está en el cuerpo de una persona o en un espacio que se diseñó sin contar con ella?",
      system: "La actividad debería planificarse desde el inicio en un espacio accesible, en vez de esperar a que una persona tenga que pedir una solución excepcional.",
      choices: [
        ["comprobar", "Antes de la actividad, compruebo si puedo entrar, moverme y participar con autonomía; si no, lo digo.", "El personaje identifica si el espacio responde realmente a sus necesidades en lugar de asumir que ‘ya se verá’ al llegar."],
        ["improvisar", "Si encuentro una barrera, acepto una solución improvisada aunque me haga depender de otras personas.", "A veces parece la salida más rápida, pero puede ser insegura o reducir la autonomía de quien participa."],
        ["cambiar", "Si el lugar no me permite participar, pido que la actividad se haga en otro espacio accesible.", "El personaje plantea que la accesibilidad sea una condición del plan y no un favor individual." ]
      ]
    },
    family: {
      title: "Quedarse después de clase",
      text: "Hay una reunión importante por la tarde. Ese horario puede coincidir con responsabilidades o necesidades familiares.",
      workshop: "¿Por qué dos personas con las mismas ganas pueden tener disponibilidades muy distintas?",
      system: "El grupo puede rotar horarios, permitir participación a distancia o recoger opiniones antes de decidir para que estar físicamente presente no sea la única forma de participar.",
      choices: [
        ["horario", "Compruebo si ese horario encaja con mis responsabilidades y, si no, pido otra forma de participar.", "El personaje hace visible que la disponibilidad no siempre depende de las ganas o del compromiso."],
        ["quedar-fuera", "Si no puedo ir, dejo que decidan sin mí y no explico que el horario es el problema.", "Puede evitar tener que contar una situación personal, pero la barrera queda invisible y la ausencia puede interpretarse como falta de interés."],
        ["opinion", "Pido a alguien que lleve mi opinión a la reunión y que me cuente después qué se decidió.", "No elimina la barrera, pero permite conservar parte de la voz cuando la presencia física no es posible." ]
      ]
    },
    rights: {
      title: "La beca del programa de verano",
      text: "En tu instituto anuncian una beca para participar una semana en un programa de verano. Para solicitarla hay que rellenar un formulario online, adjuntar un documento familiar, conseguir la firma de una persona adulta y enviarlo antes del viernes.",
      workshop: "¿Todo el mundo tiene las mismas posibilidades de pedir la beca si algunas personas necesitan ayuda para entender el formulario, reunir los documentos o cumplir el plazo?",
      system: "El centro puede explicar la solicitud paso a paso, ofrecer apoyo para completarla y revisar si todos los requisitos y plazos son realmente imprescindibles.",
      choices: [
        ["pedir-ayuda", "Leo la convocatoria y, si algo no lo entiendo o no puedo reunirlo por mi cuenta, pido que me lo expliquen paso a paso.", "El personaje busca información y apoyo para poder ejercer una oportunidad que existe sobre el papel."],
        ["abandonar", "Si me falta un documento o una firma, abandono la solicitud sin preguntar si existe otra opción.", "Puede parecer que la beca simplemente ‘no era para mí’, aunque el obstáculo venga del procedimiento y no del interés del personaje."],
        ["alternativa", "Pregunto si existe una alternativa cuando un requisito o el plazo me resulta imposible de cumplir.", "El personaje hace visible una barrera concreta y comprueba si el procedimiento admite una solución equivalente." ]
      ]
    }
  },

  intersections: [
    { ids: ["resources", "place"], text: "Un coste pequeño puede convertirse en una barrera mayor cuando además hay poco transporte o servicios lejos." },
    { ids: ["origin", "language"], text: "Un error lingüístico puede interpretarse de forma distinta cuando ya existen prejuicios sobre el origen de una persona." },
    { ids: ["identity", "age"], text: "Ser joven puede hacer más difícil que se tome en serio una identidad que otras personas ya cuestionan." },
    { ids: ["ability", "place"], text: "La accesibilidad no depende solo del cuerpo: cambia según el edificio, el transporte y el entorno." },
    { ids: ["family", "resources"], text: "Los cuidados y el dinero pueden cruzarse: pagar apoyo o transporte puede ser imposible cuando el presupuesto ya es ajustado." },
    { ids: ["rights", "language"], text: "Solicitar una beca puede ser mucho más difícil si el formulario, las instrucciones o los documentos necesarios no están explicados en una lengua que la persona o su familia comprendan bien." }
  ],

  challenges: {
    ver: [
      "Durante un día, detecta una situación que parece igual para todo el mundo y pregúntate: ¿qué necesita una persona para poder participar de verdad?",
      "Observa una actividad de tu centro o grupo. Anota una barrera que normalmente no se nombra: coste, horario, transporte, idioma, accesibilidad o cuidados.",
      "Escucha una conversación y detecta una frase que convierta una desigualdad en ‘falta de esfuerzo’. Piensa qué contexto falta por mirar."
    ],
    acompanhar: [
      "La próxima vez que una decisión afecte a alguien que no está presente, propone recoger su opinión antes de cerrar el plan.",
      "Si una persona recibe una broma por su origen, identidad, acento o capacidad, no la dejes sola con el coste de responder.",
      "Pregunta qué apoyo sería útil antes de ofrecer ayuda. Acompañar no es decidir por otra persona."
    ],
    cambiar: [
      "Elige una norma de tu instituto, grupo o actividad que pueda dejar a alguien fuera. Rediseña una versión con menos barreras.",
      "Revisa una actividad: ¿se puede cambiar el precio, horario, lugar o forma de participar para que dependa menos de los recursos personales?",
      "Haz una propuesta concreta para que las personas jóvenes tengan una vía real de participación en una decisión que les afecta."
    ]
  }
};
