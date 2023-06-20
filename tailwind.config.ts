import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: "Montserrat",
			},
			colors: {
				base: "#F5F5F5",
			},
		},
	},
	plugins: [],
} satisfies Config;
