<template>
	<div>
		<transition name="fade">
			<div v-if="loaded">
				<vs-navbar
					id="navbar"
					v-model="active"
					fixed
					padding-scroll
					center-collapsed
					color="#fbfbfb"
					text-dark
					shadow
				>
					<template #left>
						<vs-button
							v-if="isMobile"
							color="#00B74A"
							icon
							@click="activeSidebar = !activeSidebar"
						>
							<i class="bx bx-menu"></i>
						</vs-button>
						<div v-else style="margin: auto">
							<vs-avatar
								:size="isPaddingScrollActive ? '22' : '33'"
							>
								<!-- <img src="@/assets/me.jpg" alt="" /> -->
								<i
									class="mdi mdi-microsoft-visual-studio-code"
								></i>
							</vs-avatar>
						</div>
					</template>
					<template v-if="loaded && !isMobile" #default>
						<vs-navbar-item
							id="home"
							to="/"
							:active="active == 'home'"
						>
							<i class="bx bxs-home"></i> Início
						</vs-navbar-item>
						<vs-navbar-item
							id="about"
							to="/about"
							:active="active == 'about'"
						>
							<i class="bx bxs-user"></i> Sobre
						</vs-navbar-item>
						<vs-navbar-item
							id="projects"
							to="/projects"
							:active="active == 'projects'"
						>
							<i class="bx bx-code-alt"></i> Projetos
						</vs-navbar-item>
						<vs-navbar-item
							id="contact"
							to="/contact"
							:active="active == 'contact'"
						>
							<i class="bx bx-link"></i> Contato
						</vs-navbar-item>
					</template>
					<template #right>
						<vs-button
							href="https://github.com/Lucas-Gardini"
							color="#121212"
							blank
							icon
						>
							<i class="bx bxl-github"></i>
						</vs-button>
						<vs-button
							href="https://www.facebook.com/lucasgardini.dias"
							color="#1266F1"
							blank
							icon
						>
							<i class="bx bxl-facebook"></i>
						</vs-button>
					</template>
				</vs-navbar>
				<div class="hidden">
					<vs-sidebar
						v-model="active"
						color="#00B74A"
						fixed
						:open.sync="activeSidebar"
					>
						<template #logo>
							<img src="@/assets/me.jpg" class="me-image" />
						</template>
						<vs-sidebar-item
							id="home"
							to="/"
							:active="active == 'home'"
						>
							<i class="bx bxs-home"></i> Início
						</vs-sidebar-item>
						<vs-sidebar-item
							id="about"
							to="/about"
							:active="active == 'about'"
						>
							<i class="bx bxs-user"></i> Sobre
						</vs-sidebar-item>
						<vs-sidebar-item
							id="projects"
							to="/projects"
							:active="active == 'projects'"
						>
							<i class="bx bx-code-alt"></i> Projetos
						</vs-sidebar-item>
						<vs-sidebar-item
							id="contact"
							to="/contact"
							:active="active == 'contact'"
						>
							<i class="bx bx-link"></i> Contato
						</vs-sidebar-item>
						<template #footer> </template>
					</vs-sidebar>
				</div>
			</div>
		</transition>
		<vs-button
			style="position: fixed; bottom: 5%; right: 2.5%"
			color="#00B74A"
			circle
			icon
			floating
			@click="scrollTop()"
		>
			<i class="bx bx-up-arrow-alt"></i>
		</vs-button>
		<Nuxt />
		<footer>Copyright © 2021 - Lucas Gardini Dias</footer>
	</div>
</template>

<script>
export default {
	data: () => ({
		active: "",
		activeSidebar: false,
		isMobile: false,
		loaded: false,
		isPaddingScrollActive: false,
	}),
	watch: {
		// whenever question changes, this function will run
		active() {
			this.activeSidebar = false;
		},
	},
	mounted() {
		console.log(this.$route.name);
		this.active = this.$route.name === "index" ? "home" : this.$route.name;
		this.checkNavResponsivity();
		window.addEventListener("resize", this.checkNavResponsivity);
		this.checkNavPaddingScroll();
		window.addEventListener("wheel", this.checkNavPaddingScroll);
		setTimeout(() => {
			this.loaded = true;
		}, 100);
	},
	destroyed() {
		window.removeEventListener("resize", this.checkNavResponsivity);
	},
	methods: {
		scrollTop() {
			this.isPaddingScrollActive = false;
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		},
		checkNavResponsivity() {
			const windowInnerWidth = window.innerWidth;
			if (windowInnerWidth <= 690) {
				this.isMobile = true;
			} else {
				this.isMobile = false;
				this.activeSidebar = false;
			}
		},
		checkNavPaddingScroll() {
			setTimeout(() => {
				if (
					document
						.getElementById("navbar")
						.classList.value.includes("paddingScrollActive")
				) {
					this.isPaddingScrollActive = true;
				} else {
					this.isPaddingScrollActive = false;
				}
			}, 200);
		},
	},
};
</script>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

body {
	background-color: #121212;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.me-image {
	max-width: 100px;
	min-width: 100px;
	max-height: 100px;
	min-height: 100px;
	border-radius: 5px;
}

.me-image-small {
	max-width: 30px;
	min-width: 30px;
	max-height: 30px;
	min-height: 30px;
	border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

footer {
	position: fixed;
	bottom: 0%;
	left: 0%;
	min-width: 100vw;
	max-width: 100vw;
	background-color: transparent;
	color: #fbfbfb;
	text-align: center;
}
</style>
