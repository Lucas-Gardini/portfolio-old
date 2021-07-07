<template>
	<div class="getOutOfTheNavbarWay">
		<div v-if="width > 615" class="resume">
			<vs-row>
				<vs-col
					vs-type="flex"
					vs-justify="center"
					vs-align="center"
					w="4"
					xs="12"
					class="image"
				>
					<img
						:style="
							width < 615 ? 'max-width: 100px !important' : ''
						"
						src="@/assets/me.jpg"
						alt="Foto do Desenvolvedor / Photo of The Developer"
					/>
				</vs-col>
				<vs-col
					:style="
						width < 615
							? 'text-align: center'
							: 'padding-left: 10px'
					"
					vs-type="flex"
					w="8"
					xs="12"
				>
					<div class="info-contact">
						<h1>Lucas Gardini Dias</h1>
						<p>
							<i class="mdi mdi-calendar-account"></i> 30/06/2004
							- 17 Anos
						</p>
						<p><i class="mdi mdi-city"></i> Catanduva-SP</p>
						<p>
							<i class="mdi mdi-email"></i>&nbsp;<a
								href="mailto:lucasgardini.dias@hotmail.com"
								>lucasgardini.dias@hotmail.com</a
							>
						</p>
						<p><i class="mdi mdi-phone"></i> (17) 99186-9746</p>
					</div>
				</vs-col>
			</vs-row>

			<div class="content">
				<div>
					<h2 :style="width < 615 ? 'text-align: center' : ''">
						Área de atuação
					</h2>
					<hr />
					<div style="margin-bottom: 10px">
						<p>
							Com formação na área de tecnologia, tenho
							experiência na criação de softwares e aplicações web
							utilizando como linguaguem principal o
							<a
								href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
								target="_blank"
							>
								<!-- <i class="mdi mdi-language-javascript"></i> -->
								JavaScript</a
							>.
						</p>
					</div>
				</div>
				<div>
					<h2 :style="width < 615 ? 'text-align: center' : ''">
						Formação / Cursos
					</h2>
					<hr />
					<div style="margin-bottom: 10px">
						<p>
							<i
								style="font-size: 1em"
								class="mdi mdi-ip-network"
							></i>
							Técnico em Redes de Computadores Integrado ao Ensino
							Médio -
							<a
								target="_blank"
								href="https://www.ctd.ifsp.edu.br/"
								>Instituto Federal de São Paulo</a
							>
							- Catanduva/SP
						</p>
						<p>
							<i class="mdi mdi-calendar-clock"></i> 2019 - 2021
						</p>
					</div>
					<hr />
					<div style="margin-bottom: 10px">
						<p>
							<i
								class="mdi mdi-language-html5"
								style="color: #e44d21"
							></i
							><i
								class="mdi mdi-language-css3"
								style="color: #264ce5"
							></i
							><i
								class="mdi mdi-language-javascript"
								style="color: #f6de1e"
							></i>
							Olimpíadas HTML, CSS, e JavaScript
						</p>
						<p>
							<i class="mdi mdi-calendar-clock"></i> 21/06/2021 -
							25/06/2021
						</p>
						<p>
							<i class="mdi mdi-certificate"></i>
							<a target="_blank" href="./certificates/Kenzie.pdf"
								>Ver Certificado</a
							>
						</p>
					</div>
					<hr />
					<div style="margin-bottom: 10px">
						<p>
							<i class="mdi mdi-monitor-dashboard"></i> Introdução
							ao Front-End - TIMTEC
						</p>
						<p><i class="mdi mdi-calendar-clock"></i> 05/07/2021</p>
						<p>
							<i class="mdi mdi-certificate"></i>
							<a
								target="_blank"
								href="./certificates/TIMTEC - Introdução ao front-end.pdf"
								>Ver Certificado</a
							>
							-
							<a
								target="_blank"
								href="http://mooc.timtec.com.br/certificate/Mqcvalr9"
								>Validar Certificado</a
							>
						</p>
					</div>
					<hr />
					<div style="margin-bottom: 10px">
						<p>
							<i
								class="mdi mdi-language-javascript"
								style="color: #f6de1e"
							></i
							><i
								class="mdi mdi-jquery"
								style="color: #0968aa"
							></i>
							Introdução ao JavaScript - Fundação Bradesco
						</p>
						<p><i class="mdi mdi-calendar-clock"></i> 27/05/2021</p>
						<p>
							<i class="mdi mdi-certificate"></i>
							<a
								target="_blank"
								href="./certificates/FundacaoBradesco.pdf"
								>Ver Certificado</a
							>
							-
							<a
								target="_blank"
								href="https://www.ev.org.br/validar-certificado"
								>Validar Certificado</a
							>
						</p>
					</div>
				</div>
				<div>
					<h2 :style="width < 615 ? 'text-align: center' : ''">
						Habilidades
					</h2>
					<hr />
					<div style="margin-bottom: 10px">
						<h3>Desenvolvimento de WebSites (Estáticos)</h3>
						<ul>
							<li>
								<i class="mdi mdi-language-html5"></i> HTML5
							</li>
							<li><i class="mdi mdi-language-css3"></i> CSS3</li>
							<li>
								<i class="mdi mdi-language-javascript"></i> JS
							</li>
							<li><i class="mdi mdi-bootstrap"></i> Bootstrap</li>
						</ul>
					</div>
					<div style="margin-bottom: 10px">
						<h3>Desenvolvimento de WebSites (Dinâmicos)</h3>
						<vs-table>
							<template #thead>
								<vs-tr
									style="background-color: #00b74a !important"
								>
									<vs-th
										><i
											class="
												mdi mdi-desktop-mac-dashboard
											"
										></i>
										&nbsp;Front-End
									</vs-th>
									<vs-th
										><i class="mdi mdi-server"></i>
										&nbsp;Back-End
									</vs-th>
								</vs-tr>
							</template>
							<template #tbody>
								<vs-tr>
									<vs-td style="font-size: 1.1em">
										<p>
											<i
												class="mdi mdi-language-html5"
											></i>
											HTML5
										</p>
										<p>
											<i
												class="mdi mdi-language-css3"
											></i>
											CSS3
										</p>
										<p>
											<i
												class="
													mdi mdi-language-javascript
												"
											></i>
											JS
										</p>
										<p>
											<i class="mdi mdi-vuejs"></i>
											Vue
										</p>
										<p>
											<i class="mdi mdi-vuetify"></i>
											Vuetify
										</p>
									</vs-td>
									<vs-td style="font-size: 1.1em">
										<p>
											<i class="mdi mdi-nodejs"></i>
											NodeJs
										</p>
										<p>
											<i class="mdi mdi-server-minus"></i>
											ExpressJs
										</p>
										<p>
											<img
												width="15"
												height="15"
												src="https://nullstack.app/favicon-96x96.png"
											/>
											Nullstack
										</p>
										<p>
											<i class="mdi mdi-database"></i>
											MySql e MongoDB
										</p>
									</vs-td>
								</vs-tr>
							</template>
						</vs-table>
					</div>
					<div style="margin-bottom: 10px">
						<h3>Desenvolvimento de Aplicativos</h3>
						<ul>
							<li>
								<vs-table>
									<template #thead>
										<vs-tr>
											<vs-th
												><i
													class="mdi mdi-desktop-mac"
												></i>
												&nbsp;Windows e Linux
											</vs-th>
											<vs-th
												><i
													class="mdi mdi-cellphone"
												></i>
												Android e IOS
											</vs-th>
										</vs-tr>
									</template>
									<template #tbody>
										<vs-tr>
											<vs-td>
												<span
													><i
														class="
															mdi
															mdi-electron-framework
														"
													></i>
													Electron</span
												>
											</vs-td>
											<vs-td>
												<span
													><i
														class="mdi mdi-react"
													></i>
													React-Native</span
												>
											</vs-td>
										</vs-tr>
									</template>
								</vs-table>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="center" style="color: #fff">
			<div class="smartphone">
				<div class="content"></div>
			</div>
			Vire o seu celular para continuar
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			width: window.innerWidth,
		};
	},
	mounted() {
		window.onresize = () => {
			this.width = window.innerWidth;
		};
	},
};
</script>

