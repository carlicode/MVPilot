# Instrucciones de Setup - MVPilot

## ✅ Lo que he Creado

He creado la estructura completa del frontend con:

1. **Landing Page Completo** con 6 secciones:
   - Navigation (navbar fijo)
   - Hero (con stats y CTA)
   - Problem (90% sin tech co-founder)
   - Solution (5 AI agents)
   - Demo (interactivo con 8 pasos)
   - Metrics (tabs: usuario vs MVPilot)
   - CTA (final con footer)

2. **Componentes React/Next.js:**
   - `frontend/app/page.tsx` - Página principal
   - `frontend/components/Navigation.tsx`
   - `frontend/components/Hero.tsx`
   - `frontend/components/Problem.tsx`
   - `frontend/components/Solution.tsx`
   - `frontend/components/Demo.tsx` - Demo interactivo animado
   - `frontend/components/Metrics.tsx` - Con tabs
   - `frontend/components/CTA.tsx`

3. **Configuración:**
   - `package.json` con todas las dependencias
   - `tailwind.config.ts` con colores custom
   - `tsconfig.json` para TypeScript
   - `.gitignore`

## 🚀 Cómo Ejecutar el Proyecto

### Paso 1: Instalar Dependencias

```bash
cd frontend
npm install
```

### Paso 2: Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

### Paso 3: Build para Producción

```bash
npm run build
npm start
```

## 🎨 Features del Landing

### Demo Interactivo
- Click en "Reproducir Demo" para ver el workflow completo
- 8 pasos animados mostrando todo el proceso
- Terminal simulado con output real
- Navegación manual entre pasos

### Métricas con Tabs
- Tab "Para el Usuario": 6 métricas + dashboard preview
- Tab "Impacto MVPilot": 6 métricas + gráfico de crecimiento
- Animaciones suaves entre tabs

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Navbar colapsable en mobile

## 🔧 Configuración de MCPs (Para Funcionalidad Completa)

Para que el MVP sea completamente funcional, necesitas configurar:

### 1. Figma MCP

**Qué necesito:**
- Figma Personal Access Token

**Cómo obtenerlo:**
1. Ve a https://www.figma.com/settings
2. Scroll a "Personal Access Tokens"
3. Click "Generate new token"
4. Nombre: "MVPilot"
5. Scopes: File content (read/write)
6. Copia el token (empieza con `figd_`)

**Dónde configurarlo:**
```json
// .kiro/settings/mcp.json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "TU_TOKEN_AQUI"
      },
      "disabled": false
    }
  }
}
```

### 2. GitHub MCP

**Qué necesito:**
- GitHub Personal Access Token (classic)

**Cómo obtenerlo:**
1. Ve a https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Nombre: "MVPilot"
4. Scopes: repo, workflow
5. Copia el token (empieza con `ghp_`)

**Dónde configurarlo:**
```json
// Agregar a .kiro/settings/mcp.json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "TU_TOKEN_AQUI"
  },
  "disabled": false
}
```

### 3. Jira (Opcional para MVP visual)

**Qué necesito:**
- Jira API Token
- Email de Jira
- Dominio de Jira (ej: tu-empresa.atlassian.net)

**Cómo obtenerlo:**
1. Ve a https://id.atlassian.com/manage-profile/security/api-tokens
2. Click "Create API token"
3. Label: "MVPilot"
4. Copia el token

**Nota:** Para el MVP visual, podemos hardcodear datos de Jira.

### 4. Slack (Opcional para MVP visual)

**Qué necesito:**
- Slack Bot Token

**Cómo obtenerlo:**
1. Ve a https://api.slack.com/apps
2. Create New App → From scratch
3. App Name: "MVPilot Bot"
4. OAuth & Permissions → Bot Token Scopes:
   - chat:write
   - channels:manage
5. Install to Workspace
6. Copia "Bot User OAuth Token" (empieza con `xoxb-`)

**Nota:** Para el MVP visual, podemos hardcodear notificaciones de Slack.

## ☁️ Configuración de AWS

### Opción 1: AWS CLI (Recomendado)

**Qué necesito:**
- AWS Access Key ID
- AWS Secret Access Key

