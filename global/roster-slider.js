(() => {
	/**
	 * Clones the swiper slides a number of times to assist in looping.
	 * @param {HTMLElement} slider - The Swiper container element.
	 * @param {number} loops - Number of times to duplicate the slides.
	 */
	function cloneSlides(slider, loops = 3) {
		if (!slider) return;

		const slides = slider.querySelectorAll('.swiper-slide');
		const wrapper = slider.querySelector('.swiper-wrapper');

		if (!wrapper || slides.length === 0) return;

		const fragment = document.createDocumentFragment();
		for (let i = 0; i < loops; i++) {
			slides.forEach((slide) => {
				fragment.appendChild(slide.cloneNode(true));
			});
		}

		wrapper.appendChild(fragment);
	}

	/**
	 * Initializes the Swiper instance.
	 * @param {HTMLElement} sliderElement - The Swiper container element.
	 */
	function createSlider(sliderElement) {
		if (!sliderElement) return;

		new Swiper(sliderElement, {
			effect: 'coverflow',
			slidesPerView: 1,
			grabCursor: false,
			spaceBetween: -64,
			loop: true,
			loopedSlides: 10,
			loopAdditionalSlides: 10,
			speed: 1200,
			createElements: true,
			centeredSlides: true,
			autoplay: {
				delay: 1500,
			},
			coverflowEffect: {
				scale: 0.95,
				stretch: 0,
				depth: 100,
				modifier: 0.75,
			},
			slideActiveClass: 'current-slide',
		});
	}

	/**
	 * Initializes the entire slider setup after DOM is ready.
	 */
	function init() {
		const sliderElement = document.querySelector('.swiper.is-roster');
		if (!sliderElement) {
			console.warn('Swiper container not found.');
			return;
		}

		cloneSlides(sliderElement);
		createSlider(sliderElement);
	}

	document.addEventListener('DOMContentLoaded', init);
})();
