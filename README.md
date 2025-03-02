# my_akinator_front

# author: [Luis Gordillo Tadeo]

# initial date: 19/02/2025

# ESTRUCTURA DE LA APLICACION #

my_akinator_front/
│
├── src/
│   ├── assets/                       # Carpeta para imágenes, íconos y otros recursos estáticos
|   │   ├── images/                   # Carpeta para imágenes
│   │   |   ├── imagen1.png           # Información de la imagen
│   │   |   ├── imagen2.png           # Información de la imagen
│   │   |   └── imagen3.png           # Información de la imagen
|   |   |
│   │   └── icons/                    # Carpeta para iconos
│   │       ├── icono1                # Información del icono
│   │       ├── icono2                # Información del icono
│   │       └── icono3                # Información del icono
│   │
│   ├── components/                   # Componentes reutilizables
|   │   ├── global/                   # Componentes globales
│   │   |   ├── Header.jsx            # Componente Header
│   │   |   └── Footer.jsx            # Componente Footer
|   |   |
│   │   ├── TopicSelector.js          # Componente para seleccionar el tema
│   │   ├── NodeViewer.js             # Componente para mostrar un nodo
│   │   ├── Question.js               # Componente para mostrar una pregunta
│   │   ├── AnswerForm.js             # Componente para mostrar las opciones de respuesta
│   │   └── GameOver.js*              # Componente para mostrar el resultado al final del juego
│   │
│   ├── hooks/                        # Carpeta para hooks personalizados
│   │   ├── useTopic.js*              # Hook para gestionar el tema seleccionado
│   │   ├── useNodeData.js            # Hook para obtener los datos del nodo de decisión
│   │   └── useGameState.js*          # Hook para gestionar el estado del juego, como puntuación, tiempo, etc.
│   │
│   ├── config/                       # Configuraciones globales
│   │   ├── axiosConfig.js            # Configuración global para Axios
│   │   ├── apiEndpoints.js           # Endpoints de la API
│   │   ├── constants.js              # Constantes globales como temas, tiempos, etc.
│   │   └── gameSettings.js           # Configuración relacionada con el juego
│   │
│   ├── pages/                        # Páginas principales de la aplicación
│   │   ├── Home.js                   # Página principal donde se selecciona el tema
│   │   ├── Game.js                   # Página del juego donde se interactúa con el árbol de decisiones
│   │   └── Result.js*                # Página para mostrar el resultado final
│   │
│   ├── context/                      # Contextos de la aplicación para manejo de estado global
│   │   ├── AppContext.js             # Contexto principal de la aplicación
│   │   └── ThemeContext.js           # Contexto para manejar el tema (por ejemplo, dark/light mode)
│   │
│   ├── services/                     # Lógica de servicios y manejo de datos
│   │   └── apiService.js             # Servicios para interactuar con la API backend
|   |
│   ├── utils/                        # Funciones utilitarias
│   │   └── helpers.js                # Funciones comunes (por ejemplo, formateo de datos)
│   │
│   ├── App.js                        # Componente principal que organiza las rutas y la navegación
│   ├── index.js                      # Punto de entrada de React
│   └── styles/                       # Estilos globales
│       ├── main.css                  # Estilos globales de la aplicación
│       └── theme.css*                # Estilos específicos de la interfaz del juego
│
├── .gitignore                        # Archivos y carpetas que no deben ser rastreados por Git
├── package.json                      # Dependencias y scripts de la aplicación
├── README.md                         # Documentación básica del proyecto
└── public/
    ├── index.html                    # HTML principal
    └── favicon.ico                   # Icono del sitio
