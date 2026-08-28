# Negocio Digital MX

Landing page profesional para **Negocio Digital MX** — servicios tecnológicos simples para emprendedores y negocios pequeños en México.

Diseño e implementación de soluciones prácticas: asistencia técnica, sitios web, control de inventarios, punto de venta (POS), reservas en línea y conexión con apps de reparto.

---

## Vista previa

Abre `index.html` en el navegador o sirve la carpeta con cualquier servidor estático.

```bash
# Ejemplo rápido con Python
python -m http.server 8000
```

Luego visita: [http://localhost:8000](http://localhost:8000)

---

## Estructura del proyecto

```
.
├── index.html          # Estructura principal
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── main.js         # Interacciones (menú, scroll, animaciones)
└── README.md
```

---

## Características

- Diseño responsive (móvil → escritorio)
- Menú móvil con accesibilidad (`aria-expanded`, `aria-controls`)
- Header que cambia al hacer scroll
- Animaciones de entrada con `IntersectionObserver`
- Tipografía: Fraunces + Inter + Caveat (Google Fonts)
- Enlaces de contacto: WhatsApp y correo
- Respeto a `prefers-reduced-motion`
- Semántica mejorada (`<nav>`, `<main>`, `aria-hidden` en elementos decorativos)

---

## Tecnologías

| Capa        | Tecnología                             |
| ----------- | -------------------------------------- |
| Markup      | HTML5                                  |
| Estilos     | CSS3 (variables, Grid, Flexbox, clamp) |
| Interacción | JavaScript vanilla                     |
| Fuentes     | Google Fonts                           |

Sin frameworks ni dependencias de build.

---

## Personalización rápida

### Datos de contacto

Busca y reemplaza en `index.html`:

- WhatsApp: `https://wa.me/523223817651`
- Correo: `rodrigo.maya@proton.me`
- Teléfono visible: `+52 322 381 7651`

### Colores

Están centralizados en las variables CSS de `styles.css`:

```css
:root {
  --ink: #060a12;
  --bay: #29d6ff;
  --mango: #2f8fff;
  /* ... */
}
```

### Imágenes pendientes

Hay espacios reservados (placeholders) para:

1. **Casos / portafolio** — foto principal del caso, antes/después y cliente
2. **Sobre mí** — foto de perfil profesional

Cuando tengas las imágenes, sustituye los bloques `.ph` y `.avatar-ph` por `<img>` reales.

---

## Autor

**Ing. Rodrigo Maya**  
Puerto Vallarta, Jalisco · Atiende negocios en todo México

- [Instagram](https://www.instagram.com/rod.maya.mx/)
- [Facebook](https://www.facebook.com/Rorrito.PV)
- [LinkedIn](https://www.linkedin.com/in/rod-maya/)
- [GitHub](https://github.com/rodmaya-dev)
- [Portafolio](https://rodmaya-dev.github.io/)

---

## Licencia

Uso privado / comercial del autor.  
Si reutilizas partes del código, mantén la atribución cuando sea razonable.
