import fs from 'fs';
import path from 'path';
import { ensureDir } from './utils.js';

export function sendToTransports(formatted, level) {
 for (const t of global.__haxLoggerConfig.transports) {
  if (t.type === 'console') {
   console.log(formatted);
  } else if (t.type === 'file') {
   const filePath = path.resolve(t.path);
   ensureDir(filePath);
   fs.appendFileSync(filePath, removeColors(formatted) + '\n');
  }
 }

 for (const plugin of global.__haxLoggerConfig.plugins) {
  try {
   plugin({ level, text: formatted });
  } catch (err) {
   console.error('Erro no plugin do logger:', err);
  }
 }
}

function removeColors(str) {
 return str.replace(/\x1B\[\d+m/g, '');
}
