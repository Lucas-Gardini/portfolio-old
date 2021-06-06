export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	server: {
		port: 3000, // default: 3000
		host: "0.0.0.0", // default: localhost
	}, // other configs

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Lucas Gardini - Portfólio",
		htmlAttrs: {
			lang: "pt-br",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		script: [
			{
				hid: "iconify",
				src: "https://code.iconify.design/1/1.0.7/iconify.min.js",
				defer: false,
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"vuesax/dist/vuesax.css",
		"@mdi/font/css/materialdesignicons.min.css",
	],

	loading: {
		color: "green",
		height: "5px",
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["@/plugins/vuesax"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
