import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";
import en from "../locales/en";
import es from "../locales/es";

const Header = () => {
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
                    <ThemeSwitcher />
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
                    className="flex flex-row-reverse justify-between items-center gap-6"
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
