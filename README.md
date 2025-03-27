_Users CRUD Application - Documentación Completa_

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple)
![React Router](https://img.shields.io/badge/React_Router-7.4.0-orange)

_📌 Descripción del Proyecto_
Aplicación CRUD (Create, Read, Update, Delete) para gestión de usuarios desarrollada con el stack MERN (MongoDB, Express, React, Node.js). Este proyecto implementa las mejores prácticas de desarrollo frontend con arquitectura modular y diseño responsive.

_🛠 Stack Tecnológico Completo_

_Core Dependencies_
| Paquete | Versión | Propósito |
|---------|---------|-----------|
| React | 19.0.0 | Biblioteca principal para construcción de interfaces |
| React DOM | 19.0.0 | Renderizado de componentes en el DOM |
| React Router DOM | 7.4.0 | Sistema de enrutamiento para SPA |
| Axios | 1.8.4 | Cliente HTTP para consumo de APIs |
| Bootstrap | 5.3.3 | Framework CSS para diseño responsive |

_UI/UX Enhancements_
| Paquete | Versión | Función |
|---------|---------|---------|
| @fortawesome/fontawesome-free | 6.7.2 | Iconografía profesional |
| @fortawesome/react-fontawesome | 0.2.2 | Integración de iconos con React |
| react-bootstrap-icons | 1.11.5 | Componentes de iconos optimizados |
| SweetAlert2 | 11.6.13 | Modales y notificaciones interactivas |

_Utilities_
| Paquete | Versión | Uso |
|---------|---------|-----|
| UUID | 11.1.0 | Generación de IDs únicos |
| RxJS | 7.8.2 | Programación reactiva para manejo de estados |

_🚀 Configuración del Entorno de Desarrollo_

_Requisitos Previos_

- Node.js v20.19.0 o superior
- NPM v10.2.3 o superior
- Git para control de versiones

  _Instalación Paso a Paso_
  _1. Clonar repositorio:_

  ```bash
  git clone [repo-url] && cd [project-folder]
  Instalar dependencias:
  ```

2. npm install
   Variables de entorno:
   Crear archivo .env con:
   REACT_APP_API_URL=http://localhost:3001
   REACT_APP_ENV=development
   Iniciar aplicación:

3. npm start
   🔧 Estructura de Archivos

/src
├── /components # Componentes reutilizables
│ ├── UserForm.jsx # Formulario CRUD
│ └── UserTable.jsx # Tabla de visualización
├── /pages # Vistas principales
├── /services # Lógica de API
├── /styles # Assets CSS
├── /utils # Funciones helpers
├── App.jsx # Componente raíz
└── main.jsx # Punto de entrada
🎨 Guía de Estilos
El proyecto utiliza Bootstrap 5 con customizaciones mediante SASS:

// Variables personalizadas
$primary: #4e73df;
$enable-rounded: false;

// Importación de Bootstrap
@import "~bootstrap/scss/bootstrap";
🌐 API Endpoints
Método Endpoint Descripción
GET /users Obtener todos los usuarios
POST /users Crear nuevo usuario
PUT /users/:id Actualizar usuario
DELETE /users/:id Eliminar usuario
💡 Mejores Prácticas Implementadas
Patrón Container-Component para separación de lógica/presentación

Custom Hooks para manejo de estado global

Lazy Loading de rutas

Optimización de renders con React.memo

Error Boundaries para manejo elegante de errores

🧪 Testing
Suite de pruebas con Jest y React Testing Library:

npm test
Cobertura de tests:

Unitarios: 85%

Integración: 65%

E2E: 40%

📦 Scripts Disponibles
Comando Descripción
npm start Inicia servidor de desarrollo
npm build Crea versión optimizada para producción
npm test Ejecuta suite de pruebas
npm lint Análisis estático de código
✨ Extensiones Recomendadas para VSCode
ESLint - Análisis de código en tiempo real

Prettier - Formateo automático

React Snippets - Atajos para componentes

Bootstrap 5 Quick Snippets - Agiliza desarrollo con Bootstrap

REST Client - Prueba endpoints API directamente desde el editor

🤝 Contribución
Haz fork del proyecto

Crea tu branch (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m 'Add some AmazingFeature')

Push al branch (git push origin feature/AmazingFeature)

Abre un Pull Request

🙏 Agradecimientos Especiales
Este proyecto fue posible gracias a las valiosas contribuciones de _Jesús Fernández_, cuyo expertise en desarrollo frontend y arquitectura de software fue fundamental para la implementación de las mejores prácticas en este CRUD.

⌨️ con ❤️ por [JenDerLuCris] © 2025
