# Estructura y ejecución de módulos

Este repositorio contiene una parte estática (HTML/CSS puro) y módulos independientes con Vite.

- `enfermeria-sass-vite/`: Módulo que usa Vite + Sass.
- `urgencias-tailwind-vite/`: Módulo que usa Vite + Tailwind (esqueleto).

Ejecutar cada módulo:

```powershell
cd enfermeria-sass-vite
npm install
npm run dev

cd ../urgencias-tailwind-vite
npm install
npm run dev
```

La parte estática (`index.html`, `home.html`, `css/`) no requiere Node.
