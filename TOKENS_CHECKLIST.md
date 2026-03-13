# Checklist de Tokens y Accesos para MVPilot

## 🔑 Tokens Necesarios

### 1. Figma Personal Access Token

**Dónde obtenerlo:**
- URL: https://www.figma.com/settings
- Sección: Personal Access Tokens
- Permisos necesarios:
  - ✅ File content (read)
  - ✅ File content (write)
  - ✅ Comments (read)
  - ✅ Comments (write)

**Formato del token:**
```
figd_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Dónde usarlo:**
```json
// .kiro/settings/mcp.json
"figma": {
  "env": {
    "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_TU_TOKEN_AQUI"
  }
}
```

**Status:**
- [ ] Token obtenido
- [ ] Token configurado en mcp.json
- [ ] MCP probado y funcionando

---

### 2. GitHub Personal Access Token

**Dónde obtenerlo:**
- URL: https://github.com/settings/tokens
- Tipo: Personal access tokens (classic)
- Permisos necesarios:
  - ✅ repo (Full control)
  - ✅ workflow (Update workflows)
  - ✅ write:packages (Upload packages)
  - ✅ read:org (Read org data)

**Formato del token:**
```
ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Dónde usarlo:**
```json
// .kiro/settings/mcp.json
"github": {
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_TU_TOKEN_AQUI"
  }
}
```

**Status:**
- [ ] Token obtenido
- [ ] Token configurado en mcp.json
- [ ] MCP probado y funcionando

---

### 3. Jira API Token

**Dónde obtenerlo:**
- URL: https://id.atlassian.com/manage-profile/security/api-tokens
- Botón: Create API token
- Label: "MVPilot MCP"

**Información adicional necesaria:**
- Email de Jira: tu-email@example.com
- Dominio de Jira: tu-empresa.atlassian.net

