#!/bin/bash
echo "📸 Copiando imágenes..."
mkdir -p frontend/public
cp LOGO.png frontend/public/logo.png 2>/dev/null && echo "✅ Logo copiado" || echo "❌ Error copiando logo"
cp demo.png frontend/public/demo.png 2>/dev/null && echo "✅ Demo copiado" || echo "❌ Error copiando demo"
echo "✅ Listo! Reinicia el servidor con: cd frontend && npm run dev"
