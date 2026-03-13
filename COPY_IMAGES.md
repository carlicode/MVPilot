# 📸 Cómo Copiar las Imágenes

## 🎯 Imágenes Necesarias

Tienes 3 imágenes que necesitamos copiar a la carpeta `frontend/public/`:

1. **LOGO.png** - Logo de MVPilot
2. **demo.png** - Mockup del dashboard
3. **Otra imagen** (si la tienes)

## 📋 Pasos para Copiar

### Opción 1: Usando Terminal (Más Rápido)

```bash
# Desde la carpeta mvpilot
cp LOGO.png frontend/public/logo.png
cp demo.png frontend/public/demo.png
```

### Opción 2: Usando Finder (Visual)

1. Abre Finder
2. Navega a `/Users/carli.code/Desktop/mvpilot/`
3. Selecciona `LOGO.png` y `demo.png`
4. Copia (Cmd+C)
5. Navega a `/Users/carli.code/Desktop/mvpilot/frontend/public/`
6. Pega (Cmd+V)
7. Renombra:
   - `LOGO.png` → `logo.png`
   - `demo.png` → `demo.png` (ya está bien)

### Opción 3: Arrastrar y Soltar

1. Abre dos ventanas de Finder
2. Ventana 1: `/Users/carli.code/Desktop/mvpilot/`
3. Ventana 2: `/Users/carli.code/Desktop/mvpilot/frontend/public/`
4. Arrastra las imágenes de la ventana 1 a la ventana 2
5. Renombra si es necesario

## ✅ Verificar que Funcionó

Después de copiar, verifica que las imágenes estén en su lugar:

```bash
ls -la frontend/public/
```

Deberías ver:
```
logo.png
demo.png
```

## 🎨 Dónde se Usan las Imágenes

### logo.png
- **Ubicación:** Navbar (esquina superior izquierda)
- **Tamaño:** 40x40px
- **Componente:** `components/Navigation.tsx`

### demo.png
- **Ubicación:** Nueva sección "See MVPilot in Action"
- **Tamaño:** Full width (responsive)
- **Componente:** `components/DemoShowcase.tsx`

## 🔧 Si las Imágenes No Aparecen

### 1. Verifica la Ruta

Las imágenes deben estar en:
```
frontend/public/logo.png
frontend/public/demo.png
```

### 2. Verifica los Nombres

Los nombres deben ser exactamente:
- `logo.png` (minúsculas)
- `demo.png` (minúsculas)

### 3. Reinicia el Servidor

```bash
# Detén el servidor (Ctrl+C)
# Luego reinicia
npm run dev
```

### 4. Limpia el Cache

```bash
rm -rf frontend/.next
npm run dev
```

## 📐 Optimización de Imágenes (Opcional)

Si las imágenes son muy grandes, puedes optimizarlas:

### Para el Logo:
- **Tamaño recomendado:** 200x200px
- **Formato:** PNG con transparencia
- **Peso:** < 50KB

### Para el Demo:
- **Tamaño recomendado:** 1920x1080px
- **Formato:** PNG o JPG
- **Peso:** < 500KB

### Herramientas para Optimizar:
- **Online:** https://tinypng.com
- **Mac:** Preview (Exportar con calidad reducida)
- **CLI:** `brew install imagemagick` luego `convert input.png -resize 1920x1080 output.png`

## 🎬 Resultado Esperado

Una vez que copies las imágenes y reinicies el servidor:

1. **Navbar:**
   - Verás el logo de MVPilot en la esquina superior izquierda
   - Reemplaza el icono "M" anterior

2. **Nueva Sección:**
   - Aparecerá una nueva sección "See MVPilot in Action"
   - Mostrará el mockup del dashboard
   - Con efectos de hover y animaciones

## 🐛 Troubleshooting

### Error: "Image not found"

**Solución:**
1. Verifica que las imágenes estén en `frontend/public/`
2. Verifica los nombres (minúsculas)
3. Reinicia el servidor

### Error: "Failed to load resource"

**Solución:**
1. Limpia el cache: `rm -rf frontend/.next`
2. Reinstala: `npm install`
3. Reinicia: `npm run dev`

### Las imágenes se ven pixeladas

**Solución:**
1. Usa imágenes de mayor resolución
2. Para el logo: mínimo 200x200px
3. Para el demo: mínimo 1920x1080px

## 📸 Screenshots para el Artículo

Una vez que las imágenes estén funcionando, toma screenshots de:

1. **Navbar con logo** (light mode)
2. **Navbar con logo** (dark mode)
3. **Sección DemoShowcase completa** (light mode)
4. **Sección DemoShowcase completa** (dark mode)
5. **Hover effect en las feature cards**

---

## 🚀 Siguiente Paso

Una vez que copies las imágenes:

```bash
# Verifica que estén copiadas
ls frontend/public/

# Reinicia el servidor
cd frontend
npm run dev

# Abre en el navegador
# http://localhost:3000
```

¡Deberías ver el logo en el navbar y la nueva sección con el mockup! 🎉
