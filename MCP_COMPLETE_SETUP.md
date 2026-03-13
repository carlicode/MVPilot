# Guía Completa de Configuración MCP para MVPilot

## 🎯 Overview

MVPilot utiliza 5 MCP servers para automatizar todo el workflow:

1. **Figma MCP** - Diseño y prototipos
2. **GitHub MCP** - Repositorios y código
3. **Jira MCP** - Project management
4. **Slack MCP** - Notificaciones y comunicación
5. **Filesystem MCP** - Manipulación de archivos local

## 📋 Configuración Paso a Paso

### 1. Figma MCP

#### Paso 1.1: Obtener Token de Figma

1. Ve a [Figma](https://www.figma.com)
2. Login con tu cuenta
3. Click en tu avatar (esquina superior derecha)
4. Settings → Account
5. Scroll down hasta "Personal Access Tokens"
6. Click "Generate new token"
7. Configuración del token:
   - **Name:** "MVPilot MCP"
   - **Scopes:** Selecciona:
     - ✅ File content (read)
     - ✅ File content (write)
     - ✅ Comments (read)
     - ✅ Comments (write)
8. Click "Generate token"
9. **COPIA EL TOKEN INMEDIATAMENTE** (se muestra solo una vez)
10. Guárdalo en un lugar seguro

#### Paso 1.2: Configurar en Kiro

El token se configura en `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["get_file", "get_comments", "post_comment"]
    }
  }
}
```

#### Paso 1.3: Verificar Instalación

```bash
# Test manual del MCP
npx @modelcontextprotocol/server-figma

# Debería mostrar: "Figma MCP Server running..."
```

#### Paso 1.4: Usar Figma MCP

Una vez configurado, puedes pedirme:

```
"Crea un nuevo archivo en Figma llamado 'MVPilot Landing'"
"Genera un frame de 1440x800 para el hero section"
"Exporta el diseño como PNG 2x"
"Agrega un comentario en el frame: 'Revisar colores'"
```

---

### 2. GitHub MCP

#### Paso 2.1: Obtener Token de GitHub

1. Ve a [GitHub](https://github.com)
2. Login con tu cuenta
3. Click en tu avatar (esquina superior derecha)
4. Settings
5. Scroll down hasta "Developer settings" (último item)
6. Personal access tokens → Tokens (classic)
7. Click "Generate new token" → "Generate new token (classic)"
8. Configuración del token:
   - **Note:** "MVPilot MCP"
   - **Expiration:** 90 days (o No expiration)
   - **Scopes:** Selecciona:
     - ✅ repo (Full control of private repositories)
     - ✅ workflow (Update GitHub Action workflows)
     - ✅ write:packages (Upload packages)
     - ✅ read:org (Read org data)
9. Click "Generate token"
10. **COPIA EL TOKEN** (empieza con `ghp_`)
11. Guárdalo en un lugar seguro

#### Paso 2.2: Configurar en Kiro

Agrega a `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "figma": { ... },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": [
        "search_repositories",
        "get_file_contents",
        "list_commits",
        "create_repository"
      ]
    }
  }
}
```

#### Paso 2.3: Usar GitHub MCP

```
"Crea un nuevo repositorio llamado 'mi-mvp-app'"
"Lista los commits del repo mvpilot"
"Lee el contenido de README.md"
"Crea un issue: 'Agregar tests'"
```

---

### 3. Jira MCP (Custom)

Jira no tiene MCP oficial, pero podemos crear uno custom o usar la API directamente.

#### Paso 3.1: Obtener Credenciales de Jira

1. Ve a [Atlassian](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Login con tu cuenta de Jira
3. Click "Create API token"
4. Configuración:
   - **Label:** "MVPilot MCP"
5. Click "Create"
6. **COPIA EL TOKEN**
7. También necesitas:
   - Tu email de Jira
   - Tu dominio de Jira (ej: `tu-empresa.atlassian.net`)

#### Paso 3.2: Crear MCP Custom para Jira

Crea el archivo `mcp-servers/jira-mcp/index.js`:

```javascript
#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const axios = require('axios');

const JIRA_DOMAIN = process.env.JIRA_DOMAIN; // tu-empresa.atlassian.net
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

const jiraClient = axios.create({
  baseURL: `https://${JIRA_DOMAIN}/rest/api/3`,
  auth: {
    username: JIRA_EMAIL,
    password: JIRA_API_TOKEN
  },
  headers: {
    'Content-Type': 'application/json'
  }
});

const server = new Server({
  name: 'jira-mcp',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Tool: Create Issue
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'create_issue') {
    const { project, summary, description, issueType } = request.params.arguments;
    
    const response = await jiraClient.post('/issue', {
      fields: {
        project: { key: project },
        summary: summary,
        description: {
          type: 'doc',
          version: 1,
          content: [{
            type: 'paragraph',
            content: [{ type: 'text', text: description }]
          }]
        },
        issuetype: { name: issueType || 'Task' }
      }
    });
    
    return {
      content: [{
        type: 'text',
        text: `Issue created: ${response.data.key}`
      }]
    };
  }
  
  // Tool: List Issues
  if (request.params.name === 'list_issues') {
    const { project } = request.params.arguments;
    
    const response = await jiraClient.get('/search', {
      params: {
        jql: `project = ${project} ORDER BY created DESC`,
        maxResults: 50
      }
    });
    
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(response.data.issues, null, 2)
      }]
    };
  }
});

