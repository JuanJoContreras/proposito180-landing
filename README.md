# 🚀 Propósito 180 - Landing Page React

> Landing page moderna y actualizada en React para **Propósito 180 Strategic Consulting**

## 🌐 Sitio Original
[https://paulinaruz.wixsite.com/cr-andes](https://paulinaruz.wixsite.com/cr-andes)

---

## 📋 Descripción

Propósito 180 es una consultora especializada en estrategia organizacional, liderazgo consciente y transformación cultural. Esta landing page reemplaza el sitio Wix original con una aplicación React moderna, rápida y fácilmente mantenible.

## 🎯 Secciones

- **Hero** — Estrategia Organizacional, Liderazgo Consciente y Bienestar
- **Nosotros** — Quiénes somos y nuestro enfoque
- **Soluciones Estratégicas** — Diagnóstico, Diseño, Implementación y Seguimiento
- **A quiénes acompañamos** — Sector Público, Empresas Privadas, Industria y Minería
- **Servicios** — Detalle de servicios ofrecidos
- **Equipo** — Equipo profesional
- **Contacto** — Agenda una conversación estratégica

## 🛠️ Tecnologías

- **React 18** — UI Library
- **Vite** — Build tool ultra-rápido
- **Tailwind CSS** — Estilos utilitarios
- **React Router DOM** — Navegación SPA
- **Framer Motion** — Animaciones
- **React Icons** — Iconografía

---

## 🚀 Desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/JuanJoContreras/proposito180-landing.git
cd proposito180-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

---

## 📦 Deploy en cPanel (Tecnoinver)

### Método 1 — Manual (recomendado para primer deploy)

#### Paso 1: Generar el build de producción

En tu computador local:
```bash
# Instalar dependencias
npm install

# Generar build optimizado para producción
npm run build
```

Esto genera la carpeta `/dist` con todos los archivos estáticos listos.

#### Paso 2: Subir archivos al cPanel

1. Accede a **cPanel de Tecnoinver** → **Administrador de Archivos**
2. Navega a `public_html/` (o al subdirectorio del dominio/subdominio)
3. Sube **todo el contenido** de la carpeta `/dist`:
   - `index.html`
   - `assets/` (carpeta con CSS, JS e imágenes)
4. El archivo `.htaccess` se copia automáticamente desde `public/` al hacer el build

> ⚠️ **Importante:** Sube el *contenido* de `/dist`, no la carpeta `dist` en sí.

#### Paso 3: Verificar el .htaccess

Asegúrate que existe un archivo `.htaccess` en `public_html/` con el contenido de `public/.htaccess`. Este archivo es **crítico** para que la SPA funcione correctamente (React Router).

---

### Método 2 — Automático via Git en cPanel (recomendado para actualizaciones)

#### Configuración inicial:

1. En cPanel → **Git Version Control** → **Create**
2. Completa los datos:
   - **Repository URL:** `https://github.com/JuanJoContreras/proposito180-landing`
   - **Branch:** `main`
   - **Repository Path:** `/home/tecnoinver/repos/proposito180`
3. Guarda y anota el **webhook URL** que genera cPanel

#### Para hacer deploy:

Después de cada cambio en el repo:
1. En cPanel → **Git Version Control** → clic en el repo
2. Clic en **"Pull or Deploy"** → **"Update from Remote"**
3. Luego clic en **"Deploy HEAD Commit"**

> 📝 El archivo `.cpanel.yml` en la raíz del repo define qué archivos se copian y dónde.

---

## 📁 Estructura del Proyecto

```
proposito180-landing/
├── public/
│   ├── .htaccess          ← Se copia al /dist en el build
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Soluciones.jsx
│   │   ├── AQuienes.jsx
│   │   ├── Servicios.jsx
│   │   ├── Equipo.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js         ← base: '/' configurado para cPanel
├── tailwind.config.js
├── postcss.config.js
└── .cpanel.yml            ← Configuración de deploy automático
```

---

## 🔧 Configuración para subdirectorio

Si el sitio va en un **subdirectorio** (ej: `tecnoinver.cl/proposito180/`), edita `vite.config.js`:

```js
// Cambia esto:
base: '/',

// Por esto:
base: '/proposito180/',
```

Y actualiza el `.htaccess`:
```apache
RewriteBase /proposito180/
```

---

## 🎨 Paleta de colores

| Color | Uso |
|-------|-----|
| `#1B3A5C` | Azul marino — Títulos, navbar |
| `#4A90D9` | Azul medio — Acentos, botones |
| `#B8D84B` | Verde lima — Detalles, checkmarks |
| `#F5F5F5` | Gris claro — Fondos de sección |
| `#FFFFFF` | Blanco — Fondos principales |

---

## ✅ Checklist pre-deploy

- [ ] `npm run build` ejecutado sin errores
- [ ] Carpeta `/dist` generada correctamente
- [ ] Archivo `.htaccess` presente en `/dist`
- [ ] `base: '/'` configurado en `vite.config.js`
- [ ] Archivos subidos a `public_html/` en cPanel
- [ ] Sitio visible en el dominio

---

## 📄 Licencia

© 2024 Propósito 180 Strategic Consulting. Todos los derechos reservados.
