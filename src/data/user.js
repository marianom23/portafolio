const INFO = {
	main: {
		title: "Portafolio - Mariano Martin",
		name: "Mariano Martin",
		email: "marianomartin496@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/marianom23",
		linkedin: "https://www.linkedin.com/in/marianomarting/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Desarrollador de software",
		description:
			"Soy un desarrollador front-end especializado en React.js, con sólidos conocimientos en Java Spring Boot, Python, Git y MySQL. Soy graduado como técnico universitario en programación y actualmente curso la licenciatura en Ciencia de Datos. Además, cuento con experiencia en el desarrollo de aplicaciones y en la enseñanza de Java, Spring Boot, JPA y bases de datos.",
	},

	about: {
		title: "Soy Mariano Martin, residiendo en Mendoza, Argentina.",
		description: "Tengo 23 años, me gradué de la Tecnicatura Superior en Programación a finales de 2022. Soy una persona organizada y responsable, con una pasión por aprender y enseñar. Actualmente, estoy en la búsqueda de un puesto como desarrollador para continuar mi formación profesional. Estoy entusiasmado por aplicar mis conocimientos y habilidades, así como por seguir creciendo en el campo del desarrollo",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Python Runner",
			description:
				"Construí una IDE online de Python usando React y Vite para lograr una SPA rápida y eficiente. Implementé CodeMirror 6 como editor, con soporte para resaltado de Python, y usé Pyodide para ejecutar código directamente en el navegador sin necesidad de un servidor backend. Para gestionar el estado, y agregué soporte multilenguaje con i18next. También incorporé flexlayout-react para organizar los paneles de la interfaz y SweetAlert2 para manejar alertas y notificaciones. Además, integré Blockly mediante react-blockly para permitir programación visual junto con el editor de código.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"],
			linkText: "Visitar Proyecto",
			githubLink: "https://github.com/marianom23/react-python-runner",
			iframeLink: "https://react-python-runner.vercel.app/sandbox",
			repositoryStatus: "private"
		},

		{
			title: "Excel with Blockly",
			description:
				"Se trata de un proyecto desarrollado en JavaScript junto con Blockly, que integra hojas de cálculo y fórmulas generadas mediante Blockly. Además, incluye un asistente que guía al usuario para completar correctamente cada fórmula, facilitando la creación didáctica de fórmulas de Excel.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"],
			linkText: "Visitar Proyecto",
			link: "https://github.com/marianom23/js-app-excel-bloques",
			githubLink: "https://github.com/marianom23/js-app-excel-bloques",
			iframeLink: "https://js-app-excel-bloques.vercel.app/pages/introAnalytics/actividad02A/act.html",
			repositoryStatus: "private"
		},

		{
			title: "Dinamic Tables",
			description:
				"Es un proyecto desarrollado en JavaScript que permite la creación de tablas dinámicas y gráficos interactivos para el análisis de datos. Además, incluye un asistente que guía al usuario en la configuración de cada tabla y gráfico, facilitando la generación de reportes visuales de manera intuitiva, sin necesidad de conocimientos avanzados en programación.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"],
			linkText: "Visitar Proyecto",
			link: "https://github.com",
			githubLink: "https://github.com/marianom23/simulador-tablas-dinamicas",
			iframeLink: "https://js-app-excel-bloques-b8j5.vercel.app/pages/actividades-data/fundamentos-estadistica/combinacion-tablas/actividad02b/act.html",
			repositoryStatus: "private"
		},

		{
			title: "Activities with IA",
			description:
				"Es una serie de actividades basadas en el reconocimiento mediante modelos de imágenes, gestos y dibujos en un canvas, desarrolladas en React utilizando TensorFlow.js. Por ejemplo, incluye un juego donde se cruza la calle mediante gestos, reconocimiento de dibujos en un canvas y detección de ilustraciones mostradas a la webcam. Además, abarca el entrenamiento de modelos de aprendizaje para interpretar dibujos, junto con los backends necesarios en Python para el procesamiento y reconocimiento.",
				logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tensorflow.svg"],
			linkText: "Visitar Proyecto",
			link: "https://github.com/marianom23/actividades-ia",
			githubLink: "https://github.com/marianom23/actividades-ia",
			iframeLink: "https://actividades-ia.vercel.app",
			repositoryStatus: "private"
		},
		{
			title: "The Crew Port",
			description:
				"Este proyecto consiste en la adaptación de los primeros niveles del juego de mesa The Crew a un entorno digital, desarrollado en Python con la biblioteca Pygame. La versión digital busca recrear la experiencia cooperativa del juego original, implementando mecánicas de comunicación limitada entre jugadores y desafíos progresivos basados en misiones.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"],
			linkText: "Visitar Proyecto",
			githubLink: "https://github.com/marianom23/LaTripulacion",
			repositoryStatus: "public"
		},
		{
			title: "El Buen Sabor",
			description:
				"Se trata de una página web que gestiona un restaurante con opciones de servicio take away y delivery. La plataforma ofrece métricas de negocios, estadísticas y facturación. Todo ello está respaldado por un sistema de caja, cocina y delivery. El front-end está desarrollado en ReactJS, mientras que el backend se implementa en Go. Este proyecto representa mi logro académico final en la tecnicatura de programación, el cual realicé en colaboración con Jose Pasini y que me permitió obtener mi graduación.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"],
			linkText: "Visitar Proyecto",
			githubLink: "https://github.com/marianom23/front-pagina-web",
			repositoryStatus: "public"
		},
	],
};

export default INFO;
