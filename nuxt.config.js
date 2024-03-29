export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	server: {
		port: 52087, // default: 3000
		host: "192.168.0.103", // default: localhost
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
			{
				hid: "description",
				name: "description",
				content:
					"Meu portfólio, onde você irá encontrar várias informações minhas como desenvolvedor. Espero que goste!",
			},
			//<meta name="google-site-verification" content="yu0tTwLCpHyi1iUA4COOYg9Q8S7kKCuFus8ETsWiqB4" />
			{name: "google-site-verification", content: "yu0tTwLCpHyi1iUA4COOYg9Q8S7kKCuFus8ETsWiqB4"},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"vuesax/dist/vuesax.css",
		"@mdi/font/css/materialdesignicons.min.css",
	],

	loading: {
		color: "#00B74A",
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
