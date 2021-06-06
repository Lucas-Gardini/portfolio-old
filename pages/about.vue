<template>
	<div class="getOutOfTheNavbarWay">
		<vs-card type="3">
			<template #title>
				<h3>Sobre mim</h3>
			</template>
			<template v-if="!isMobile" #img>
				<img src="@/assets/me.jpg" alt="" />
			</template>
			<template #text>
				<p>
					Formado em Redes de Computadores pelo
					<a
						target="_blank"
						class="link"
						href="https://www.ctd.ifsp.edu.br/"
						>Instituto Federal São Paulo Câmpus Catanduva</a
					>, comecei a programar em 2019 no inicio do curso e desde
					então estou aprendendo mais a cada dia. Comecei com
					<i class="bx bxl-python"></i> Python e depois
					<i class="mdi mdi-language-php"></i> PHP. Mas acabei me
					encontrando no <i class="bx bxl-javascript"></i> Javascript.
					Desde então meu foco é aprimorar minhas habilidades tanto no
					front-end utilizando <i class="bx bxl-vuejs"></i> VueJs
					juntamente com <i class="mdi mdi-nuxt"></i> NuxtJs e
					<i class="mdi mdi-electron-framework"></i> Electron, quanto
					no back-end fazendo uso do
					<i class="bx bxl-nodejs"></i> NodeJs e do
					<i class="mdi mdi-server"></i> Express, juntamento com
					<span
						class="iconify"
						data-icon="vscode-icons:file-type-mongo"
						data-inline="false"
					></span>
					MongoDB e do
					<span
						class="iconify"
						data-icon="logos:mysql"
						data-inline="false"
					></span>
					MySql. Também estou estudando um framework javascript
					brasileiro chamado Nu<span style="color: #d22365">ll</span
					>stack.
				</p>
			</template>
		</vs-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isMobile: this.$isMobile(),
		};
	},
	created() {
		console.log(this.$isMobile());
	},
};
</script>

<style>
.getOutOfTheNavbarWay {
	margin-top: 120px;
	margin-left: 10px;
	margin-right: 10px;
}

.vs-card {
	cursor: default !important;
	max-width: none !important;
}

.vs-card:hover {
	transform: none !important;
}

.vs-card-content {
	margin: auto;
	min-width: 80vw;
}

.vs-card__img {
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
