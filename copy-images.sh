#!/bin/bash

# Script para copiar imágenes a frontend/public

echo "🎨 Copiando imágenes a frontend/public..."

# Crear carpeta public si no existe
mkdir -p frontend/public

# Copiar logo
if [ -f "LOGO.png" ]; then
    cp LOGO.png frontend/public/logo.png
    echo "✅ Logo copiado: frontend/public/logo.png"
else
    echo "❌ No se encontró LOGO.png"
fi

# Copiar demo
if [ -f "demo.png" ]; then
    cp demo.png frontend/public/demo.png
    echo "✅ Demo copiado: frontend/public/demo.png"
else
    echo "❌ No se encontró demo.png"
fi

# Verificar
echo ""
echo "📁 Contenido de frontend/public/:"
ls -lh frontend/public/

echo ""
echo "🎉 ¡Listo! Ahora reinicia el servidor:"
echo "   cd frontend"
echo "   npm run dev"
