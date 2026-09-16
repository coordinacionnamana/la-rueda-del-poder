# La Rueda del Poder

Prototipo web de **Fundación Agua de Coco** para trabajar privilegios, desigualdades e interseccionalidad con jóvenes de 11 a 18 años.

## Importante: esta versión corrige el problema de la pantalla blanca

`index.html` es ahora **autocontenido**: el CSS, los contenidos y el JavaScript están embebidos en el propio archivo. Por eso funciona incluso si haces doble clic en `index.html` desde tu ordenador, sin levantar un servidor y sin depender de rutas a otros archivos.

La carpeta `src/` sigue existiendo para que el proyecto sea cómodo de mantener en GitHub. Si cambias algo en `src/styles.css`, `src/content.js` o `src/game.js`, vuelve a generar `index.html` con:

```bash
npm run build
```

No hace falta instalar ninguna dependencia: solo Node.js.


## Cómo se juega (incluido dentro de la interfaz)

La versión 0.3 añade una pantalla de instrucciones accesible desde la portada y desde el propio juego. Además, aparece automáticamente la primera vez que se elige un personaje.

El flujo que se explica al jugador es:

1. Elegir un personaje ficticio.
2. Girar la rueda para descubrir una dimensión.
3. Leer una situación y el significado de su **puerta**: más abierta, dependiente del contexto o con más barreras.
4. Tomar una decisión sin puntos ni respuesta «correcta».
5. Repetir cinco puertas, comparar otra realidad, descubrir el mapa y terminar con una propuesta de acción.

La interfaz aclara expresamente que una puerta con barreras no significa que una persona «no pueda», ni una puerta abierta significa que «lo tenga todo fácil»: la metáfora describe las condiciones presentes en una situación concreta.

## Probarlo

Opción rápida:

1. Descomprime el ZIP completo.
2. Abre `index.html`.
3. Pulsa **Entrar en la rueda**.

También puedes servir la carpeta con cualquier servidor estático. Por ejemplo:

```bash
python3 -m http.server 8080
```

Y abrir `http://localhost:8080`.

## Publicarlo en GitHub Pages

Sube el contenido de esta carpeta a la raíz del repositorio y configura GitHub Pages para publicar desde la rama principal. `index.html` está en la raíz y no necesita proceso de compilación para funcionar.

## Estructura

```text
zubiak-eraikitzen-game/
├── index.html              # versión autocontenida y lista para abrir/publicar
├── index.template.html     # plantilla modular usada para generar index.html
├── src/
│   ├── styles.css          # identidad visual
│   ├── content.js          # personajes, dimensiones, situaciones y retos
│   └── game.js             # navegación y lógica del juego
├── scripts/
│   └── build-standalone.mjs
├── docs/
│   └── facilitacion.md
├── assets/
│   └── README.md
├── package.json
└── README.md
```

## Qué se ha corregido

- El diseño ya no depende de que `src/styles.css` pueda cargarse desde un ZIP o una previsualización.
- Los botones ya no dependen de archivos JavaScript externos para responder.
- Solo una pantalla tiene la clase `is-active`; el resto permanece oculto hasta que el flujo del juego las activa.
- El ZIP está empaquetado con una estructura limpia y portable, sin rutas internas tipo `mnt/data/...`.
- Se mantiene el código fuente separado para poder editar el proyecto de forma normal en GitHub.

## Privacidad

El prototipo no guarda respuestas personales, no usa `localStorage`, cookies ni analítica.

## Logotipo

La cabecera usa el logotipo oficial de Fundación Agua de Coco proporcionado para el proyecto (`assets/logoADC.png`). El build autocontenido lo incrusta dentro de `index.html`, por lo que también se muestra al abrir el HTML directamente.

## Cambio v5

La situación de **Derechos** se ha concretado como una solicitud de beca para un programa de verano, con formulario, documentación, firma adulta y plazo, para que la mecánica resulte más reconocible para jóvenes.


## v6 — decisiones ligadas al personaje

Las opciones de cada puerta están formuladas desde el punto de vista del personaje con el que se juega. La respuesta del jugador representa lo que ese personaje puede hacer desde su situación; después, el feedback separa esa agencia individual de los cambios que corresponden al grupo, al centro o a otras estructuras.
