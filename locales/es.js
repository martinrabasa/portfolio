export default {
    name: {
        label: "Nombre",
        first: "Martín",
        last: "Rabasa",
    },
    greeting: "Hola, soy",
    occupation: "Soy front-end developer.",
    p1: "Soy autodidacta y busco constantemente nuevas formas de mejorar mis habilidades y estar al día con las últimas tecnologías. Tengo una sólida formación en resolución de problemas y buen ojo para los detalles. Mi pasión radica en construir una infraestructura web que sea tanto escalable como eficiente.",
    skills: {
        label: "Habilidades",
        description:
            "Este es mi stack actual. También he trabajado en algunos proyectos con C#, .NET, Vue y PostgreSQL.",
    },
    contact: "Contacto",
    thanks: "¡Gracias por llegar hasta acá!",
    reach_out: "Si te gustó lo que viste podés ponerte en contacto conmigo.",
    subject: "Asunto",
    message: "Mensaje",
    submit: "Enviar",
    clipboard: "Texto copiado al portapapeles",
    projects: {
        label: "Proyectos",
        projects: [
            {
                image: "vero-metelico.jpg",
                name: "blog",
                url: "veronicametelico.com",
                github: "https://github.com/martinrabasa/vero-metelico",
                tags: [
                    "react",
                    "nextjs",
                    "typescript",
                    "firebase",
                    "netlify-cms",
                    "tailwindcss",
                    "instagram-api",
                ],
                description:
                    "Un blog dinámico creado con Next.js, Netlify CMS y Firebase. Cuenta con sistema de autenticación, comentarios y me gusta, y despliega un feed de Instagram.",
            },
            {
                image: "visual-fretboard.jpg",
                name: "visual-fretboard",
                url: "visual-fretboard.netlify.app",
                github: "https://github.com/martinrabasa/visual-fretboard",
                tags: [
                    "vue",
                    "netlify",
                    "web-audio-api",
                    "vitejs",
                    "spotify-api",
                ],
                description:
                    "Una aplicación para visualizar notas, acordes y escalas en el diapasón de la guitarra. Incluye un metrónomo y la capacidad de obtener el tempo y la escala de cualquier canción de Spotify.",
            },
            {
                image: "magnificent-weather.jpg",
                name: "magnificent-weather",
                url: "magnificent-weather.netlify.app",
                github: "https://github.com/martinrabasa/weather-app",
                tags: ["react", "openweather-api", "netlify"],
                description:
                    "Una aplicación para obtener datos meteorológicos de cualquier ciudad del mundo.",
            },
            {
                image: "basement.jpg",
                name: "basement-challenge",
                url: "basement-challenge-gules.vercel.app",
                github: "https://github.com/martinrabasa/basement-challenge",
                tags: ["react", "typescript", "tailwindcss"],
                description:
                    "Challenge de Gonzalo Pozzo y Basement Studio. La idea era crear el front-end de una tienda aplicando un diseño que nos dieron en Figma. Cuenta con un sistema de carrito y consume los productos de un mock.",
            },
            {
                image: "law-firm.jpg",
                name: "law-firm",
                url: "law-firm1.netlify.app",
                github: "https://github.com/martinrabasa/law-firm",
                tags: ["react", "nextjs", "netlify-cms", "tailwindcss"],
                description:
                    "Template para construir un sitio web estático con Next.js y Netlify CMS.",
            },
            {
                image: "softvision.jpg",
                name: " cognizant-softvision-challenge",
                url: "cognizant-softvision-challenge-liard.vercel.app",
                github: "https://github.com/martinrabasa/cognizant-softvision-challenge",
                tags: ["react", "sass", "vercel"],
                description:
                    "Una pequeña aplicación de práctica para gestionar un proceso de contratación.",
            },
        ],
    },
    email_form: {
        name: {
            required: "Introduce tu nombre.",
            min: "El nombre debe tener entre 2 y 100 caracteres.",
            max: "El nombre debe tener entre 2 y 100 caracteres.",
        },
        email: {
            required: "Introduce un email.",
            email: "El email ingresado no es valido.",
        },
        message: {
            required: "Introduce un mensaje.",
            min: "El mensaje debe tener mas de 2 caracteres.",
        },
        status: {
            success: "El email ha sido enviado",
            error: "Ha ocurrido un error al enviar el email",
        },
    },
};
