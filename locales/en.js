export default {
    name: {
        label: "Name",
        first: "Martin",
        last: "Rabasa",
    },
    greeting: "Hi, I'm",
    occupation: "I'm a front-end developer.",
    p1: "I am self-taught, constantly seeking out new ways to improve my skills and stay up-to-date with the latest technologies. I have a strong background in problem-solving and an eye for detail. My pas­sion lies in build­ing web in­fra­struc­ture that's both scal­able and per­for­mant.",
    skills: {
        label: "Skills",
        description:
            "This is my current stack. I have also worked in some projects with C#, .NET, Vue and PostgreSQL.",
    },
    contact: "Contact",
    thanks: "Thanks for getting here!",
    reach_out: "If you liked what you saw you can reach out to me.",
    subject: "Subject",
    message: "Message",
    submit: "Send",
    clipboard: "Text copied to clipboard",
    projects: {
        label: "Projects",
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
                    "A dynamic blog built with Next.js, Netlify CMS and Firebase. It has a comment and like system, displays an Instagram feed.",
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
                    "An application to visualize notes, chords and scales on the guitar fretboard. Includes a metronome and the ability to get the tempo and scale of any Spotify song.",
            },
            {
                image: "magnificent-weather.jpg",
                name: "magnificent-weather",
                url: "magnificent-weather.netlify.app",
                github: "https://github.com/martinrabasa/weather-app",
                tags: ["react", "openweather-api", "netlify"],
                description:
                    "An application to obtain weather data from any city in the world.",
            },
            {
                image: "basement.jpg",
                name: "basement-challenge",
                url: "basement-challenge-gules.vercel.app",
                github: "https://github.com/martinrabasa/basement-challenge",
                tags: ["react", "typescript", "tailwindcss"],
                description:
                    "Challenge by Gonzalo Pozzo and Basement Studio. The idea was to create the front-end of a store applying a design that they gave us in Figma. It has a cart system and consumes the products from a mock.",
            },
            {
                image: "law-firm.jpg",
                name: "law-firm",
                url: "law-firm1.netlify.app",
                github: "https://github.com/martinrabasa/law-firm",
                tags: ["react", "nextjs", "netlify-cms", "tailwindcss"],
                description:
                    "Template for building a static website with Next.js and Netlify CMS.",
            },
            {
                image: "softvision.jpg",
                name: " cognizant-softvision-challenge",
                url: "cognizant-softvision-challenge-liard.vercel.app",
                github: "https://github.com/martinrabasa/cognizant-softvision-challenge",
                tags: ["react", "sass", "vercel"],
                description:
                    "A small practice application to manage a recruitment process.",
            },
        ],
    },
};
