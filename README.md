# Motorgo - Aplicación de Venta de Vehículos

Aplicación web moderna para la venta de vehículos, desarrollada con React, TypeScript y Vite.

## 🚀 Características

- Interfaz de usuario moderna y responsiva
- Catálogo de vehículos
- Sistema de autenticación de usuarios
- Diseño adaptativo para móviles y escritorio
- Navegación fluida con React Router

## 🛠️ Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js) o yarn
- Git (opcional, para control de versiones)

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd car-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   VITE_API_URL=http://localhost:3000  # URL de tu API backend
   ```

## 🏃‍♂️ Ejecutar en modo desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## 🏗️ Construir para producción

Para crear una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 🧪 Ejecutar pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
# o
yarn test
```

## 🌐 Estructura del Proyecto

```
src/
├── assets/           # Archivos estáticos (imágenes, fuentes, etc.)
├── components/       # Componentes reutilizables
│   ├── home/         # Componentes de la página de inicio
│   ├── login/        # Componentes de autenticación
│   ├── menu/         # Navegación principal
│   └── slider/       # Carrusel de imágenes
├── App.tsx          # Componente raíz de la aplicación
└── main.tsx         # Punto de entrada de la aplicación
```

## 🔧 Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- React Router
- Bulma CSS (Framework CSS)
- React Icons

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
