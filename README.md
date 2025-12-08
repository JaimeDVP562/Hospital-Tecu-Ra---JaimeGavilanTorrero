# Hospital Tecu-Ra — Jaime Gavilan Torrero

Documentación

- **Nombre:** Jaime Gavilan Torrero
- **Título del proyecto:** Hospital Tecu-Ra
- **Repositorio:** https://github.com/JaimeDVP562/Hospital-Tecu-Ra---JaimeGavilanTorrero
- **URL del despliegue en GitHub Pages:** https://JaimeDVP562.github.io/Hospital-Tecu-Ra---JaimeGavilanTorrero/

Estructura del proyecto (resumen)

```
docs/
    ├─ css/
    │   ├─ styles.css
    │   ├─ variables.css
    │   ├─ mixins.css
    │   └─ ...
    ├─ urgencias-tailwind-vite/
    │   └─ dist/
    │       └─ assets/
    ├─ enfermeria-sass-vite/
    │   └─ dist/
    │       └─ assets/
    ├─ funcionalidades/
    │   └─ *.html
    ├─ home.html
    └─ index.html

hospital-frontend/
    └─ (código auxiliar / módulos)

src/ (opcional para desarrollo local)
package.json (si aplica para módulos con Vite)
README.md
```

Notas para el profesor

- Este repositorio contiene una versión estática del proyecto preparada para publicarse en GitHub Pages desde la carpeta `docs/`.
- Se han corregido rutas relativas a `css/styles.css` desde los subdirectorios generados por Vite y se han reemplazado los partials con guion bajo (`_variables.css`, etc.) por versiones sin guion bajo para asegurar que GitHub Pages los publique.
- Para probar localmente sin subir a GitHub, sirva la carpeta `docs/` por HTTP (por ejemplo `python -m http.server 8000` dentro de `docs`) y abra `http://localhost:8000/`.

Entrega

- Fecha de entrega: 2025-12-08
- Contenido entregado: la carpeta `docs/` configurada para GitHub Pages con rutas correctas a CSS/JS y los assets de cada módulo en `dist/assets/`.

URL del proyecto

- **Repositorio:** https://github.com/JaimeDVP562/Hospital-Tecu-Ra---JaimeGavilanTorrero
- **Despliegue (GitHub Pages):** https://JaimeDVP562.github.io/Hospital-Tecu-Ra---JaimeGavilanTorrero/

