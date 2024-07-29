/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "rgba(var(--background))",
                white: "rgba(var(--white))",
                black: "rgba(var(--black))",
                border: "rgba(var(--border))",
                primary1: "rgba(var(--primary1))",
                primary2: "rgba(var(--primary2))",
                secondary1: "rgba(var(--secondary1))",
                secondary2: "rgba(var(--secondary2))",
                warning1: "rgba(var(--warning1))",
                warning2: "rgba(var(--warning2))",
                success1: "rgba(var(--success1))",
                success2: "rgba(var(--success2))"
            }
        }
    },
    plugins: [],
    darkMode: "class"
};