**Cómo obtenerlo:**
1. AWS Console → IAM
2. Users → Tu usuario → Security credentials
3. Create access key
4. Tipo: CLI access
5. Copia ambas keys

**Dónde configurarlo:**
```bash
# Crear archivo ~/.aws/credentials
[default]
aws_access_key_id = AKIAXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
region = us-east-1
```

**O configurar con CLI:**
```bash
aws configure
# Ingresa:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region: us-east-1
# - Default output format: json
```

### Opción 2: Variables de Entorno

```bash
export AWS_ACCESS_KEY_ID="AKIAXXXXXXXXXXXXXXXX"
export AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
export AWS_REGION="us-east-1"
```

### Opción 3: Darme Acceso Temporal (IAM Role)

Si prefieres no compartir tus credentials, puedes:

1. Crear un IAM User para mí:
   - AWS Console → IAM → Users → Add user
   - Username: "mvpilot-dev"
   - Permissions: AdministratorAccess (temporal)
   - Create access key

2. Compartir las credentials de forma segura

3. Después de la demo, eliminar el usuario

## 📊 Para el MVP Visual (Sin Backend Real)

Si quieres ver el landing funcionando SIN configurar todo:

1. Solo instala y ejecuta el frontend:
```bash
cd frontend
npm install
npm run dev
```

2. El demo interactivo funciona con datos hardcodeados
3. Las métricas son estáticas pero visuales
4. Todo se ve profesional y listo para screenshots

## 🎬 Para el Video Demo

Una vez que el frontend esté corriendo:

1. Abre http://localhost:3000
2. Graba el screen mientras:
   - Navegas por las secciones
   - Click en "Reproducir Demo"
   - Muestras las métricas (ambos tabs)
   - Scroll por todo el landing

3. Edita el video para que dure ~3 minutos

## 📸 Screenshots Necesarios

Captura screenshots de:
1. Hero section (arriba del fold)
2. Problem section (estadísticas)
3. Solution section (5 agents)
4. Demo interactivo (en acción)
5. Métricas del usuario (tab 1)
6. Métricas de MVPilot (tab 2)
7. Dashboard preview
8. CTA final

## 🚀 Deploy a Producción

### Opción 1: Vercel (Más Fácil)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

### Opción 2: AWS Amplify

```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar
amplify init
amplify add hosting
amplify publish
```

### Opción 3: Manual a S3 + CloudFront

```bash
# Build
npm run build

# Upload a S3
aws s3 sync out/ s3://mvpilot-frontend --delete

# Invalidar CloudFront cache
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

## ❓ Qué Necesito de Ti

Para hacer el MVP completamente funcional, necesito:

### Mínimo (Solo Visual):
- ✅ Nada! El frontend ya funciona con datos hardcodeados

### Para Funcionalidad Real:
1. **Figma Token** (para generar diseños)
2. **GitHub Token** (para crear repos)
3. **AWS Credentials** (para deploy real)

### Opcional (Para Demo Completo):
4. **Jira Token** (para project management)
5. **Slack Token** (para notificaciones)

## 📝 Próximos Pasos

1. **HOY:** Ejecuta el frontend y verifica que todo se vea bien
2. **MAÑANA:** Graba el video demo
3. **ESTA SEMANA:** Toma screenshots y escribe el artículo
4. **ANTES DE MARCH 13:** Submit el artículo

## 🎯 Estado Actual

- ✅ Frontend completo y funcional
- ✅ Demo interactivo con animaciones
- ✅ Métricas visualizadas (usuario + MVPilot)
- ✅ Responsive design
- ✅ Listo para screenshots y video
- ⏳ Pendiente: Configurar MCPs (opcional)
- ⏳ Pendiente: Backend real (opcional para competencia)

## 💡 Recomendación

Para la competencia, el landing visual es suficiente. Puedes:

1. Ejecutar el frontend
2. Grabar video demo
3. Tomar screenshots
4. Escribir artículo con estos assets
5. Submit antes de March 13

El backend real puede esperar para después de ganar 😉

---

**¿Listo para ejecutar? Corre estos comandos:**

```bash
cd frontend
npm install
npm run dev
```

Luego abre http://localhost:3000 y disfruta! 🚀
