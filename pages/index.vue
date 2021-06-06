<template>
	<div>
		<div class="center">
			<div>
				<h1 :class="animatedSpan">
					<span>L</span><span>U</span><span>C</span><span>A</span
					><span>S</span>&nbsp;<span>G</span><span>A</span
					><span>R</span><span>D</span><span>I</span><span>N</span
					><span>I</span><span>&nbsp;</span><span>D</span
					><span>I</span><span>A</span><span>S</span><br />
				</h1>
				<h2>
					<span style="color: #e44d21"
						><i class="bx bxl-html5"></i
					></span>
					<span style="color: #264ce5"
						><i class="bx bxl-css3"></i
					></span>
					<span style="color: #8152cd">
						<i class="bx bxl-bootstrap"></i>
					</span>
					<span style="color: #f6de1e"
						><i class="bx bxl-javascript"></i
					></span>
					<span style="color: #89c042">
						<i class="bx bxl-nodejs"></i>
					</span>
					<span style="color: #41b883"
						><i class="bx bxl-vuejs"></i
					></span>
					<span style="color: #3d78a9">
						<i class="bx bxl-python"></i>
					</span>
				</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	transition: "slide-bottom",
	data: () => {
		return {
			animatedSpan: "animated-span",
		};
	},
	mounted() {
		setInterval(() => {
			this.animatedSpan = "";
			setTimeout(() => {
				this.animatedSpan = "animated-span";
			}, 200);
		}, 1800);
	},
};
</script>

<style>
.center {
	position: absolute;
	min-width: 100%;
	min-height: 100%;
	max-width: 100%;
	max-height: 100%;
	display: grid;
	place-items: center;
	text-align: center;
	color: #fbfbfb;
}

h1 {
	/* font-family: "Prosto One", cursive; */
	font-size: 3em;
}
h1 span {
	display: inline-block;
}
h1.animated-span span {
	animation: bounce 0.6s linear;
}
@keyframes bounce {
	10%,
	100% {
		transform: translate(0);
	}
	25% {
		transform: rotateX(20deg) translateY(2px) rotate(-3deg);
	}
	50% {
		transform: translateY(-20px) rotate(3deg) scale(1.1);
	}
}
h1.animated-span span:nth-child(2) {
	animation-delay: 0.05s;
}
h1.animated-span span:nth-child(3) {
	animation-delay: 0.1s;
}
h1.animated-span span:nth-child(4) {
	animation-delay: 0.15s;
}
h1.animated-span span:nth-child(5) {
	animation-delay: 0.2s;
}
h1.animated-span span:nth-child(6) {
	animation-delay: 0.25s;
}
h1.animated-span span:nth-child(7) {
	animation-delay: 0.3s;
}
h1.animated-span span:nth-child(8) {
	animation-delay: 0.35s;
}
h1.animated-span span:nth-child(9) {
	animation-delay: 0.4s;
}
h1.animated-span span:nth-child(10) {
	animation-delay: 0.45s;
}
h1.animated-span span:nth-child(11) {
	animation-delay: 0.5s;
}
h1.animated-span span:nth-child(12) {
	animation-delay: 0.55s;
}
h1.animated-span span:nth-child(13) {
	animation-delay: 0.6s;
}
h1.animated-span span:nth-child(14) {
	animation-delay: 0.65s;
}
h1.animated-span span:nth-child(15) {
	animation-delay: 0.7s;
}
h1.animated-span span:nth-child(16) {
	animation-delay: 0.75s;
}
h1.animated-span span:nth-child(17) {
	animation-delay: 0.8s;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
	transition: opacity 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
	opacity: 0;
}
</style>
