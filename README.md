# Grupo La Fe - Next.js Application

Aplicación web para Grupo La Fe Cartagena, organización de apoyo para la recuperación de la ludopatía.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para desarrollo seguro
- **Tailwind CSS** para estilos
- **Docker** para despliegue
- **Caddy** como servidor web con HTTPS automático

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build
```

## 🐳 Docker

### Construir imagen
```bash
docker build -t grupo-la-fe .
```

### Ejecutar con Docker Compose
```bash
docker compose up -d
```

## 🚀 Despliegue

### Infraestructura Unificada

Este proyecto forma parte de una infraestructura unificada que comparte un solo servidor Caddy para múltiples dominios:

- **grupolafecartagena.org** → Grupo La Fe
- **stevenpatino.dev** → Portfolio personal
- **api.hypeatlas.app** → API de HypeAtlas

### Estructura de Infraestructura

```
/opt/infra/
├── Caddyfile              # Caddyfile maestro
├── sites/                 # Configuraciones por sitio
│   ├── grupo-la-fe.caddy
│   ├── steven-portfolio.caddy
│   └── hypeatlas-api.caddy
└── docker-compose.yml     # Caddy maestro
```

### Variables de Entorno

Crear archivo `.env` con:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=contact@example.com
CONTACT_FROM=noreply@example.com
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### Secrets de GitHub (para CI/CD)

Configurar en **Settings > Secrets and variables > Actions**:

```bash
# DigitalOcean
DO_TOKEN=your_digitalocean_token
DOCR_REGISTRY=steven-portfolio-reg

# SSH Access
SSH_HOST=your_server_ip
SSH_USER=root
SSH_KEY=your_private_ssh_key

# Server Path
SERVER_PATH=/opt/grupo-la-fe

# Application Secrets
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=contact@example.com
CONTACT_FROM=noreply@example.com
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 📦 CI/CD

### GitHub Actions

El proyecto incluye pipelines automatizados para:
- **Build** y **push** de imágenes Docker
- **Deploy** automático al servidor
- **Configuración** automática de Caddy

### Secrets Requeridos

Configurar en GitHub Secrets:
- `DO_TOKEN` - Token de DigitalOcean
- `DOCR_REGISTRY` - Nombre del registro Docker
- `SSH_HOST` - IP del servidor
- `SSH_USER` - Usuario SSH
- `SSH_KEY` - Clave privada SSH
- `SERVER_PATH` - Ruta de despliegue

## 🔧 Arquitectura

### Componentes Principales

- **Header** - Navegación con scroll suave
- **Hero Section** - Sección principal
- **About Section** - Información del grupo
- **Contact Section** - Formulario y WhatsApp
- **Map Section** - Ubicación
- **Footer** - Información de contacto

### Funcionalidades

- ✅ Navegación responsive
- ✅ Formulario de contacto
- ✅ Integración con WhatsApp
- ✅ Scroll suave entre secciones
- ✅ Diseño accesible
- ✅ Optimización SEO

## 📄 Licencia

Este proyecto es privado y propiedad de Grupo La Fe Cartagena.
