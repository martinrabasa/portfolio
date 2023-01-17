import { useState } from "react";
import { useTheme } from "../utils/ThemeProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";

const Header = () => {
    const { setLightTheme, setDarkTheme, theme } = useTheme();
    const [isNavOpen, toggleNav] = useState<boolean>(false);
    const router = useRouter();
    const t = router.locale === "es" ? es : en;

    const changeLanguage = (locale: string) => {
        router.push('/', '/', { locale: locale })
    }

    return (
        <header className="flex justify-between max-w-4xl mx-auto font-bold py-6">
            <div className="flex gap-6 ml-4">
                <Link className="text-blue-400 dark:text-violet-300" href="/" aria-label="Home">
                    {`${t.name.first} ${t.name.last}`}
                </Link>
                <nav
                    aria-label="Main navigation"
                    className={`${
                        isNavOpen
                            ? "fixed inset-0 w-full h-screen mt-18 py-6 z-10 overflow-scroll bg-neutral-100 border-t border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800"
                            : "hidden"
                    } lg:block`}
                >
                    <ul className="flex flex-col items-center gap-6 lg:flex-row">
                        <li className="dark:hover:text-violet-300">
                            <a
                                onClick={() => toggleNav(false)}
                                href="#projects"
                            >
                                {t.projects.label}
                            </a>
                        </li>
                        <li className="dark:hover:text-violet-300">
                            <a onClick={() => toggleNav(false)} href="#skills">
                                {t.skills.label}
                            </a>
                        </li>
                        <li className="dark:hover:text-violet-300">
                            <a onClick={() => toggleNav(false)} href="#contact">
                                {t.contact}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
                {/* <select className="bg-transparent cursor-pointer hidden lg:block" onChange={(e) => changeLanguage(e.target.value)} defaultValue={router.locale}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select> */}
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
                    className={`ml-auto mr-4 self-end hamburger hamburger__3dy sm:mr-8 lg:hidden ${
                        isNavOpen ? "is_active" : ""
                    }`}
                    type="button"
                    onClick={() => toggleNav(!isNavOpen)}
                    aria-label="Menu"
                >
                    <span className="hamburger_box">
                        <span className="hamburger_inner bg-neutral-800 after:bg-neutral-800 before:bg-neutral-800 dark:bg-indigo-100 dark:after:bg-indigo-100 dark:before:bg-indigo-100"></span>
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
