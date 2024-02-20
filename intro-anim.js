(() => {
	if (document.querySelector('[intro-anim]') !== null) {
		const nav = document.querySelector("[intro-anim='nav']");
		const headerElements = document.querySelector(
			"[intro-anim='header']"
		).children;
		const visual = document.querySelector("[intro-anim='visual']");

		function playIntro() {
			const tl = new gsap.timeline({
				defaults: {
					duration: 1.5,
					ease: 'power4.out',
				},
			});

			tl.from(nav, { y: '-100%', opacity: 0 })
				.from(
					headerElements,
					{ y: '2rem', opacity: 0, stagger: { each: '0.125' } },
					'<'
				)
				.from(visual, { y: '100%', opacity: 0 }, '<');
		}

		document.addEventListener('DOMContentLoaded', playIntro);
	}
})();
