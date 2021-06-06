<template>
	<div class="center">
		<vs-dialog v-model="active" blur>
			<template #header>
				<h4 class="not-margin">
					Você pode entrar em contato comigo por aqui!
				</h4>
			</template>

			<div style="display: grid; place-items: center">
				<div style="display: flex">
					<vs-tooltip color="#7389db" border-thick>
						<vs-button icon color="discord">
							<i class="bx bxl-discord"></i>
						</vs-button>
						<template #tooltip>
							Discord: KowalskiJr 🐧#6486
						</template>
					</vs-tooltip>
					<vs-tooltip color="#24d266" border-thick>
						<vs-button
							icon
							color="whatsapp"
							href="https://api.whatsapp.com/send?phone=5517991869746"
							blank
						>
							<i class="bx bxl-whatsapp"></i>
						</vs-button>
						<template #tooltip> Whatsapp </template>
					</vs-tooltip>
					<vs-tooltip color="#3b5898" border-thick>
						<vs-button
							icon
							color="facebook"
							href="https://www.facebook.com/lucasgardini.dias"
							blank
						>
							<i class="bx bxl-facebook-square"></i>
						</vs-button>
						<template #tooltip> Facebook </template>
					</vs-tooltip>
					<vs-tooltip color="#ff0101" border-thick>
						<vs-button
							icon
							color="youtube"
							href="https://www.youtube.com/channel/UC9sswQK24QFRMSA7NNzEtww"
							blank
						>
							<i class="bx bxl-youtube"></i>
						</vs-button>
						<template #tooltip> Youtube </template>
					</vs-tooltip>
					<vs-tooltip color="#0176b5" border-thick>
						<vs-button
							icon
							color="linkedin"
							href="https://www.linkedin.com/in/lucas-gardini-dias-4b20681b3/"
							blank
						>
							<i class="bx bxl-linkedin"></i>
						</vs-button>
						<template #tooltip> LinkedIn </template>
					</vs-tooltip>
				</div>
			</div>
			<div style="display: grid; place-items: center">
				<div style="display: flex">
					<vs-tooltip color="#1da1f2" border-thick>
						<vs-button
							icon
							color="twitter"
							href="https://twitter.com/KowalskiJr_"
							blank
						>
							<i class="bx bxl-twitter"></i>
						</vs-button>
						<template #tooltip> Twitter </template>
					</vs-tooltip>
					<vs-tooltip color="#1ed661" border-thick>
						<vs-button
							icon
							color="spotify"
							href="https://open.spotify.com/user/31qsbhgxp2dxytuqdxzot6a5vvoa?si=9993f8fc37184bae"
							blank
						>
							<i class="bx bxl-spotify"></i>
						</vs-button>
						<template #tooltip> Spotify </template>
					</vs-tooltip>
					<vs-tooltip color="#6441a4" border-thick>
						<vs-button
							icon
							color="twitch"
							href="https://www.twitch.tv/kowalskijr_"
							blank
						>
							<i class="bx bxl-twitch"></i>
						</vs-button>
						<template #tooltip> Twitch </template>
					</vs-tooltip>
				</div>
			</div>
		</vs-dialog>
	</div>
</template>
<script>
export default {
	data: () => ({
		active: true,
	}),
	watch: {
		active(a, b) {
			if (a === false) {
				this.$router.push("./");
			}
		},
	},
};
</script>
<style>
.not-margin {
	margin: 0px;
	font-weight: normal;
	padding: 10px;
}

.con-form {
	width: 100%;
}

.con-form .flex {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.con-form .flex a {
	font-size: 0.8rem;
	opacity: 0.7;
}

.con-form .flex a:hover {
	opacity: 1;
}

.con-form .vs-checkbox-label {
	font-size: 0.8rem;
}

.con-form .vs-input-content {
	margin: 10px 0px;
	width: calc(100%);
}

.con-form .vs-input-content .vs-input {
	width: 100%;
}

.footer-dialog {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: calc(100%);
}

.footer-dialog .new {
	margin: 0px;
	margin-top: 20px;
	padding: 0px;
	font-size: 0.7rem;
}

.footer-dialog .new a {
	color: rgba(var(--vs-primary), 1) !important;
	margin-left: 6px;
}

.footer-dialog .new a:hover {
	text-decoration: underline;
}

.footer-dialog .vs-button {
	margin: 0px;
}
</style>
