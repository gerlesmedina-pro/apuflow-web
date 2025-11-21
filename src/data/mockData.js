import cfdImg from '../assets/simulations/sim_1.png';
import hecRas1dImg from '../assets/courses/hec_ras_1d.png';
import hecRas2dImg from '../assets/courses/inundaciones_2d.png';
import hecRasPackImg from '../assets/courses/hec_ras_pack.png';

export const currentUser = {
    name: "Estudiante Demo",
    role: "student",
    progress: {
        "intro-cfd": 45,
        "hec-ras-basic": 10
    },
    achievements: ["Primeros Pasos", "Entusiasta de Fluidos"]
};

export const courses = [
    {
        id: "intro-cfd",
        title: "Modelamiento Hidráulico con OpenFOAM",
        description: "Aprende los fundamentos de la Dinámica de Fluidos Computacional aplicado a la hidráulica.",
        level: "Avanzado",
        category: "CFD",
        duration: "10 horas de teoría + Asesoría personalizada",
        image: cfdImg,
        price: "$49.99",
        originalPrice: "$120.00",
        badge: "Incluye Sesiones Q&A en Vivo",
        generalResources: [
            { title: "Manual de Instalación OpenFOAM (Windows)", url: "https://drive.google.com/file/d/1Xd62uYIN3FhSA3HVOxr4mN4auzacyKzG/view?usp=drive_link", type: "pdf" },
            { title: "Instalador OpenFOAM", url: "https://drive.google.com/file/d/1hgUUtQdv_P_94m9z3qcCLwcveW2TSeol/view?usp=drive_link", type: "software" }
        ],
        videos: [
            {
                id: "omD-13pSA_E",
                title: "1. DINÁMICA DE FLUIDOS COMPUTACIONAL (CFD)",
                resources: [
                    { title: "Presentación Parte 1", url: "https://drive.google.com/file/d/1Ork5D5ECCZTjPfl2VnMKa0vmQpoZfinC/view?usp=drive_link", type: "slides" },
                    { title: "Presentación Parte 2", url: "https://drive.google.com/file/d/1TnsqWZsOeiV-ap49o6NoXmnWLOh9wpH8/view?usp=drive_link", type: "slides" },
                    { title: "Archivos del Modelo", url: "https://drive.google.com/file/d/1427qQiviVrQRrtYy-CqM64LZSUXQLanb/view?usp=drive_link", type: "model" }
                ]
            },
            {
                id: "GNeDBe7fAjY",
                title: "2. MODELAMIENTO DE CANAL RECTANGULAR Y TRAPEZOIDAL SIMPLE",
                resources: [
                    { title: "Presentación Clase 2", url: "https://drive.google.com/file/d/14WvNr1ciGN1VXfDM0lN_pdyIDlbyER6z/view?usp=drive_link", type: "slides" },
                    { title: "Modelo Base", url: "https://drive.google.com/file/d/1JU2GGI9OuW6KGmty8TLDMeA3oO93E4Jo/view?usp=drive_link", type: "model" },
                    { title: "Modelo Configurado", url: "https://drive.google.com/file/d/104d5HCpWPXrdZ_vson0MgFQuGUhDA6II/view?usp=drive_link", type: "model" }
                ]
            },
            {
                id: "I4sbrIRqtgY",
                title: "3. MODELAMIENTO DE UNA CONFLUENCIA DE CANAL",
                resources: [
                    { title: "Archivos del Modelo Clase 3", url: "https://drive.google.com/file/d/1cwsmIiS14heFZfBzeZDc2A6yap0dAQhu/view?usp=drive_link", type: "model" }
                ]
            },
            {
                id: "1ZrP7rIye38",
                title: "4. MODELAMIENTO DE UNA BOCA TOMA",
                resources: [
                    { title: "Archivos del Modelo Clase 4", url: "https://drive.google.com/file/d/11zSDQub_Wbslbxzr7ftQDbnOrDDEEFDh/view?usp=drive_link", type: "model" }
                ]
            },
            {
                id: "jFHn9FFSKLQ",
                title: "5. MODELAMIENTO DE UNA RÁPIDA",
                resources: [
                    { title: "Archivos del Modelo Clase 5", url: "https://drive.google.com/file/d/1Vl_Ag3lJ1nCFc-2ddEhZLWLNj8Q3O42S/view?usp=drive_link", type: "model" }
                ]
            }
        ],
        syllabus: [
            {
                title: "1. DINÁMICA DE FLUIDOS COMPUTACIONAL (CFD)",
                topics: [
                    "Definición de CFD.",
                    "Ecuaciones que gobiernan el comportamiento de la mecánica de fluidos.",
                    "Simulación de flujos multifásicos.",
                    "Procesamiento para realizar un modelo CFD.",
                    "Construcción de un caso de simulación de un flujo bifásico (InterFoam) en OpenFOAM."
                ]
            },
            {
                title: "2. MODELAMIENTO DE CANAL RECTANGULAR Y TRAPEZOIDAL SIMPLE",
                topics: [
                    "Revisión de la carpeta “0” de un caso de simulación.",
                    "Asignación de la condición de borde.",
                    "Asignación de las condiciones iniciales.",
                    "Revisión de la carpeta “constant” de un caso de simulación.",
                    "Asignación de la malla de simulación."
                ]
            },
            {
                title: "3. MODELAMIENTO DE UNA CONFLUENCIA DE CANAL",
                topics: [
                    "Implementación del modelo de turbulencia.",
                    "Revisión de la carpeta “system” de un caso de simulación.",
                    "Configuración de los archivos de control.",
                    "Asignación de los parámetros de simulación.",
                    "Análisis de resultados."
                ]
            },
            {
                title: "4. MODELAMIENTO DE UNA BOCA TOMA",
                topics: [
                    "Preprocesamiento de resultados.",
                    "Simulación en paralelo.",
                    "Visualización de resultados en paralelo.",
                    "Reconstrucción del caso de simulación.",
                    "Revisión de la carpeta de resultados."
                ]
            },
            {
                title: "5. MODELAMIENTO DE UNA RÁPIDA",
                topics: [
                    "Asignación de funciones de pared.",
                    "Asignación del valor de la rugosidad en las paredes de la estructura.",
                    "Post-procesamiento de resultados.",
                    "Generación de resultados a través de gráficas.",
                    "Exportación de resultados como imágenes y videos."
                ]
            }
        ],
        benefits: [
            "10 horas de video grabado (Teoría y Práctica)",
            "1 hora de asesoría personalizada cada 15 días",
            "Acceso a archivos de clases y casos de estudio",
            "Guía de instalación y soporte técnico",
            "Certificado de finalización"
        ]
    },
    {
        id: "hec-ras-basic",
        title: "Curso Online en Vivo: Modelamiento Hidráulico 1D con HEC-RAS",
        description: "Domina el flujo permanente y no permanente en canales y ríos con la última versión estable de HEC-RAS.",
        level: "Introductorio a intermedio",
        category: "Hidráulica",
        duration: "6 sesiones de 2 horas (total: 12 horas)",
        image: hecRas2dImg,
        price: "$90.00",
        badge: "Inicia pronto",
        syllabus: [
            {
                title: "📅 Sesión 1: Fundamentos del Modelamiento Hidráulico 1D",
                topics: [
                    "¿Qué es el modelamiento hidráulico 1D y cuándo se aplica?",
                    "Ecuaciones de Saint-Venant: interpretación física en 1D",
                    "Tipos de flujo: permanente vs no permanente",
                    "Flujo subcrítico, supercrítico y crítico",
                    "Estructura del software HEC-RAS: componentes y flujo de trabajo",
                    "Creación de un nuevo proyecto y exploración de la interfaz"
                ]
            },
            {
                title: "🗺️ Sesión 2: Construcción del Modelo Geométrico 1D",
                topics: [
                    "Definición del cauce principal: líneas de flujo y secciones transversales",
                    "Métodos de ingreso de geometría: manual vs importación",
                    "Edición de secciones: interpolación, suavizado, verificación",
                    "Asignación de coeficientes de rugosidad (n de Manning)",
                    "Inclusión de estructuras hidráulicas: puentes, alcantarillas, vertederos"
                ]
            },
            {
                title: "⚙️ Sesión 3: Simulación de Flujo Permanente en 1D",
                topics: [
                    "Condiciones de frontera para flujo permanente",
                    "Carga de caudales y niveles aguas arriba/abajo",
                    "Parámetros de cálculo y control de estabilidad",
                    "Ejecución de la simulación en régimen permanente",
                    "Diagnóstico de errores y revisión de resultados"
                ]
            },
            {
                title: "🌊 Sesión 4: Simulación de Flujo No Permanente en 1D",
                topics: [
                    "Introducción al flujo no permanente en 1D",
                    "Carga de hidrogramas y condiciones iniciales",
                    "Configuración temporal: paso de tiempo, duración, tolerancias",
                    "Ejecución de la simulación no permanente",
                    "Verificación de estabilidad y análisis de resultados"
                ]
            },
            {
                title: "📊 Sesión 5: Postprocesamiento y Análisis de Resultados",
                topics: [
                    "Visualización de resultados: perfiles, secciones, tablas",
                    "Uso de RAS Mapper para análisis espacial (solo resultados 1D)",
                    "Exportación de gráficos, tablas y reportes",
                    "Interpretación hidráulica de los resultados: tirantes, velocidades, energía específica"
                ]
            },
            {
                title: "🧩 Sesión 6: Aplicaciones Reales y Buenas Prácticas en Modelamiento 1D",
                topics: [
                    "Aplicaciones típicas del modelamiento 1D: diseño de obras, análisis de inundaciones, estudios de impacto",
                    "Limitaciones del enfoque 1D y cómo mitigarlas",
                    "Buenas prácticas en proyectos reales: documentación, validación, trazabilidad",
                    "Recomendaciones para informes técnicos y revisión por terceros",
                    "Cierre del curso: preguntas frecuentes, recursos adicionales y entrega de certificados"
                ]
            }
        ],
        benefits: [
            "Archivos base para práctica (geometría, caudales, hidrogramas)",
            "Plantillas de informes técnicos",
            "Guía rápida de errores comunes y soluciones",
            "Certificado de participación ApuFlow"
        ]
    },
    {
        id: "hec-ras-2d",
        title: "Curso Online en Vivo: Modelamiento Hidráulico 2D con HEC-RAS",
        description: "Técnicas avanzadas para modelar planicies de inundación y rotura de presas con HEC-RAS 2D.",
        level: "Intermedio",
        category: "Hidráulica",
        duration: "6 sesiones de 2 horas (total: 12 horas)",
        image: hecRas1dImg,
        price: "$110.00",
        badge: "Inicia pronto",
        syllabus: [
            {
                title: "📅 Sesión 1: Fundamentos del Modelamiento Hidráulico 2D",
                topics: [
                    "¿Por qué modelar en 2D? Ventajas frente al 1D",
                    "Ecuaciones de Saint-Venant en 2D: interpretación física",
                    "Tipos de flujo en 2D: subcrítico, supercrítico, transitorio",
                    "Flujo de trabajo en HEC-RAS 2D: estructura del proyecto",
                    "Exploración de la interfaz y componentes clave"
                ]
            },
            {
                title: "🗺️ Sesión 2: Construcción del Terreno y Malla Computacional",
                topics: [
                    "Importación de datos topográficos (DEM, TIN, LIDAR)",
                    "Uso de RAS Mapper para definir el dominio 2D",
                    "Creación de malla computacional: tipo, tamaño, refinamiento",
                    "Zonas de refinamiento y exclusión",
                    "Verificación de calidad de malla"
                ]
            },
            {
                title: "⚙️ Sesión 3: Condiciones Hidráulicas y Configuración de Simulación",
                topics: [
                    "Definición de condiciones de frontera en 2D",
                    "Carga de hidrogramas, caudales y niveles",
                    "Asignación de coeficientes de rugosidad espacial",
                    "Configuración temporal: paso de tiempo, duración, tolerancias",
                    "Parámetros de simulación: estabilidad, volumen, energía"
                ]
            },
            {
                title: "🌉 Sesión 4: Inclusión de Estructuras y Control de Flujo",
                topics: [
                    "Representación de puentes, alcantarillas y vertederos en 2D",
                    "Uso de conexiones 1D/2D para estructuras lineales",
                    "Modelado de canales, bordes y diques",
                    "Control de flujo: compuertas, vertederos, estructuras internas"
                ]
            },
            {
                title: "📊 Sesión 5: Postprocesamiento y Análisis de Resultados",
                topics: [
                    "Visualización de resultados en RAS Mapper: mapas de profundidad, velocidad, energía",
                    "Animaciones de flujo y evolución temporal",
                    "Exportación de resultados: tablas, gráficos, shapefiles",
                    "Interpretación técnica: zonas inundables, velocidades críticas, energía específica"
                ]
            },
            {
                title: "🧩 Sesión 6: Aplicaciones Reales y Buenas Prácticas en Modelamiento 2D",
                topics: [
                    "Aplicaciones típicas: estudios de inundación, diseño urbano, evaluación de riesgo",
                    "Validación y calibración básica de modelos 2D",
                    "Buenas prácticas: documentación, trazabilidad, revisión técnica",
                    "Limitaciones del enfoque 2D y recomendaciones",
                    "Cierre del curso: preguntas frecuentes, recursos adicionales y entrega de certificados"
                ]
            }
        ],
        benefits: [
            "Archivos base para práctica (DEM, hidrogramas, estructuras)",
            "Plantillas de informes técnicos",
            "Guía rápida de errores comunes y soluciones",
            "Certificado de participación ApuFlow"
        ]
    },
    {
        id: "expert-pack",
        title: "Pack Experto Hidráulico",
        description: "Domina el modelamiento hidráulico integral: Incluye los cursos completos de HEC-RAS 1D y HEC-RAS 2D.",
        level: "Experto",
        category: "Pack",
        duration: "24 horas (12h 1D + 12h 2D)",
        image: hecRasPackImg,
        price: "$170.00",
        originalPrice: "$200.00",
        badge: "Inicia pronto",
        syllabus: [
            {
                title: "📦 Módulo 1: Modelamiento Hidráulico 1D con HEC-RAS",
                topics: [
                    "Fundamentos del Modelamiento Hidráulico 1D",
                    "Construcción del Modelo Geométrico 1D",
                    "Simulación de Flujo Permanente en 1D",
                    "Simulación de Flujo No Permanente en 1D",
                    "Postprocesamiento y Análisis de Resultados 1D",
                    "Aplicaciones Reales y Buenas Prácticas 1D"
                ]
            },
            {
                title: "📦 Módulo 2: Modelamiento Hidráulico 2D con HEC-RAS",
                topics: [
                    "Fundamentos del Modelamiento Hidráulico 2D",
                    "Construcción del Terreno y Malla Computacional",
                    "Condiciones Hidráulicas y Configuración de Simulación 2D",
                    "Inclusión de Estructuras y Control de Flujo 2D",
                    "Postprocesamiento y Análisis de Resultados 2D",
                    "Aplicaciones Reales y Buenas Prácticas 2D"
                ]
            }
        ],
        benefits: [
            "Acceso completo a ambos cursos (1D y 2D)",
            "Ahorro significativo vs compra individual",
            "Doble certificación (Especialista en HEC-RAS)",
            "Todos los recursos y plantillas de ambos niveles",
            "Asesoría prioritaria"
        ]
    }
];

