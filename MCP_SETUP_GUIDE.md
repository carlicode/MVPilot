# Guía de Configuración MCP para MVPilot

## 🔌 MCP Servers Necesarios

Para MVPilot necesitamos 3 MCP servers principales:

1. **Figma MCP** - Generar prototipos del landing page
2. **GitHub MCP** - Crear repos automáticamente
3. **Filesystem MCP** - Manipular templates y código

## 📋 Paso a Paso: Configurar Figma MCP

### 1. Obtener Figma Personal Access Token

1. Ve a [Figma](https://www.figma.com)
2. Click en tu avatar (esquina superior derecha)
3. Settings → Account → Personal Access Tokens
4. Click "Generate new token"
5. Nombre: "MVPilot MCP"
6. Scopes: Selecciona "File content" (read/write)
7. Click "Generate token"
8. **COPIA EL TOKEN INMEDIATAMENTE** (solo se muestra una vez)

### 2. Configurar MCP en Kiro

El archivo `.kiro/settings/mcp.json` ya existe. Necesitas actualizarlo con tu token.

**Ubicación del archivo:**
```
~/.kiro/settings/mcp.json  (user-level)
o
.kiro/settings/mcp.json    (workspace-level)
```

**Contenido sugerido:**

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "TU_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["get_file", "get_comments"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "TU_GITHUB_TOKEN_AQUI"
      },
      "disabled": false,
      "autoApprove": ["search_repositories", "get_file_contents"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "disabled": false,
      "autoApprove": ["read_file", "list_directory"]
    }
  }
}
```

### 3. Verificar Instalación

Después de configurar, reinicia Kiro o reconecta los MCP servers:

1. Abre Command Palette (Cmd+Shift+P)
2. Busca "MCP: Reconnect Servers"
3. Verifica que Figma MCP aparece en la lista

### 4. Probar Figma MCP

Una vez configurado, puedes pedirme que:

```
"Crea un frame en Figma para el hero section de MVPilot"
"Genera un prototipo de landing page en Figma"
"Exporta el diseño de Figma como imágenes"
```

## 🎨 Cómo Usar Figma MCP en MVPilot

### Caso de Uso 1: Generar Landing Page

```typescript
// Yo puedo ejecutar esto a través del MCP
const figmaFile = await figma.createFile({
  name: "MVPilot Landing Page",
  type: "design"
});

// Crear frames para cada sección
await figma.createFrame({
  fileId: figmaFile.id,
  name: "Hero Section",
  width: 1440,
  height: 800,
  backgroundColor: "#6366f1"
});

await figma.createFrame({
  fileId: figmaFile.id,
  name: "Problem Section",
  width: 1440,
  height: 600
});

// ... más secciones
```

### Caso de Uso 2: Exportar Assets

```typescript
// Exportar frames como imágenes
await figma.exportFrame({
  fileId: figmaFile.id,
  frameId: heroFrame.id,
  format: "PNG",
  scale: 2
});
```

### Caso de Uso 3: Generar Componentes

```typescript
// Crear component library
await figma.createComponent({
  fileId: figmaFile.id,
  name: "Button Primary",
  type: "COMPONENT"
});
```

## 🔧 Troubleshooting

### Error: "FIGMA_PERSONAL_ACCESS_TOKEN not found"

**Solución:**
1. Verifica que copiaste el token correctamente
2. Asegúrate de que no hay espacios extra
3. El token debe estar entre comillas en el JSON

### Error: "Permission denied"

**Solución:**
1. Verifica que el token tiene permisos de "File content"
2. Regenera el token si es necesario
3. Asegúrate de que el token no ha expirado

### Error: "MCP server not responding"

**Solución:**
1. Reconecta el servidor: Command Palette → "MCP: Reconnect Servers"
2. Verifica que `npx` está instalado: `npx --version`
3. Reinstala el MCP server: `npx -y @modelcontextprotocol/server-figma`

## 📚 Comandos Útiles

### Verificar que npx está instalado
```bash
npx --version
```

### Instalar manualmente el Figma MCP
```bash
npx -y @modelcontextprotocol/server-figma
```

### Ver logs de MCP
En Kiro, abre el Output panel y selecciona "MCP Servers"

## 🎯 Próximos Pasos

Una vez configurado Figma MCP:

1. **Diseñar landing page:** Pídeme que cree el diseño en Figma
2. **Exportar assets:** Obtener imágenes para el frontend
3. **Iterar diseño:** Hacer cambios basados en feedback
4. **Generar prototipos:** Crear versiones interactivas

## 💡 Tips

1. **Organiza tu Figma:** Crea un proyecto específico para MVPilot
2. **Usa componentes:** Reutiliza elementos (botones, cards, etc)
3. **Design tokens:** Define colores, tipografía, spacing
4. **Responsive:** Diseña para desktop (1440px) y mobile (375px)
5. **Exporta 2x:** Para pantallas retina

## 🔗 Referencias

- [Figma API Docs](https://www.figma.com/developers/api)
- [MCP Protocol](https://modelcontextprotocol.io)
- [Kiro MCP Guide](https://docs.kiro.dev/mcp)

---

**¿Listo para diseñar? Configura tu token y empecemos! 🎨**
