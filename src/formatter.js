import chalk from 'chalk';
import { getTimestamp, getCallerFile } from './utils.js';
import config from './config.js';

export function formatLog(level, messages) {
 const theme = config.theme[level] || { color: 'white', icon: '' };
 const { file, line } = getCallerFile();

 const message = formatMessage(messages);

 let output = config.format
  .replace('{time}', getTimestamp(config.timeFormat))
  .replace('{icon}', theme.icon)
  .replace('{level}', level)
  .replace('{message}', message)
  .replace('{file}', file)
  .replace('{line}', line);

 if (theme.color && chalk[theme.color]) output = chalk[theme.color](output);

 return output;
}

function formatMessage(msg) {
 if (Array.isArray(msg)) {
  return msg.map(item => (typeof item === 'object' ? JSON.stringify(item, null, 2) : String(item))).join(' ');
 }
 if (typeof msg === 'object') return JSON.stringify(msg, null, 2);
 return String(msg);
}
