# Sistema de Diseño: Documentación de Identidad Visual y Experiencia de Usuario

Este documento define la gramática visual y los principios operativos de nuestro ecosistema digital. Diseñado bajo una lente de alta gama, el sistema abandona las convenciones genéricas del SaaS para adoptar una estética editorial, técnica y sofisticada.

## 1. El Norte Creativo: "Minimalismo Arquitectónico"

Nuestra estrella polar es el **Minimalismo Arquitectónico**. No buscamos la ausencia de elementos, sino la precisión absoluta en su disposición. Inspirado en la claridad de las interfaces de ingeniería y la elegancia de las publicaciones impresas de lujo, este sistema rompe con la "grilla rígida" mediante:

*   **Asimetría Intencional:** Uso de espacios en blanco (`spacing-24`) para crear centros de gravedad visual que guían al usuario sin necesidad de elementos decorativos.
*   **Profundidad Tonal:** Sustituimos las líneas divisorias por capas de luz y sombra sutiles, tratando la pantalla como un plano físico de materiales nobles.
*   **Curaduría de Datos:** La información no se "vuelca", se presenta con una jerarquía tipográfica que prioriza la legibilidad extrema y el rigor técnico.

---

## 2. Paleta de Colores y Capas de Superficie

La paleta se aleja de los colores vibrantes para centrarse en una escala de grises cromáticos y azules desaturados que transmiten autoridad y calma.

### Jerarquía de Superficies (Nesting)
**Regla de Oro: "No-Line".** Queda prohibido el uso de bordes sólidos de 1px para separar secciones principales. La división debe lograrse mediante el cambio de tono entre superficies:

1.  **Capa Base:** `surface` (#f9f9fa). El lienzo principal.
2.  **Secciones de Contenido:** `surface-container-low` (#f2f4f5). Para áreas que requieren un leve énfasis.
3.  **Contenedores Elevados:** `surface-container-lowest` (#ffffff). Para tarjetas y elementos que deben "flotar" naturalmente sobre fondos más oscuros.
4.  **Acentos Técnicos:** `secondary` (#526074) y `tertiary` (#526073). Utilizados exclusivamente para micro-interacciones, estados activos o visualización de datos críticos.

### Glassmorphism y Textura
Para elementos flotantes (modales, menús desplegables), utilizar el efecto "Frosted Glass":
*   **Fondo:** `surface-container-lowest` con opacidad al 80%.
*   **Efecto:** `backdrop-blur` de 12px a 20px.
*   **Resultado:** Una interfaz que se siente integrada, donde la luz del fondo baña el elemento superior.

---

## 3. Tipografía: La Voz Editorial

Utilizamos **Inter** como nuestro pilar tipográfico. Su diseño sharp y moderno comunica precisión técnica.

*   **Display & Headline:** Los niveles `display-lg` (3.5rem) y `headline-lg` (2rem) deben usarse con tracking negativo (-0.02em) para una apariencia más compacta y premium. En español (Argentina), la entonación es directa pero profesional; los encabezados deben ser asertivos.
*   **Body & Labels:** El cuerpo de texto principal `body-md` (0.875rem) utiliza el color `on-surface` (#2d3336) para garantizar un contraste óptimo.
*   **Micro-copy:** Las etiquetas `label-sm` (0.6875rem) se reservan para metadatos, utilizando `on-surface-variant` (#5a6063) para reducir el ruido visual.

---

## 4. Elevación y Profundidad

La jerarquía se construye a través del **Layering Tonal** en lugar de estructuras tradicionales.

*   **Sombras Ambientales:** Solo se permiten para estados de "hover" o modales. Deben ser extra-difundidas: `box-shadow: 0 10px 40px -10px rgba(18, 18, 18, 0.04)`. El color de la sombra nunca es negro puro, sino una versión tintada de `on-surface`.
*   **Ghost Border:** Si un borde es estrictamente necesario por accesibilidad, se debe usar el token `outline-variant` (#adb3b6) con una opacidad reducida al 15%. Nunca usar bordes opacos al 100%.

---

## 5. Componentes Principales

### Botones (Acciones con Propósito)
*   **Primary:** Fondo `primary` (#5f5e5e), texto `on-primary` (#faf7f6). Sin gradientes. Radio de curvatura: `rounded-md` (0.375rem).
*   **Secondary/Ghost:** Sin fondo, borde `outline-variant` al 20%. La interacción debe ser sutil: un cambio de fondo a `surface-container` al hacer hover.

### Cards y Listas (Espacio sobre Estructura)
*   **Regla:** Queda prohibido el uso de líneas divisorias internas.
*   **Estrategia:** Separar elementos de lista utilizando el `spacing-3` (1rem). La distinción entre una tarjeta y el fondo se logra colocando una card `surface-container-lowest` sobre un fondo `surface-container-low`.

### Inputs y Formularios
*   **Estado de Reposo:** Fondo `surface-container-lowest`, borde `outline-variant` al 15%.
*   **Estado de Foco:** Borde `primary` (#5f5e5e) a 1px. La transición debe ser suave (200ms ease).
*   **Error:** Texto en `error` (#9f403d), fondo de campo sutil en `error-container`.

---

## 6. Do's and Don'ts (Guía Práctica)

### Do's (Qué hacer)
*   **Usar el espacio:** Si algo se siente apretado, duplica el espacio en blanco. La generosidad en el aire es lujo.
*   **Alinear a la izquierda:** Mantener una alineación editorial clara para facilitar el escaneo de textos largos.
*   **Priorizar el contraste de pesos:** Jugar con `font-weight: 600` para títulos y `font-weight: 400` para cuerpo para crear jerarquía sin cambiar de color.

### Don'ts (Qué evitar)
*   **No usar divisores horizontales:** Si sientes la tentación de poner una línea de 1px, intenta usar un cambio de tono de fondo o aumenta el `spacing`.
*   **No usar sombras pesadas:** Si la sombra es visible a simple vista, es demasiado fuerte. Debe ser un susurro, no un grito.
*   **No usar mayúsculas sostenidas:** Evitar el "ALL CAPS" en botones o etiquetas largas; resta sofisticación y dificulta la lectura en español.

---

Este sistema de diseño no es una limitación, sino una plataforma para la excelencia. Cada pixel debe tener una razón de ser, y cada espacio en blanco debe ser una decisión deliberada.