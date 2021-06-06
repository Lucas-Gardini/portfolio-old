<template>
	<div class="getOutOfTheNavbarWay">
		<vs-card type="3">
			<template #title>
				<h3>Sobre mim</h3>
			</template>
			<template v-if="!isMobile" #img>
				<img
					src="@/assets/me.jpg"
					alt="Foto do Desenvolvedor / Photo of The Developer"
				/>
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
					então estou aprendendo mais a cada dia. Comecei com Python e
					depois PHP. Mas acabei me encontrando no Javascript. Desde
					então meu foco é aprimorar minhas habilidades tanto no
					front-end utilizando VueJs juntamente com NuxtJs e Electron,
					quanto no back-end fazendo uso do NodeJs e do Express,
					juntamente do MongoDB e do MySql. Também estou estudando um
					framework javascript brasileiro chamado Nu<span
						style="color: #d22365"
						>ll</span
					>stack.
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