export const forumPosts = [
    {
        id: 1,
        author: "Carlos M.",
        title: "Error de Courant en mi simulación",
        content: "¿Alguien sabe cómo reducir el número de Courant sin aumentar demasiado el tiempo de cálculo? Estoy usando un paso de tiempo variable pero...",
        replies: 5,
        tags: ["OpenFOAM", "Simulación"],
        likes: 12,
        time: "Hace 2 horas",
        solved: true
    },
    {
        id: 2,
        author: "Ana P.",
        title: "Comparto script para geometría en Python",
        content: "He creado un script para generar mallas simples automáticas. Aquí les dejo el enlace al repositorio. Espero les sirva para sus proyectos.",
        replies: 8,
        tags: ["Python", "Recursos"],
        likes: 24,
        time: "Hace 5 horas"
    },
    {
        id: 3,
        author: "Roberto G.",
        title: "Duda sobre condiciones de borde en HEC-RAS",
        content: "Estoy modelando un río con pendiente fuerte y tengo dudas sobre qué condición de borde aguas abajo es la más estable.",
        replies: 3,
        tags: ["HEC-RAS", "Hidráulica"],
        likes: 7,
        time: "Hace 1 día"
    },
    {
        id: 4,
        author: "Lucía F.",
        title: "¿Mejores recursos para aprender Paraview?",
        content: "Hola a todos, estoy empezando con el post-procesamiento y me gustaría saber qué tutoriales recomiendan para visualización avanzada.",
        replies: 15,
        tags: ["Paraview", "Recursos"],
        likes: 30,
        time: "Hace 2 días",
        solved: true
    },
    {
        id: 5,
        author: "Miguel A.",
        title: "Oferta laboral: Ingeniero Hidráulico Junior",
        content: "En mi empresa estamos buscando un ingeniero con conocimientos básicos de HEC-RAS y GIS. Interesados enviar CV.",
        replies: 2,
        tags: ["Empleo", "Carrera"],
        likes: 18,
        time: "Hace 3 días"
    }
];

export const recordings = [
    {
        id: 1,
        title: "Introducción a OpenFOAM - Clase 1",
        date: "15 Nov 2023",
        duration: "1h 45m",
        thumbnail: "https://img.youtube.com/vi/sdYva1qoNkU/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Mallado Avanzado con SnappyHexMesh",
        date: "18 Nov 2023",
        duration: "2h 10m",
        thumbnail: "https://img.youtube.com/vi/g7SlKhRo2ec/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Post-procesamiento en ParaView",
        date: "22 Nov 2023",
        duration: "1h 30m",
        thumbnail: "https://img.youtube.com/vi/VNlAPSocv6A/maxresdefault.jpg"
    }
];

export const heroStats = [
    { label: 'Comunidad', value: 'Global' },
    { label: 'Simulaciones', value: '120+' },
    { label: 'Instructores', value: 'Expertos' }
];
