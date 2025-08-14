export default {
 theme: {
  INFO: { color: 'cyan', icon: 'ℹ️' },
  WARN: { color: 'yellow', icon: '⚠️' },
  ERROR: { color: 'red', icon: '❌' },
  DEBUG: { color: 'magenta', icon: '🐞' }
 },
 format: "[{time}] {icon} [{level}] {message} ({file}:{line})",
 timeFormat: "YYYY-MM-DD HH:mm:ss",
 plugins: []
};