<style>
.resume {
	background-color: #fff;
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 20px;
}
.resume .content {
	margin-top: 20px;
	margin-left: 100px;
	margin-right: 100px;
}

@media (max-width: 600px) {
	h1 {
		font-size: larger;
		margin: 10px;
		margin-bottom: 20px;
	}
	.resume .content {
		margin-top: 20px;
		margin-left: 5px;
		margin-right: 5px;
	}
}

.image img {
	max-width: 200px;
	border-radius: 10px;
	display: flex;
	margin: auto;
}
a {
	transition: all 0.7s;
	color: #00b74a;
	text-decoration: none;
	text-shadow: none;
}
a:hover {
	transition: all 0.7s;
	text-shadow: 2px 2px 9px rgba(150, 150, 150, 1);
}
a:visited {
	color: #00b74a;
	text-decoration: none;
}

/* CODE-PEN BY:
Turn Your Phone - CSS Animation
Pierrick Turelier*/
/* https://codepen.io/PierrickGT/pen/wBLRvX */
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}

.center {
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 90px;
	height: 155px;
}

/* Smartphone */
.smartphone {
	width: 80px;
	height: 120px;
	margin: 40px 0 0 0;
	border: 5px #e1e1e1 solid;
	border-top-width: 15px;
	border-bottom-width: 20px;
	border-radius: 4px;
	-webkit-animation: smartphone 2s ease-in-out infinite;
	animation: smartphone 2s ease-in-out infinite;
}

