# MASTER OUTLINE: TP1 - Trabajo Práctico Grupal 1

Este documento centraliza los requerimientos, la arquitectura y el plan de desarrollo para el Proyecto Web en Equipo (HTML, CSS y JavaScript) según la consigna oficial. Sirve como hoja de ruta para alcanzar los niveles de evaluación "Propone" o "Supera".

---

## 1. Visión General y Entregables
- **Objetivo:** Construir un sitio web grupal con portada, perfiles individuales, navegación interna bidireccional y una bitácora de desarrollo.
- **Tecnologías:** HTML, CSS y JavaScript.
- **Repositorio:** Público, independiente para el TP1. Historial de commits ordenado y con participación activa de **todo** el equipo.
- **Despliegue:** Publicación obligatoria en **Vercel**.
- **Entrega final:** Un único enlace al repositorio grupal cargado en la planilla (la URL de Vercel se lee desde el README).

---

## 2. Estructura de Archivos (Obligatoria)
La organización de los archivos debe ser estricta:
- `/index.html` (En la raíz. Portada principal).
- `/perfil-[nombre].html` (En la raíz. Una página por integrante).
- `/bitacora.html` (En la raíz. Registro del proceso).
- `/css/` (Carpeta separada para las hojas de estilo).
- `/js/` (Carpeta separada para la lógica JavaScript).
- `/img/` (Carpeta separada para fotos, avatares, mascotas, íconos y pósters).
- `/README.md` (En la raíz. **Crítico para la aprobación**).

---

## 3. Requisitos por Sección

### A. Portada Principal (`index.html`)
- **Contenido:** Nombre del equipo, breve propósito del equipo.
- **Listado:** Presentación de todos los integrantes con enlaces funcionales a sus páginas individuales.
- **Interactividad (JS):** Al menos una función dinámica con JavaScript.

### B. Perfiles Individuales (Ej: `perfil-orlando.html`)
- **Tarjeta/Perfil:** Foto, avatar o mascota representativa.
- **Datos obligatorios:** Nombre, Ciudad, Edad.
- **Listas obligatorias:**
  - Al menos 4 Habilidades.
  - 3 Películas favoritas.
  - 3 Discos favoritos.
- **Interactividad (JS):** Al menos una función dinámica propia por cada perfil.

### C. Navegación
- **Interna y bidireccional:** Botones internos y menú funcional en todas las secciones. 
- **Restricción:** **Nadie debe depender del botón "Atrás" del navegador.**

### D. Bitácora (`bitacora.html`)
- **Contenido:** Relato claro, maduro e integrado al diseño.
- **Registro:** Decisiones de diseño, problemas/dificultades encontradas y cómo se resolvieron.

---

## 4. Requisitos de Diseño y Estilos (CSS)
- **CSS Propio y Prolijo:** Colores armónicos, decisiones visuales consistentes, márgenes y tamaños bien definidos.
- **Tipografía:** Uso correcto de Google Fonts.
- **Diseño Adaptativo (Responsive):** Breakpoints **obligatorios** revisados en:
  - `400px` (Móviles)
  - `900px` (Tablets)
  - `1200px` (Escritorio)
- **Regla estricta:** Adaptabilidad fluida sin errores, sin desbordes de pantalla ni textos superpuestos.

---

## 5. Documentación Obligatoria (`README.md`)
**Atención: Si el README no está completo, el proyecto queda desaprobado.** Debe permitir comprender y recorrer el trabajo sin buscar información dispersa. Debe contener obligatoriamente:
1. Título y descripción del proyecto.
2. Integrantes con sus perfiles de GitHub enlazados.
3. Tecnologías utilizadas.
4. Estructura de archivos y carpetas.
5. Guía de estilos (Paleta de colores hexadecimal, Google Fonts e iconografía).
6. **Funciones JavaScript:** Breve explicación y capturas de pantalla de la interactividad de la portada y de cada perfil.
7. Enlace a la publicación en **Vercel**.
8. **Sección de Evolución:** Para ampliar en trabajos futuros.
9. **Sección de Uso de IA y Autoría:** (Detalles abajo).

### Criterio de Uso de IA y Autoría (Requisito Transversal)
- Nombramiento de herramientas y modelos utilizados (gratuitos o de pago).
- Explicación de en qué áreas asistieron (código, contenido, debugging, diseño).
- Experiencia previa del equipo.
- Si se generaron imágenes/avatares, detallar el modelo y el criterio de los prompts.
- **Autoría:** Explicar qué se revisó, adaptó o cambió con criterio propio antes de incorporarlo. La IA es un asistente; el equipo debe comprender y probar las decisiones.

---

## 6. Plan de Acción Recomendado (Fases)

- [ ] **Fase 1: Setup y Estructura Base**
  - Acordar roles, comunicación y paleta de colores/tipografías.
  - Inicializar repositorio y archivos base. Ligar los perfiles de GitHub.
- [ ] **Fase 2: Maquetación y CSS Global**
  - Configurar `styles.css` con variables y los breakpoints obligatorios.
  - Maquetar `index.html` (Portada).
  - Crear una plantilla base para los perfiles y `bitacora.html`.
- [ ] **Fase 3: Contenido Individual**
  - Cada integrante completa su HTML con sus datos obligatorios y avatar.
- [ ] **Fase 4: Interactividad JavaScript**
  - Desarrollar el script de la portada.
  - Desarrollar el script individual de cada perfil (ej. modales, filtros, animaciones de clicks).
- [ ] **Fase 5: Bitácora y README**
  - Redactar los problemas y soluciones en la bitácora.
  - Completar el `README.md` minuciosamente, capturando pantallas.
- [ ] **Fase 6: Despliegue y Revisión Final**
  - Desplegar en Vercel.
  - Validar los 3 breakpoints (400, 900, 1200) y que no se necesite usar el botón "Atrás".

