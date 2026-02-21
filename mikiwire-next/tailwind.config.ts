import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Cinematic Industrial Palette
                void: "#000000",
                clean: "#FFFFFF",
                molten: "#FF4500",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                helvetica: ["Helvetica Now", "Helvetica", "Arial", "sans-serif"],
            },
            backgroundImage: {
                "industrial-gradient": "linear-gradient(to bottom, #000000, #111111)",
            },
        },
    },
    plugins: [],
};
export default config;
