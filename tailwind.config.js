const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontFamily: {
			serif: '"Exo 2", serif',
		},
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addVariant }) {
			addVariant("nth-4n-1", "&:nth-child(4n-1)");
		}),
	],
};
