# Arkyproyectos SAC

[![Sitio Web Oficial](https://img.shields.io/badge/Sitio%20Web-arkiproyectos.cmaquera.com-brightgreen?style=flat-square&logo=google-chrome)](https://arkiproyectos.cmaquera.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Maps-OpenStreetMap%20%2F%20Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com/)

Sitio web corporativo de **Arkyproyectos SAC**, empresa especializada en ingeniería, arquitectura, diseño estructural y consultoría civil en Tacna, Perú.

🔗 **Enlace del proyecto en producción:** [https://arkiproyectos.cmaquera.com/](https://arkiproyectos.cmaquera.com/)

---

## 📌 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Páginas del Sitio](#-páginas-del-sitio)
- [Servicios Ofrecidos](#-servicios-ofrecidos)
- [Características y Optimizaciones](#-características-y-optimizaciones)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue y Ejecución Local](#-despliegue-y-ejecución-local)

---

## 🏢 Descripción General

**Arkyproyectos SAC** ofrece soluciones integrales en el sector de la construcción, desarrollo de proyectos civiles y consultoría desde el año 2011. El portal web presenta sus servicios, experiencia, trayectoria y canales directos de cotización y atención al cliente.

---

## 📄 Páginas del Sitio

| Archivo | Sección | Descripción |
|---|---|---|
| [`index.html`](index.html) | **Inicio** | Portada con video de fondo responsivo en alta definición, llamada a la acción, resumen de servicios y testimonios. |
| [`servicios.html`](servicios.html) | **Servicios** | Catálogo técnico de las especialidades y soluciones profesionales ofrecidas. |
| [`nosotros.html`](nosotros.html) | **Nosotros** | Misión, visión, trayectoria empresarial y valores de puntualidad y calidad. |
| [`contacto.html`](contacto.html) | **Contacto** | Formulario de consulta asistido por WhatsApp, datos de contacto y mapa interactivo con OpenStreetMap. |

---

## 🛠️ Servicios Ofrecidos

1. **Consultoría:** Asesoría integral y especializada para la planificación y gestión de proyectos civiles y edificaciones.
2. **Arquitectura y Diseño:** Elaboración de planos arquitectónicos, modelado espacial, estética funcional y diseño de interiores/exteriores.
3. **Diseño de Estructuras:** Cálculos sismorresistentes y diseño estructural en concreto armado y acero, bajo normativa técnica peruana.
4. **Levantamientos Topográficos:** Mediciones de precisión, curvas de nivel y georreferenciación con instrumentación topográfica moderna.
5. **Impresiones y Ploteos:** Impresión y ploteo de planos técnicos en alta calidad en diversos formatos y escalas.
6. **Alquiler de Maquinaria y Equipos:** Alquiler de maquinaria pesada y equipos especializados para obras civiles.

---

## 🚀 Características y Optimizaciones

- **100% Client-Side (Sin dependencia de backend PHP):**
  - El formulario de contacto se procesa directamente en el navegador con JavaScript moderno.
  - Genera automáticamente un mensaje estructurado y abre una conversación directa en **WhatsApp** (`+51 970 969 372`), incluyendo además un botón de respaldo para envío por cliente de correo electrónico (`mailto:`).
- **Mapa Interactivo con OpenStreetMap y Leaflet:**
  - Se sustituyó la dependencia de scripts de Google Maps por **Leaflet.js + OpenStreetMap**, garantizando carga rápida, sin necesidad de API keys ni costos de consumo, con marcador y popup en la sede de Tacna.
- **Diseño 100% Responsive:**
  - Optimizado para pantallas de escritorio, tablets y dispositivos móviles (incluyendo viewports estrechos de 360px a 414px).
  - Menú lateral deslizante (*offcanvas drawer*) con z-index corregido, aislamiento de contexto de apilamiento y animación fluida del botón de hamburguesa a cruz (`X`).
  - Video hero en portada implementado con `object-fit: cover` nativo y altura adaptada en móviles para evitar superposiciones de texto.
- **Rendimiento y Accesibilidad:**
  - Carga diferida de scripts, tipografía optimizada y diseño con alto contraste.

---

## 💻 Tecnologías Utilizadas

- **Lenguajes:** HTML5, CSS3, JavaScript (ES6+).
- **Frameworks & Librerías CSS:**
  - [Bootstrap 3 (Grid & Utilities)](https://getbootstrap.com/)
  - [Animate.css](https://animate.style/)
  - [Icomoon (Iconografía vectorial)](https://icomoon.io/)
- **Librerías JavaScript:**
  - [jQuery 2.x](https://jquery.com/)
  - [Leaflet 1.9.4](https://leafletjs.com/) (OpenStreetMap)
  - [Superfish](https://github.com/joeldbirch/superfish) (Menú multinivel)
  - [Waypoints](http://imakewebthings.com/waypoints/) & [Stellar.js](https://markdalgleish.com/projects/stellar.js/) (Efectos de desplazamiento y animaciones)
- **Multimedia:** Video HD en formato MP4 e imágenes de arquitectura e ingeniería en alta resolución.

---

## 📁 Estructura del Proyecto

```text
Arkiproyectos/
├── css/
│   ├── animate.css          # Animaciones CSS
│   ├── bootstrap.css        # Framework de rejilla y utilidades
│   ├── icomoon.css          # Iconos vectoriales
│   ├── style.css            # Estilos personalizados y reglas responsive
│   └── superfish.css        # Estilos del menú de navegación
├── fonts/                   # Fuentes de iconos (Icomoon)
├── images/                  # Imágenes del sitio y video de fondo
│   ├── hero-video.mp4       # Video responsivo de la portada
│   ├── contact-hero.jpg     # Hero de contacto
│   ├── services-hero.jpg    # Hero de servicios
│   ├── about-hero.jpg       # Hero de nosotros
│   └── ...
├── js/
│   ├── bootstrap.min.js     # Componentes de Bootstrap
│   ├── jquery.min.js        # Librería jQuery
│   ├── main.js              # Lógica del menú offcanvas y animaciones
│   └── ...
├── contacto.html            # Página de contacto y ubicación
├── index.html               # Página de inicio
├── nosotros.html            # Página de historia y nosotros
├── servicios.html           # Página de catálogo de servicios
└── README.md                # Documentación del proyecto
```

---

## 🔧 Despliegue y Ejecución Local

Al tratarse de una aplicación web estática, no requiere servidor de base de datos ni intérprete PHP. Puede ejecutarse con cualquier servidor web local:

### Opción 1: Con Python
```bash
# En la raíz del proyecto
python -m http.server 8080
```
Luego abrir [http://localhost:8080](http://localhost:8080) en el navegador.

### Opción 2: Con Node.js (`npx serve`)
```bash
npx serve .
```

### Opción 3: Con VS Code / Cursor
Instalar la extensión **Live Server** y hacer clic en **"Go Live"** en la barra inferior.

---


### Derechos de Autor
Copyright © 2016 - 2026 **Arkyproyectos SAC**. Todos los derechos reservados.
Realizado por [CMaquera](http://cmaquera.com).