**Formato del token:**
```
ATATT3xFfGF0XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Dónde usarlo:**
```json
// .kiro/settings/mcp.json
"jira": {
  "env": {
    "JIRA_DOMAIN": "tu-empresa.atlassian.net",
    "JIRA_EMAIL": "tu-email@example.com",
    "JIRA_API_TOKEN": "TU_TOKEN_AQUI"
  }
}
```

**Pasos adicionales:**
1. Crear carpeta: `mkdir -p mcp-servers/jira-mcp`
2. Copiar código del MCP desde `MCP_COMPLETE_SETUP.md`
3. Instalar dependencias: `cd mcp-servers/jira-mcp && npm install`

**Status:**
- [ ] Token obtenido
- [ ] Email y dominio identificados
- [ ] MCP custom creado
- [ ] Dependencias instaladas
- [ ] Token configurado en mcp.json
- [ ] MCP probado y funcionando

---

### 4. Slack Bot Token

**Dónde obtenerlo:**
1. URL: https://api.slack.com/apps
2. Click "Create New App" → "From scratch"
3. App Name: "MVPilot Bot"
4. Workspace: Selecciona tu workspace
5. OAuth & Permissions → Bot Token Scopes:
   - ✅ chat:write
   - ✅ chat:write.public
   - ✅ channels:read
   - ✅ channels:manage
   - ✅ groups:write
6. Install to Workspace
7. Copiar "Bot User OAuth Token"

**Formato del token:**
```
xoxb-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX
```

**Dónde usarlo:**
```json
// .kiro/settings/mcp.json
"slack": {
  "env": {
    "SLACK_BOT_TOKEN": "xoxb-TU_TOKEN_AQUI"
  }
}
```

**Pasos adicionales:**
1. Crear carpeta: `mkdir -p mcp-servers/slack-mcp`
2. Copiar código del MCP desde `MCP_COMPLETE_SETUP.md`
3. Instalar dependencias: `cd mcp-servers/slack-mcp && npm install`

**Status:**
- [ ] Slack App creada
- [ ] Permisos configurados
- [ ] App instalada en workspace
- [ ] Token obtenido
- [ ] MCP custom creado
- [ ] Dependencias instaladas
- [ ] Token configurado en mcp.json
- [ ] MCP probado y funcionando

---

### 5. AWS Credentials

**Para desarrollo local:**

**Dónde obtenerlo:**
1. AWS Console → IAM
2. Users → Tu usuario → Security credentials
3. Create access key
4. Tipo: CLI access
5. Copiar Access Key ID y Secret Access Key

**Formato:**
```
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AWS_REGION=us-east-1
```

**Dónde usarlo:**
```bash
# ~/.aws/credentials
[default]
aws_access_key_id = AKIAXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
region = us-east-1
```

**Status:**
- [ ] Access Key creado
- [ ] Credentials configurados en ~/.aws/credentials
- [ ] AWS CLI probado: `aws sts get-caller-identity`

---

### 6. Kiro Credits

**Redimir créditos:**
- URL: https://kiro.dev/redeem/aideas2026-cf334b5fd880
- Valor: 2000 Kiro Credits (Pro+ subscription)

**Status:**
- [ ] Créditos redimidos
- [ ] Kiro Pro+ activo

---

### 7. AWS Credits

**Redimir créditos:**
- Código: PC3C41VVYZPPTNX
- Valor: $200 AWS Credits
- URL: https://console.aws.amazon.com/billing/home#/credits

**Pasos:**
1. AWS Console → Billing → Credits
2. Enter promo code: PC3C41VVYZPPTNX
3. Apply

**Status:**
- [ ] Créditos aplicados
- [ ] Balance verificado en AWS Console

---

## 📋 Archivo mcp.json Completo

Una vez que tengas todos los tokens, tu archivo `.kiro/settings/mcp.json` debería verse así:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_XXXX"
      },
      "disabled": false,
      "autoApprove": ["get_file", "get_comments", "post_comment"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_XXXX"
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
        "JIRA_API_TOKEN": "ATATT3xFfGF0XXXX"
      },
      "disabled": false,
      "autoApprove": ["create_issue", "list_issues"]
    },
    "slack": {
      "command": "node",
      "args": ["./mcp-servers/slack-mcp/index.js"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-XXXX"
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

## 🧪 Tests de Verificación

Una vez configurados todos los MCPs, ejecuta estos tests:

### Test 1: Figma MCP
```
"Obtén información de un archivo de Figma"
```
**Resultado esperado:** Info del archivo o lista de archivos

### Test 2: GitHub MCP
```
"Busca repositorios de mvpilot en GitHub"
```
**Resultado esperado:** Lista de repos encontrados

### Test 3: Jira MCP
```
"Crea un issue en Jira proyecto TEST: 'Verificar integración MCP'"
```
**Resultado esperado:** Issue creado con key (ej: TEST-123)

### Test 4: Slack MCP
```
"Crea un canal de Slack llamado 'test-mvpilot'"
```
**Resultado esperado:** Canal creado exitosamente

### Test 5: Filesystem MCP
```
"Lista los archivos en la carpeta docs/"
```
**Resultado esperado:** Lista de archivos .md

### Test 6: Workflow Completo
```
"Simula la generación de un MVP para una app de tareas:
1. Crea un repo en GitHub llamado 'task-app-mvp'
2. Crea un proyecto en Jira llamado 'TASK'
3. Crea 3 issues: 'Setup', 'Implement auth', 'Deploy'
4. Crea un canal de Slack llamado 'task-app-mvp'
5. Envía mensaje a ese canal: 'MVP generado exitosamente'"
```
**Resultado esperado:** Todos los pasos ejecutados sin errores

---

## 🔒 Seguridad

### Mejores Prácticas

1. **Nunca commitees tokens en Git**
   ```bash
   # Agrega a .gitignore
   .kiro/settings/mcp.json
   .env
   .env.local
   ```

2. **Usa variables de entorno en producción**
   ```bash
   # .env
   FIGMA_TOKEN=figd_xxx
   GITHUB_TOKEN=ghp_xxx
   JIRA_TOKEN=xxx
   SLACK_TOKEN=xoxb-xxx
   ```

3. **Rota tokens cada 90 días**
   - Configura recordatorio en calendario
   - Regenera tokens antes de expiración

4. **Limita scopes al mínimo necesario**
   - Solo permisos que realmente usas
   - Revisa permisos periódicamente

5. **Monitorea uso de APIs**
   - Revisa logs de acceso
   - Alerta si hay uso inusual

---

## 📞 Soporte

### Si algo no funciona:

**Figma MCP:**
- Verifica que el token tenga permisos correctos
- Prueba el token en Figma API directamente
- Revisa logs: Kiro → Output → MCP Servers

**GitHub MCP:**
- Verifica que el token sea "classic" no "fine-grained"
- Asegúrate de tener permisos en el repo
- Prueba: `curl -H "Authorization: token ghp_xxx" https://api.github.com/user`

**Jira MCP:**
- Verifica dominio (debe ser .atlassian.net)
- Prueba API: `curl -u email:token https://tu-empresa.atlassian.net/rest/api/3/myself`
- Revisa que el proyecto exista

**Slack MCP:**
- Verifica que el bot esté instalado en el workspace
- Asegúrate de que el bot tenga permisos
- Prueba: `curl -H "Authorization: Bearer xoxb-xxx" https://slack.com/api/auth.test`

**Filesystem MCP:**
- Debería funcionar out-of-the-box
- Si no, reinstala: `npx -y @modelcontextprotocol/server-filesystem`

---

## ✅ Checklist Final

### Tokens Obtenidos
- [ ] Figma Personal Access Token
- [ ] GitHub Personal Access Token
- [ ] Jira API Token + Email + Domain
- [ ] Slack Bot Token
- [ ] AWS Access Key + Secret
- [ ] Kiro Credits redimidos
- [ ] AWS Credits aplicados

### MCPs Configurados
- [ ] Figma MCP en mcp.json
- [ ] GitHub MCP en mcp.json
- [ ] Jira MCP custom creado
- [ ] Slack MCP custom creado
- [ ] Filesystem MCP habilitado

### Tests Pasados
- [ ] Figma MCP funcionando
- [ ] GitHub MCP funcionando
- [ ] Jira MCP funcionando
- [ ] Slack MCP funcionando
- [ ] Filesystem MCP funcionando
- [ ] Workflow completo probado

### Seguridad
- [ ] Tokens en .gitignore
- [ ] Permisos mínimos configurados
- [ ] Recordatorio de rotación configurado

---

**Una vez completado este checklist, estarás listo para empezar a construir MVPilot! 🚀**
