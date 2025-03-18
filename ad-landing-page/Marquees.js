export default class Marquee {
	constructor(element) {
		this.marquee = element;
		this.marqueeInner = this.marquee.querySelector('.marquee-inner');
		this.animation = null;

		this.updateDimensions();
		this.setup();
		this.animate();

		this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
		this.resizeObserver.observe(this.marquee);
	}

	updateDimensions() {
		this.marqueeWidth = this.marquee.offsetWidth;
		this.marqueeInnerWidth = this.marqueeInner.offsetWidth;
		this.gap = parseFloat(getComputedStyle(this.marquee).gap) || 0;
	}

	handleResize() {
		this.updateDimensions();

		if (this.animation) {
			this.animation.kill();
		}

		this.setup();
		this.animate();
	}

	setup() {
		this.clones = this.marquee.querySelectorAll(
			'.marquee-inner:not(:first-child)'
		);

		this.clones.forEach((clone) => clone.remove());

		this.numCopies = Math.ceil(this.marqueeWidth / this.marqueeInnerWidth) + 1;

		if (this.wrapper) {
			this.wrapper.remove();
		}

		this.wrapper = document.createElement('div');
		this.wrapper.style.display = 'flex';
		this.wrapper.style.gap = `${this.gap}px`;

		if (this.marqueeInner.parentNode !== this.wrapper) {
			this.marqueeInner.remove();
			this.wrapper.appendChild(this.marqueeInner);
		}

		for (let i = 0; i < this.numCopies; i++) {
			const clone = this.marqueeInner.cloneNode(true);
			this.wrapper.appendChild(clone);
		}

		this.marquee.appendChild(this.wrapper);
	}

	animate() {
		this.itemWidth = this.marqueeInnerWidth + this.gap;

		this.animation = gsap.to(this.wrapper, {
			x: -this.itemWidth,
			duration: 10,
			ease: 'none',
			repeat: -1,
			onRepeat: () => {
				gsap.set(this.wrapper, { x: 0 });
			},
		});
	}
}