@-webkit-keyframes smartphone {
	0% {
		transform: rotate(0deg);
		opacity: 0;
	}
	25% {
		transform: rotate(0deg);
		opacity: 1;
	}
	50% {
		transform: rotate(-90deg);
	}
	75% {
		opacity: 1;
	}
	100% {
		transform: rotate(-90deg);
		opacity: 0;
	}
}

@keyframes smartphone {
	0% {
		transform: rotate(0deg);
		opacity: 0;
	}
	25% {
		transform: rotate(0deg);
		opacity: 1;
	}
	50% {
		transform: rotate(-90deg);
	}
	75% {
		opacity: 1;
	}
	100% {
		transform: rotate(-90deg);
		opacity: 0;
	}
}
.smartphone:before {
	content: "";
	display: block;
	width: 10px;
	height: 3px;
	margin: -9px auto;
	background: #c8c8c8;
	border-radius: 4px;
}

.smartphone:after {
	content: "";
	display: block;
	width: 12px;
	height: 12px;
	margin: 4px auto;
	background: #c8c8c8;
	border-radius: 10px;
}

.smartphone .content {
	width: auto;
	height: 85px;
	margin: 15px 0 0 0;
	padding: 10px;
	/* background: #121212; */
	background-image: url(@/assets/mobile.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	font-size: 0.5em;
	overflow: hidden;
}

@-webkit-keyframes screen {
	0% {
		transform: rotate(0deg);
		opacity: 0;
	}
	25% {
		opacity: 1;
		transform-origin: left;
		transform: rotate(0deg) translateY(0%) translateX(0%) scaleX(1);
	}
	50% {
		transform-origin: left;
		transform: rotate(90deg) translateY(-1%) translateX(-217%) scaleX(1.7);
	}
	75% {
		opacity: 1;
	}
	100% {
		transform-origin: left;
		transform: rotate(90deg) translateY(-1%) translateX(-217%) scaleX(1.7);
		opacity: 0;
	}
}

@keyframes screen {
	0% {
		transform: rotate(0deg);
		opacity: 0;
	}
	25% {
		opacity: 1;
		transform-origin: left;
		transform: rotate(0deg) translateY(0%) translateX(0%) scaleX(1);
	}
	50% {
		transform-origin: left;
		transform: rotate(90deg) translateY(-1%) translateX(-217%) scaleX(1.7);
	}
	75% {
		opacity: 1;
	}
	100% {
		transform-origin: left;
		transform: rotate(90deg) translateY(-1%) translateX(-217%) scaleX(1.7);
		opacity: 0;
	}
}

table tbody {
	overflow: hidden !important;
}
</style>
