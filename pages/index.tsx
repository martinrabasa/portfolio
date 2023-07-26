import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import en from "../locales/en";
import es from "../locales/es";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Home = () => {
    const [scrollPosition, setSrollPosition] = useState<number>(0);
    const [showToTopBtn, setShowToTopBtn] = useState<boolean>(false);
    const { locale } = useRouter();
    const t = locale === "es" ? es : en;

    const handleToTopBtn = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);

        if (scrollPosition > 300) {
            return setShowToTopBtn(true);
        } else if (scrollPosition < 300) {
            return setShowToTopBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);

        return () => window.removeEventListener("scroll", handleToTopBtn);
    });

    return (
        <div className="relative text-neutral-800 bg-neutral-100 dark:bg-neutral-900 dark:text-indigo-100 min-h-screen">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/site.webmanifest" />
                <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <title>{`${t.name.first} ${t.name.last} — Developer`}</title>
                <meta name="description" content="Portfolio" />
                {/* <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>"
                /> */}
            </Head>

            <Header />

            <main className="w-full max-w-4xl mx-auto">
                <section className="max-w-2xl text-center flex flex-col items-center gap-10 px-4 mt-20 mx-auto">
                    <div className="flex flex-col items-center gap-3 text-3xl font-bold md:text-5xl dark:text-indigo-100">
                        <h1>{`${t.greeting} `} <span className="text-blue-400 dark:text-violet-300">{t.name.first}</span>. 👋</h1>
                        <span>{t.occupation}</span>
                    </div>
                    <p className="text-lg leading-8">{t.p1}</p>
                    <div className="flex gap-6">
                        <a
                            className="hover:text-neutral-700 dark:hover:text-violet-300"
                            href="https://github.com/martinrabasa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Martin's Github"
                        >
                            <svg
                                className="h-6 lg:h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                fill="currentColor"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                        <a
                            className="hover:text-neutral-700 dark:hover:text-violet-300"
                            href="https://github.com/martinrabasa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Martin's LinkedIn"
                        >
                            <svg
                                className="h-6 lg:h-7"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                        </a>
                    </div>
                </section>
                <section id="projects" className="grid grid-cols-1 gap-y-16 gap-x-7 items-start place-items-center px-4 mt-10 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
                    {t.projects.projects &&
                        t.projects.projects.map((project) => (
                            <Project
                                key={project.url}
                                image={project.image}
                                name={project.name}
                                url={project.url}
                                github={project.github}
                                tags={project.tags}
                                description={project.description}
                            />
                        ))}
                </section>
                <section
                    className="flex flex-col items-center text-center gap-6 px-4 mt-10 pt-10"
                    id="skills"
                >
                    <h2 className="text-2xl font-bold">{t.skills.label}</h2>
                    <p className="max-w-lg leading-7">{t.skills.description}</p>
                    <Skills />
                </section>
            </main>

            {showToTopBtn &&
                <button
                    className="fixed rounded-full p-2 bottom-4 right-4 bg-blue-400 shadow z-10 lg:right-10 lg:bottom-10 dark:text-neutral-800 dark:bg-indigo-100 dark:hover:bg-violet-300"
                    onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                </button>}

            <Footer />
        </div>
    );
};

export default Home;