// List available tools
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'create_issue',
        description: 'Create a new Jira issue',
        inputSchema: {
          type: 'object',
          properties: {
            project: { type: 'string', description: 'Project key (e.g., MVP)' },
            summary: { type: 'string', description: 'Issue summary' },
            description: { type: 'string', description: 'Issue description' },
            issueType: { type: 'string', description: 'Issue type (Task, Bug, Story)' }
          },
          required: ['project', 'summary', 'description']
        }
      },
      {
        name: 'list_issues',
        description: 'List issues in a project',
        inputSchema: {
          type: 'object',
          properties: {
            project: { type: 'string', description: 'Project key' }
          },
          required: ['project']
        }
      }
    ]
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
```

#### Paso 3.3: Configurar en Kiro

Agrega a `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "figma": { ... },
    "github": { ... },
    "jira": {
      "command": "node",
      "args": ["./mcp-servers/jira-mcp/index.js"],
      "env": {
        "JIRA_DOMAIN": "tu-empresa.atlassian.net",
        "JIRA_EMAIL": "tu-email@example.com",
        "JIRA_API_TOKEN": "TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["create_issue", "list_issues"]
    }
  }
}
```

#### Paso 3.4: Instalar Dependencias

```bash
cd mcp-servers/jira-mcp
npm init -y
npm install @modelcontextprotocol/sdk axios
```

#### Paso 3.5: Usar Jira MCP

```
"Crea un issue en Jira proyecto MVP: 'Implementar login'"
"Lista todos los issues del proyecto MVP"
"Crea una tarea: 'Agregar tests unitarios'"
```

---

### 4. Slack MCP (Custom)

#### Paso 4.1: Crear Slack App

1. Ve a [Slack API](https://api.slack.com/apps)
2. Click "Create New App"
3. Selecciona "From scratch"
4. Configuración:
   - **App Name:** "MVPilot Bot"
   - **Workspace:** Selecciona tu workspace
5. Click "Create App"

#### Paso 4.2: Configurar Permisos

1. En la sidebar, click "OAuth & Permissions"
2. Scroll down hasta "Scopes"
3. En "Bot Token Scopes", agrega:
   - ✅ `chat:write` (Send messages)
   - ✅ `chat:write.public` (Send messages to public channels)
   - ✅ `channels:read` (View basic channel info)
   - ✅ `channels:manage` (Create and manage channels)
   - ✅ `groups:write` (Create and manage private channels)
4. Scroll up y click "Install to Workspace"
5. Click "Allow"
6. **COPIA EL "Bot User OAuth Token"** (empieza con `xoxb-`)

#### Paso 4.3: Crear MCP Custom para Slack

Crea `mcp-servers/slack-mcp/index.js`:

```javascript
#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { WebClient } = require('@slack/web-api');

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const slack = new WebClient(SLACK_BOT_TOKEN);

const server = new Server({
  name: 'slack-mcp',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Tool: Send Message
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'send_message') {
    const { channel, text } = request.params.arguments;
    
    const response = await slack.chat.postMessage({
      channel: channel,
      text: text
    });
    
    return {
      content: [{
        type: 'text',
        text: `Message sent to ${channel}`
      }]
    };
  }
  
  // Tool: Create Channel
  if (request.params.name === 'create_channel') {
    const { name } = request.params.arguments;
    
    const response = await slack.conversations.create({
      name: name,
      is_private: false
    });
    
    return {
      content: [{
        type: 'text',
        text: `Channel created: #${name}`
      }]
    };
  }
});

