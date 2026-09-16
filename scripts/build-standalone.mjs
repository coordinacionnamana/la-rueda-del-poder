import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const [template, css, content, game, logo] = await Promise.all([
  readFile(resolve(root, 'index.template.html'), 'utf8'),
  readFile(resolve(root, 'src/styles.css'), 'utf8'),
  readFile(resolve(root, 'src/content.js'), 'utf8'),
  readFile(resolve(root, 'src/game.js'), 'utf8'),
  readFile(resolve(root, 'assets/logoADC.png')),
]);

const logoDataUri = `data:image/png;base64,${logo.toString('base64')}`;

let html = template
  .replace('  <link rel="stylesheet" href="src/styles.css" />', `  <style>\n${css}\n  </style>`)
  .replace('src="assets/logoADC.png"', `src="${logoDataUri}"`)
  .replace('  <script src="src/content.js"></script>\n  <script src="src/game.js"></script>', `  <script>\n${content}\n  </script>\n  <script>\n${game}\n  </script>`);

html = html.replace(
  '<meta name="description" content="La Rueda del Poder: experiencia educativa de Fundación Agua de Coco sobre privilegios, desigualdades e interseccionalidad." />',
  '<meta name="description" content="La Rueda del Poder: experiencia educativa de Fundación Agua de Coco sobre privilegios, desigualdades e interseccionalidad." />\n  <!-- Archivo autocontenido: funciona al abrir index.html directamente, sin servidor. -->'
);

await writeFile(resolve(root, 'index.html'), html, 'utf8');
console.log('index.html generado correctamente (CSS y JavaScript embebidos).');
