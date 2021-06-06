<template>
	<div class="getOutOfTheNavbarWay">
		<vs-row v-if="!isMobile">
			<vs-col
				v-for="(project, i) in projects"
				:key="i"
				vs-type="flex"
				vs-justify="center"
				vs-align="center"
				w="6"
			>
				<vs-card type="5">
					<template #title>
						<h3>{{ project.name }}</h3>
					</template>
					<template #img>
						<img :src="project.img" :alt="project.description" />
					</template>
					<template #text>
						<p>{{ project.description }}</p>
						<vs-button
							style="position: absolute; top: 13%; right: 3%"
							:aria-label="
								project.redirectButtons.redirect.ariaLabel
							"
							icon
							:color="project.redirectButtons.redirect.color"
							gradient
							:href="project.redirectButtons.redirect.href"
							blank
						>
							<i
								class="
									bx
									bx-right-arrow-alt
									bx-flip-vertical
									bx-tada
								"
							></i>
						</vs-button>
						<vs-button
							style="position: absolute; top: 13%; right: 18%"
							:aria-label="
								project.redirectButtons.github.ariaLabel
							"
							icon
							:color="project.redirectButtons.github.color"
							gradient
							:href="project.redirectButtons.github.href"
							blank
						>
							<i class="bx bxl-github"></i>
						</vs-button>
					</template>
					<template #interactions>
						<vs-tooltip
							v-for="(button, ii) in project.technologiesIcons"
							:key="ii"
							:color="
								typeof button.color.split(' ')[1] ===
								'undefined'
									? button.color
									: button.color.split(' ')[1]
							"
							border-thick
						>
							<vs-button :color="button.color.split(' ')[0]" icon>
								<i
									:class="button.icon"
									:style="
										button.isMdi
											? `style='font-size: 18px; !important; margin: -1.95px !important; margin-left: 0.5px !important'`
											: ''
									"
								></i>
							</vs-button>
							<template #tooltip>
								{{ button.name }}
							</template>
						</vs-tooltip>
					</template>
				</vs-card>
			</vs-col>
		</vs-row>
		<vs-card v-for="(project, i) in projects" v-else :key="i" type="5">
			<template #title>
				<h3>{{ project.name }}</h3>
			</template>
			<template #img>
				<img :src="project.img" :alt="project.description" />
			</template>
			<template #text>
				<p>{{ project.description }}</p>
				<vs-button
					style="position: absolute; top: 13%; right: 3%"
					:aria-label="project.redirectButtons.redirect.ariaLabel"
					icon
					:color="project.redirectButtons.redirect.color"
					gradient
					:href="project.redirectButtons.redirect.href"
					blank
				>
					<i
						class="bx bx-right-arrow-alt bx-flip-vertical bx-tada"
					></i>
				</vs-button>
				<vs-button
					style="position: absolute; top: 13%; right: 18%"
					:aria-label="project.redirectButtons.github.ariaLabel"
					icon
					:color="project.redirectButtons.github.color"
					gradient
					:href="project.redirectButtons.github.href"
					blank
				>
					<i class="bx bxl-github"></i>
				</vs-button>
			</template>
			<template #interactions>
				<vs-tooltip
					v-for="(button, ii) in project.technologiesIcons"
					:key="ii"
					:color="
						typeof button.color.split(' ')[1] === 'undefined'
							? button.color
							: button.color.split(' ')[1]
					"
					border-thick
				>
					<vs-button :color="button.color.split(' ')[0]" icon>
						<i
							:class="button.icon"
							:style="
								button.isMdi
									? `style='font-size: 18px; !important; margin: -1.95px !important; margin-left: 0.5px !important'`
									: ''
							"
						></i>
					</vs-button>
					<template #tooltip>
						{{ button.name }}
					</template>
				</vs-tooltip>
			</template>
		</vs-card>
	</div>
</template>

