<template>
	<div class="getOutOfTheNavbarWay">
		<vs-card type="3">
			<template #title>
				<h3>Sobre mim</h3>
			</template>
			<template v-if="!isMobile" #img>
				<img src="@/assets/logo.jpeg" alt="Logo do Desenvolvedor / Logo of The Developer" />
			</template>
			<template #text>
				<p>
					Formado em Redes de Computadores pelo Instituto Federal de São Paulo, Campus Catanduva, comecei a
					programar em 2019 no início do curso e tenho aprendido mais a cada dia desde então. Comecei com Python e
					depois PHP, mas acabei encontrando minha paixão em Javascript.
				</p>
				<p>
					Desde então, meu foco tem sido aprimorar minhas habilidades tanto no desenvolvimento front-end usando
					VueJs com NuxtJs e Electron, quanto no desenvolvimento back-end usando NodeJs e Express, juntamente com
					MongoDB e PostgreSQL.
				</p>
				<p>
					Tenho experiência no desenvolvimento de aplicativos móveis para Android e iOS usando React-Native e
					Expo, criando aplicativos multiplataforma.
				</p>
				<p>
					Além disso, tenho experiência em web scraping usando Puppeteer e Playwright, bem como automação usando
					Python.
				</p>
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
		};
	},
	mounted() {
		this.isMobile = this.$isMobile();
	},
};
</script>

<style>
.vs-card-content.type-3 .vs-card {
	cursor: default !important;
	max-width: none !important;
}

.vs-card-content.type-3 .vs-card:hover {
	transform: none !important;
}

.vs-card-content.type-3 .vs-card-content {
	margin: auto;
	min-width: 80vw;
}

.vs-card-content.type-3 .vs-card__img {
	margin: 20px;
	max-width: 300px;
}

.link {
	text-decoration: none;
	color: #00b74a;
}

.link:hover {
	color: #018f3a;
}
</style>
