# Cómo Correr el Proyecto MVPilot

## Opción 1: Inicio Rápido (Recomendado)

```bash
cd frontend
npm run dev
```

Luego abre tu navegador en: **http://localhost:3000**

---

## Opción 2: Desde Cero

### 1. Navega al directorio frontend
```bash
cd frontend
```

### 2. Instala las dependencias (si no lo has hecho)
```bash
npm install
```

### 3. Inicia el servidor de desarrollo
```bash
npm run dev
```

### 4. Abre tu navegador
Visita: **http://localhost:3000**

---

## Comandos Disponibles

### Desarrollo
```bash
npm run dev
# Inicia el servidor de desarrollo en http://localhost:3000
# Hot reload activado - los cambios se reflejan automáticamente
```

### Build para Producción
```bash
npm run build
# Crea una versión optimizada para producción
```

### Iniciar Producción
```bash
npm start
# Inicia el servidor en modo producción (después de build)
```

### Linting
```bash
npm run lint
# Verifica errores de código
```

---

## Verificación Rápida

### ✅ Checklist antes de correr:
- [ ] Node.js instalado (v18 o superior)
- [ ] npm instalado
- [ ] Estás en el directorio `/frontend`
- [ ] Las dependencias están instaladas (`node_modules` existe)

### 🔍 Verificar instalación:
```bash
node --version  # Debe mostrar v18.x o superior
npm --version   # Debe mostrar 9.x o superior
```

---

## Características que Verás

### 🎨 Colores Oficiales MVPilot
- Negro principal (#0B0F0C) en dark mode
- Verde MVPilot (#22C55E) en botones y highlights
- Estilo profesional devtool

### ⚡ Métricas Actualizadas
- **2 días** para generar MVP
- **105,000x más rápido** que métodos tradicionales
- **$0** costo inicial

### 🌐 Funcionalidades
- ✅ Dark mode funcional (toggle en navbar)
- ✅ Cambio de idioma EN/ES (botones en navbar)
- ✅ Logo visible en navbar
- ✅ Demo image visible
- ✅ Animaciones suaves
- ✅ Responsive design
- ✅ Todos los textos centrados

---

## Solución de Problemas

### Error: "Cannot find module"
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error: "Port 3000 already in use"
```bash
# Opción 1: Mata el proceso en el puerto 3000
lsof -ti:3000 | xargs kill -9

# Opción 2: Usa otro puerto
PORT=3001 npm run dev
```

### Error: "Command not found: npm"
```bash
# Instala Node.js desde https://nodejs.org/
# O usa homebrew (macOS):
brew install node
```

### Las imágenes no se ven
```bash
# Verifica que las imágenes estén en public/
ls -la frontend/public/
# Deberías ver: logo.png y demo.png

# Si no están, cópialas:
cp LOGO.png frontend/public/logo.png
cp demo.png frontend/public/demo.png
```

---

## Estructura del Proyecto

```
frontend/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout con providers
│   └── globals.css       # Estilos globales
├── components/
│   ├── Navigation.tsx    # Navbar con logo y controles
│   ├── Hero.tsx          # Sección hero
│   ├── Problem.tsx       # Sección problema
│   ├── Solution.tsx      # Sección solución
│   ├── Demo.tsx          # Demo interactivo
│   ├── DemoShowcase.tsx  # Showcase con imagen
│   ├── Metrics.tsx       # Métricas
│   ├── CTA.tsx           # Call to action
│   ├── ThemeToggle.tsx   # Toggle dark mode
│   ├── ThemeProvider.tsx # Provider de tema
│   └── LanguageContext.tsx # Context de idioma
├── public/
│   ├── logo.png          # Logo MVPilot
│   └── demo.png          # Demo screenshot
├── package.json          # Dependencias
├── tailwind.config.ts    # Configuración Tailwind
└── next.config.mjs       # Configuración Next.js
```

---

## Próximos Pasos

### Para Desarrollo Local
1. Corre `npm run dev`
2. Haz cambios en los archivos
3. Los cambios se reflejan automáticamente
4. Prueba dark mode y cambio de idioma

### Para Producción
1. `npm run build` - Crea build optimizado
2. `npm start` - Inicia servidor producción
3. O despliega en Vercel/AWS Amplify

### Para la Competencia
1. Toma screenshots de la landing
2. Graba video demo (3 min)
3. Muestra dark mode y responsive
4. Destaca las métricas: 2 días, 105,000x faster

---

## Comandos Rápidos (Copy-Paste)

### Iniciar desde el directorio raíz del proyecto:
```bash
cd frontend && npm run dev
```

### Verificar que todo funciona:
```bash
cd frontend && npm install && npm run dev
```

### Limpiar y reiniciar:
```bash
cd frontend && rm -rf node_modules .next && npm install && npm run dev
```

---

## 🎯 Listo!

Una vez que ejecutes `npm run dev`, deberías ver:

```
▲ Next.js 14.2.0
- Local:        http://localhost:3000

✓ Ready in 2.3s
```

Abre **http://localhost:3000** y disfruta tu landing page MVPilot! 🚀
