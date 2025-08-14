import baseConfig from './config.js';
import { formatLog } from './formatter.js';

global.__haxLoggerConfig = { ...baseConfig };

function log(level, ...messages) {
 const formatted = formatLog(level, messages);
 console.log(formatted);

 for (const plugin of global.__haxLoggerConfig.plugins) {
  try { plugin({ level, text: formatted }); }
  catch (err) { console.error('Erro no plugin:', err); }
 }
}

export default {

 config(custom) {
  global.__haxLoggerConfig = { ...global.__haxLoggerConfig, ...custom };
 },


 setTheme(theme) { global.__haxLoggerConfig.theme = { ...global.__haxLoggerConfig.theme, ...theme }; },
 setFormat(format) { global.__haxLoggerConfig.format = format; },
 setTimeFormat(timeFormat) { global.__haxLoggerConfig.timeFormat = timeFormat; },
 usePlugin(plugin) { global.__haxLoggerConfig.plugins.push(plugin); },


 info: (...msg) => log('INFO', ...msg),
 warn: (...msg) => log('WARN', ...msg),
 error: (...msg) => log('ERROR', ...msg),
 debug: (...msg) => log('DEBUG', ...msg)
};
