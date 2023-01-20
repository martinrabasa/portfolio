import { useEffect, useState } from "react";
import { useTheme } from "../utils/ThemeProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";

const Header = () => {
    const { setLightTheme, setDarkTheme, theme } = useTheme();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const router = useRouter();
    const t = router.locale === "es" ? es : en;

    useEffect(() => {
        const html = document.querySelector("html");
        
        // Disable scroll when nav is open
        if (html) {
            html.style.overflow = isNavOpen ? "hidden" : "auto";
        }
    }, [isNavOpen]); 

    const changeLanguage = (locale: string) => {
        router.push('/', '/', { locale: locale })
    }

    return (
        <header className="max-w-4xl mx-auto">
            <div className="flex mx-4 font-bold py-6 gap-6 flex-row-reverse justify-between">
                <div className="flex items-center gap-4">
                    {theme == "dark" ? (
                        <button
                            className="active:-translate-y-0.5 duration-100 lg:block"
                            onClick={() => setLightTheme()}
                            aria-label="Theme switcher"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button
                            className="active:-translate-y-0.5 duration-100 lg:block"
                            onClick={() => setDarkTheme()}
                            aria-label="Theme switcher"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                        </button>
                    )}
                    <button
                        className={`ml-auto hamburger hamburger__3dy lg:hidden ${
                            isNavOpen ? "is_active" : ""
                        }`}
                        type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        aria-label="Menu"
                        aria-controls="primary-navigation"
                        aria-expanded={isNavOpen}
                    >
                        <span className="hamburger_box" aria-hidden="true">
                            <span className="hamburger_inner bg-neutral-800 after:bg-neutral-800 before:bg-neutral-800 dark:bg-indigo-100 dark:after:bg-indigo-100 dark:before:bg-indigo-100"></span>
                        </span>
                    </button>
                </div>
                <nav
                    aria-label="Main navigation"
                    className="flex flex-row-reverse justify-between items-center gap-4"
                >
                    <ul id="primary-navigation" className={`items-center gap-6
                                    ${isNavOpen ?
                                        "fixed flex inset-0 w-full h-screen mt-18 py-6 z-10 overflow-scroll bg-neutral-100 border-t border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 flex-col lg:flex-row"
                                        : "hidden lg:flex"}`}>
                        <li className="dark:hover:text-violet-300">
                            <a
                                onClick={() => setIsNavOpen(false)}
                                href="#projects"
                            >
                                {t.projects.label}
                            </a>
                        </li>
                        <li className="dark:hover:text-violet-300">
                            <a onClick={() => setIsNavOpen(false)} href="#skills">
                                {t.skills.label}
                            </a>
                        </li>
                        <li className="dark:hover:text-violet-300">
                            <a onClick={() => setIsNavOpen(false)} href="#contact">
                                {t.contact}
                            </a>
                        </li>
                    </ul>
                    <Link className="text-blue-400 dark:text-violet-300" href="/" aria-label="Home">
                        {`${t.name.first} ${t.name.last}`}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
