# WSPUI

**WSPUI** es una interfaz de usuario construida utilizando **Next.js**, **TailwindCSS**, y varias bibliotecas adicionales como **Radix UI** y **Nivo** para la visualización de datos. Este proyecto está diseñado para ofrecer una experiencia moderna y eficiente para la construcción de aplicaciones web.

## Tabla de contenidos

- [Instalación](#instalación)
- [Scripts disponibles](#scripts-disponibles)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Uso](#uso)
- [Compilación para producción](#Compilacion-para-producción)
- [Requisitos previos](#requisitos-previos)
- [Licencia](#licencia)

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue los siguientes pasos:

### 1. Clonar el repositorio:

```bash
  git clone https://github.com/tu-usuario/wspui.git
```

### 2. Instalar dependencias:

Navega al directorio del proyecto:

```bash
  cd wspui
```

### 3. Instala las dependencias:

```bash
  npm install
```

## Scripts disponibles

- El proyecto incluye los siguientes comandos para facilitar su uso:

- npm run dev: Inicia el servidor en modo desarrollo con hot-reload. Ideal para trabajar en el desarrollo de la aplicación.
- npm run build: Genera una versión optimizada para producción.
- npm run start: Inicia la aplicación en modo de producción después de haberla compilado.
- npm run lint: Ejecuta ESLint para verificar el código en busca de problemas de estilo y errores potenciales.

# Tecnologías utilizadas

**Este proyecto está basado en una combinación de herramientas y tecnologías modernas para el desarrollo web:**

**Next.js (v14.2.8): Framework de React que soporta SSR (Server-Side Rendering) y SSG (Static Site Generation).**
**React (v18.3.1): Biblioteca de JavaScript para construir interfaces de usuario reactivas.**
**TailwindCSS (v3.4.1): Framework CSS para el desarrollo de UI utilizando clases utilitarias.**
**Nivo: Librería de visualización de datos.**

**Radix UI: Componentes de interfaz accesibles y modernos.**

- @radix-ui/react-icons: Colección de íconos accesibles.
- @radix-ui/react-popover: Popovers accesibles para mostrar información.
- @radix-ui/react-select: Selectores accesibles.
- Lucide React: Iconos reactivamente mantenidos.
  **clsx y tailwind-merge: Herramientas para combinar clases de CSS de manera eficiente**

# Dependencias de desarrollo

**El proyecto también hace uso de herramientas adicionales para mejorar el desarrollo y el mantenimiento del código:**

#### TypeScript (v5): Lenguaje con tipado estático para JavaScript.

#### ESLint (v8): Herramienta para identificar y arreglar problemas de estilo en el código.

#### PostCSS (v8): Procesador de CSS para optimizar y transformar CSS.

#### TailwindCSS Animate (v1.0.7): Librería de animación para TailwindCSS.

## Uso

**Después de clonar e instalar las dependencias, puedes ejecutar el proyecto en modo de desarrollo usando el siguiente comando:**

```bash

npm run dev

```

## _Esto iniciará el servidor de desarrollo en http://localhost:3000, donde podrás ver y probar la aplicación. Los cambios en el código se reflejarán automáticamente sin necesidad de reiniciar el servidor (hot-reload)._

Compilación para producción
Para generar una versión optimizada de la aplicación para su despliegue en producción, ejecuta:

```bash

npm run build
```

**Una vez completada la compilación, puedes iniciar el servidor de producción con:**

```bash
npm run start
```

Esto ejecutará la aplicación optimizada en http://localhost:3000.

Requisitos previos
Para ejecutar este proyecto localmente, necesitarás tener instaladas las siguientes herramientas:

---

Node.js (v18 o superior): Puedes descargarlo desde nodejs.org.
npm (o yarn si lo prefieres): Viene incluido con Node.js.
Si usas nvm para gestionar versiones de Node.js, asegúrate de estar utilizando la versión correcta. Puedes incluir un archivo .nvmrc en tu proyecto para especificar la versión de Node.js.
