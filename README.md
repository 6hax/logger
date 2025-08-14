# @lowhax/logger
---

## 🚀 Instalação

```
npm install @lowhax/logger
```

## Como Usar?

```js
import logger from '@lowhax/logger';

logger.info('Servidor iniciado!');
logger.warn('Conexão instável!');
logger.error('Error!');
logger.debug({ user: 'Hax', status: 'online' });
```

---
## Como Configurar? (Opcional)

```js
logger.setFormat('[{time}] {icon} {message}');
logger.setTimeFormat('HH:mm:ss');
logger.usePlugin(log => {
if (log.level === 'ERROR') console.log('🚨 ALERTA: erro detectado!');
});

logger.setTheme({
INFO: { color: 'green', icon: '✅' },
WARN: { color: 'yellow', icon: '⚠️' },
ERROR: { color: 'red', icon: '🔥' },
DEBUG: { color: 'magenta', icon: '🐞' }
});
```

---

## 📝 Formatos de log
Use variáveis para customizar:
| Variável   | Descrição                    |
|------------|------------------------------|
| `{time}`   | Hora/Data atual              |
| `{icon}`   | Ícone do nível de log        |
| `{level}`  | Nome do nível (`INFO`, etc.) |
| `{message}`| Mensagem do log              |
| `{line}`   | Linha do código              |

---

## 💡 Dicas
- Use `logger.debug({ objeto })` para imprimir objetos formatados  
- Use plugins para enviar notificações ou integrar com sistemas externos  
- O logger **não grava arquivos**, focado apenas no terminal  

---


## made with <3 by hax