// List available tools
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'send_message',
        description: 'Send a message to a Slack channel',
        inputSchema: {
          type: 'object',
          properties: {
            channel: { type: 'string', description: 'Channel name or ID' },
            text: { type: 'string', description: 'Message text' }
          },
          required: ['channel', 'text']
        }
      },
      {
        name: 'create_channel',
        description: 'Create a new Slack channel',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Channel name (lowercase, no spaces)' }
          },
          required: ['name']
        }
      }
    ]
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
```

#### Paso 4.4: Configurar en Kiro

```json
{
  "mcpServers": {
    "figma": { ... },
    "github": { ... },
    "jira": { ... },
    "slack": {
      "command": "node",
      "args": ["./mcp-servers/slack-mcp/index.js"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["send_message", "create_channel"]
    }
  }
}
```

#### Paso 4.5: Instalar Dependencias

```bash
cd mcp-servers/slack-mcp
npm init -y
npm install @modelcontextprotocol/sdk @slack/web-api
```

#### Paso 4.6: Usar Slack MCP

```
"Crea un canal en Slack llamado 'mi-mvp-project'"
"Envía un mensaje a #general: 'MVP desplegado exitosamente!'"
"Notifica en #mvpilot: 'Nuevo usuario registrado'"
```

---

### 5. Filesystem MCP

Este ya viene incluido con Kiro, solo necesitas habilitarlo.

#### Paso 5.1: Configurar en Kiro

```json
{
  "mcpServers": {
    "figma": { ... },
    "github": { ... },
    "jira": { ... },
    "slack": { ... },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "disabled": false,
      "autoApprove": [
        "read_file",
        "list_directory",
        "get_file_info"
      ]
    }
  }
}
```

#### Paso 5.2: Usar Filesystem MCP

```
"Lista los archivos en la carpeta templates/"
"Lee el contenido de package.json"
"Obtén info del archivo README.md"
```

---

## 🔄 Configuración Completa Final

Archivo `.kiro/settings/mcp.json` completo:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["get_file", "get_comments", "post_comment"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": [
        "search_repositories",
        "get_file_contents",
        "list_commits",
        "create_repository"
      ]
    },
    "jira": {
      "command": "node",
      "args": ["./mcp-servers/jira-mcp/index.js"],
      "env": {
        "JIRA_DOMAIN": "tu-empresa.atlassian.net",
        "JIRA_EMAIL": "tu-email@example.com",
        "JIRA_API_TOKEN": "TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["create_issue", "list_issues"]
    },
    "slack": {
      "command": "node",
      "args": ["./mcp-servers/slack-mcp/index.js"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["send_message", "create_channel"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "disabled": false,
      "autoApprove": [
        "read_file",
        "list_directory",
        "get_file_info"
      ]
    }
  }
}
```

---

## ✅ Verificación de Instalación

### Paso 1: Reconectar MCP Servers

1. Abre Kiro
2. Command Palette (Cmd+Shift+P)
3. Busca "MCP: Reconnect Servers"
4. Espera a que todos se conecten

### Paso 2: Verificar Status

1. Abre el panel de MCP Servers (View → MCP Servers)
2. Deberías ver:
   - ✅ figma (connected)
   - ✅ github (connected)
   - ✅ jira (connected)
   - ✅ slack (connected)
   - ✅ filesystem (connected)

### Paso 3: Test Rápido

Pídeme que ejecute un comando de cada MCP:

```
"Lista los archivos en la carpeta actual" (filesystem)
"Busca repositorios de mvpilot en GitHub" (github)
"Crea un canal de Slack llamado 'test-mvp'" (slack)
"Crea un issue en Jira: 'Test MCP integration'" (jira)
"Obtén info de un archivo de Figma" (figma)
```

---

## 🚀 Uso en MVPilot

### Workflow Completo Automatizado

Cuando un usuario genera un MVP, MVPilot usa todos los MCPs:

```
1. Figma MCP:
   → Genera prototipo visual del landing page
   → Exporta assets (logos, iconos, screenshots)

2. GitHub MCP:
   → Crea repositorio nuevo
   → Push código generado
   → Crea README automático
   → Setup GitHub Actions

3. Jira MCP:
   → Crea proyecto en Jira
   → Genera tasks iniciales:
     • Setup development environment
     • Implement authentication
     • Add analytics
     • Write tests
     • Deploy to production

4. Slack MCP:
   → Crea canal #mi-mvp-project
   → Envía notificación: "MVP generado exitosamente"
   → Post métricas diarias
   → Alertas de errores

5. Filesystem MCP:
   → Lee templates locales
   → Genera archivos de configuración
   → Crea estructura de carpetas
```

---

## 🔒 Seguridad

### Mejores Prácticas

1. **Nunca commitees tokens** en Git
2. **Usa .env files** para desarrollo local
3. **Rota tokens** cada 90 días
4. **Limita scopes** al mínimo necesario
5. **Monitorea uso** de APIs

### Archivo .gitignore

```
# Tokens y secrets
.kiro/settings/mcp.json
.env
.env.local

# MCP servers node_modules
mcp-servers/*/node_modules/
```

### Variables de Entorno (Alternativa)

En vez de hardcodear tokens en mcp.json, usa variables de entorno:

```json
{
  "mcpServers": {
    "figma": {
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "${FIGMA_TOKEN}"
      }
    }
  }
}
```

Luego define en `.env`:
```
FIGMA_TOKEN=figd_tu_token_aqui
GITHUB_TOKEN=ghp_tu_token_aqui
JIRA_TOKEN=tu_token_aqui
SLACK_TOKEN=xoxb_tu_token_aqui
```

---

## 🎯 Próximos Pasos

1. **HOY:** Configurar Figma y GitHub MCPs (los más importantes)
2. **Mañana:** Configurar Jira y Slack MCPs
3. **Esta semana:** Probar workflow completo end-to-end

¿Listo para empezar? Comienza con Figma MCP y avísame cuando tengas el token!
