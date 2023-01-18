import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import en from "../locales/en";
import es from "../locales/es";

type ToastType = {
    duration: number,
    message: string,
    status: boolean,
}

const Footer = () => {
    const [showingToast, setShowingToast] = useState<boolean>(false);
    const [toast, setToast] = useState<ToastType | null>(null);
    const { locale } = useRouter();
    const t = locale === "es" ? es : en;

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setToast({
            duration: 2000,
            message: t.clipboard,
            status: true,
        })
        setShowingToast(true);
    };

    const emailSchema = Yup.object().shape({
        name: Yup.string()
            .required(t.email_form.name.required)
            .min(2, t.email_form.name.min)
            .max(100, t.email_form.name.max),
        email: Yup.string()
            .required(t.email_form.email.required)
            .email(t.email_form.email.email),
        message: Yup.string()
            .required(t.email_form.message.required)
            .min(2, t.email_form.message.min)
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: emailSchema,
        onSubmit: (values, { resetForm }) => {
            fetch('https://formsubmit.co/ajax/7157d1d62cc22f5322bbc83fcd72c3eb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    message: values.message, 
                    _subject: "A new email has been sent through your website."}),
            })
            .then(response => response.json())
            .then(data => {
                resetForm();
                setToast({
                    message: t.email_form.status.success, 
                    duration: 2000,
                    status: true}); 
                setShowingToast(true);
            })
            .catch(error => {
                setToast({
                    message: t.email_form.status.success, 
                    duration: 4000, 
                    status: false,})
                setShowingToast(true);
            }); 
        }
    })

    return (
        <footer
            id="contact"
            className="mt-8 bg-neutral-900 px-4 text-neutral-100 border-t border-neutral-800 dark:text-indigo-100"
        >
            <div className="flex flex-col justify-center items-center gap-10 py-10 max-w-4xl lg:grid lg:grid-cols-2 lg:justify-between lg:items-start lg:px-0 lg:mx-auto">
                <section className="flex flex-col items-center gap-6 text-center lg:text-start lg:items-start max-w-xs">
                    <span className="text-lg font-bold">
                        {t.thanks}
                    </span>
                    <p className="leading-7">
                        {t.reach_out}
                    </p>
                    <div className="flex gap-5">
                        <a
                            className="hover:text-neutral-300 dark:hover:text-violet-300"
                            href="https://github.com/martinrabasa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Martin's Github"
                        >
                            <svg
                                className="h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                fill="currentColor"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                        <a
                            className="hover:text-neutral-300 dark:hover:text-violet-300"
                            href="https://github.com/astrank"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Martin's LinkedIn"
                        >
                            <svg
                                className="h-7"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <span className="underline">
                            martinrabasa@gmail.com
                        </span>
                        <button
                            aria-label="Copy email to clipboard"
                            className="bg-indigo-100 text-neutral-900 rounded p-1 active:-translate-y-0.5 duration-100 dark:hover:bg-violet-300"
                            onClick={() =>
                                copyToClipboard("martinrabasa@gmail.com")
                            }
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                                />
                            </svg>
                        </button>
                    </div>
                </section>
                <form
                    name="contact"
                    className="flex flex-col gap-4 text-sm w-full max-w-md"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="flex flex-col gap-2">
                        <label className="font-bold" htmlFor="name">
                            {t.name.label}
                        </label>
                        <input
                            {...formik.getFieldProps('name')}
                            className={`text-neutral-800 bg-white px-2 py-1.5 rounded focus:outline focus:outline-2 focus:outline-blue-400 dark:focus:outline-violet-300
                                        ${formik.errors.name && formik.touched.name ? "outline outline-1 outline-red-500" : ""}`}
                            name="name"
                            id="name"
                            type="text"
                            required
                        />
                        {formik.errors.name && formik.touched.name &&
                                <span className="text-red-500 text-sm" aria-label={formik.errors.name}>{formik.errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold" htmlFor="subject">
                            Email
                        </label>
                        <input
                            {...formik.getFieldProps('email')}
                            className={`text-neutral-800 bg-white px-2 py-1.5 rounded focus:outline focus:outline-2 focus:outline-blue-400 dark:focus:outline-violet-300
                                        ${formik.errors.email && formik.touched.email ? "outline outline-1 outline-red-500" : ""}`}
                            name="email"
                            id="email"
                            type="email"
                            required
                        />
                        {formik.errors.email && formik.touched.email &&
                                <span className="text-red-500 text-sm" aria-label={formik.errors.email}>{formik.errors.email}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold" htmlFor="message">
                            {t.message}
                        </label>
                        <textarea
                            {...formik.getFieldProps('message')}
                            className={`text-neutral-800 bg-white px-2 py-1.5 rounded focus:outline focus:outline-2 focus:outline-blue-400 dark:focus:outline-violet-300
                                        ${formik.errors.message && formik.touched.message ? "outline outline-1 outline-red-500" : ""}`}
                            name="message"
                            id="message"
                            rows={5}
                            required
                        ></textarea>
                        {formik.errors.message && formik.touched.message &&
                                <span className="text-red-500 text-sm" aria-label={formik.errors.message}>{formik.errors.message}</span>}
                    </div>
                    <input type="text" name="_honey" className="hidden"></input>
                    <button
                        className="py-2 px-3 mt-2 bg-indigo-100 jutify-center self-center rounded text-neutral-800 font-bold lg:self-start dark:hover:bg-violet-300"
                        disabled={formik.isSubmitting || !formik.isValid || (Object.keys(formik.touched).length === 0 && formik.touched.constructor === Object)}
                        type="submit"
                    >
                        {formik.isSubmitting ? 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-25"
                            ></circle>
                            <path
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                className="opacity-75"
                            ></path>
                            </svg>
                        : t.submit}
                    </button>
                </form>
            </div>
            
            {toast && 
                <Toast.Provider duration={toast.duration}>
                    <Toast.Root
                        className={`flex items-center gap-10 py-4 px-5 mt-3 mr-3 shadow text-neutral-800 font-medium rounded z-10
                                    ${toast.status ? "bg-green-400" : "bg-red-400"}`}
                        open={showingToast}
                        onOpenChange={setShowingToast}
                    >
                        <Toast.Title>{toast.message}</Toast.Title>
                        <Toast.Close>
                            <svg
                                className="w-6 h-6 hover:text-neutral-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Toast.Close>
                    </Toast.Root>
                    <Toast.Viewport className="fixed top-0 right-0" />
                </Toast.Provider>}
        </footer>
    );
};

export default Footer;
