import dayjs from 'dayjs';
import path from 'path';

export function getTimestamp(format) {
 return dayjs().format(format);
}

export function getCallerFile() {
 const stack = new Error().stack.split('\n')[3];
 const match = stack.match(/\((.*):(\d+):(\d+)\)/);
 if (match) return { file: path.basename(match[1]), line: match[2] };
 return { file: 'unknown', line: 0 };
}