<script>
export default {
	transition: "fade",
	data: () => {
		return {
			isMobile: false,
			projects: [
				{
					name: "Orderify",
					img: require("~/static/projects/orderify.jpg"),
					description: "TCC - IFSP",
					redirectButtons: {
						github: {
							ariaLabel: "Visitar código-fonte do Orderify",
							color: "dark",
							href: "https://github.com/Lucas-Gardini/TCC-REDES-2021",
						},
						redirect: {
							ariaLabel: "Visitar Orderify",
							color: "primary",
							href: "",
						},
					},
					technologiesIcons: [
						{
							name: "electron",
							color: "primary",
							icon: "mdi mdi-electron-framework",
							isMdi: true,
						},
						{
							name: "vuejs",
							color: "#3fb984",
							icon: "bx bxl-vuejs",
							isMdi: false,
						},
						{
							name: "javascript",
							color: "warn",
							icon: "bx bxl-javascript",
							isMdi: false,
						},
						{
							name: "nodejs",
							color: "success",
							icon: "bx bxl-nodejs",
							isMdi: false,
						},
					],
				},
				{
					name: "FileFever",
					description:
						"Transfira arquivos do seu computador para o celular",
					img: require("~/static/projects/filefever.jpg"),
					redirectButtons: {
						github: {
							ariaLabel: "Visitar código-fonte do FileFever",
							color: "dark",
							href: "https://github.com/Lucas-Gardini/FileFever",
						},
						redirect: {
							ariaLabel: "Visitar FileFever",
							color: "primary",
							href: "https://github.com/Lucas-Gardini/FileFever/releases/tag/0.1.0",
						},
					},
					technologiesIcons: [
						{
							name: "electron",
							color: "primary",
							icon: "mdi mdi-electron-framework",
							isMdi: true,
						},
						{
							name: "vuejs",
							color: "#3fb984",
							icon: "bx bxl-vuejs",
							isMdi: false,
						},
						{
							name: "javascript",
							color: "warn",
							icon: "bx bxl-javascript",
							isMdi: false,
						},
						{
							name: "nodejs",
							color: "success",
							icon: "bx bxl-nodejs",
							isMdi: false,
						},
						{
							name: "express",
							color: "dark #fbfbfb",
							icon: "mdi mdi-server",
							isMdi: true,
						},
					],
				},
				{
					name: "YT Music Downloader",
					img: require("~/static/projects/ytmdlnull.jpg"),
					description: "Baixe suas músicas favoritas do youtube!",
					redirectButtons: {
						github: {
							ariaLabel:
								"Visitar código-fonte do Youtube Music Downloader - Nullstack",
							color: "dark",
							href: "https://github.com/Lucas-Gardini/TCC-REDES-2021",
						},
						redirect: {
							ariaLabel:
								"Visitar Youtube Music Downloader - Nullstack",
							color: "primary",
							href: "https://youtube-music-downloader-null.herokuapp.com/",
						},
					},
					technologiesIcons: [
						{
							name: "nullstack",
							color: "dark #fbfbfb",
							icon: "nullstack",
							isMdi: true,
						},
						{
							name: "javascript",
							color: "warn",
							icon: "bx bxl-javascript",
							isMdi: false,
						},
						{
							name: "nodejs",
							color: "success",
							icon: "bx bxl-nodejs",
							isMdi: false,
						},
						{
							name: "firebase",
							color: "danger",
							icon: "bx bxl-firebase",
							isMdi: false,
						},
					],
				},
			],
		};
	},
	destroyed() {
		window.removeEventListener("resize", this.checkGridResponsivity);
	},
	mounted() {
		this.checkGridResponsivity();
		window.addEventListener("resize", this.checkGridResponsivity);
		this.isMobile = this.$isMobile();
	},
	methods: {
		checkGridResponsivity() {
			const windowInnerWidth = window.innerWidth;
			if (windowInnerWidth <= 770) {
				this.isMobile = true;
			} else {
				this.isMobile = false;
				this.activeSidebar = false;
			}
		},
	},
};
</script>

<style>
.vs-card-content.type-5 {
	display: grid;
	place-items: center;
}

.vs-card-content.type-5 .vs-card {
	margin-bottom: 10px;
	background-color: #121212;
}

.vs-card-content.type-5 .vs-card__text {
	color: #fbfbfb;
	background-color: black;
}

.vs-tooltip {
	background-color: #303030 !important;
}

.nullstack {
	background-image: url("../static/projects/nullstack.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 10px;
}
</style>
