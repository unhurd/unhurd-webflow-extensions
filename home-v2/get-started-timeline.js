(() => {
	function init() {
		gsap.registerPlugin(ScrollTrigger);

		const container = document.querySelector('.home-started_scroll');

		if (!container) {
			console.log('scroll container not found to begin animation');
			return false;
		}

		const scrollerElem = container.parentElement;

		const scrollCheckpoints = [
			...container.querySelectorAll('.scroll-trigger'),
		];
		const timeline = container.querySelector('.home-started_timeline');
		const timelineSpans = [...container.querySelectorAll('.timeline_span')];
		const timelineBlocks = [
			...container.querySelectorAll('.timeline-span_block'),
		];
		const timelineDots = [...container.querySelectorAll('.timeline-span_dot')];
		const timelineBlockText = [
			...container.querySelectorAll('.timeline-span_text'),
		];
		const movementPerc =
			(timelineSpans[0].getBoundingClientRect().width / window.innerWidth) *
			100;

		//animation settings
		const initialScale = 0.5;
		const pauseDuration = 0.5;

		gsap.set(filterArray(timelineBlocks, 0), { scale: initialScale });
		gsap.set(filterArray(timelineDots, 0), { scale: initialScale });
		gsap.set(filterArray(timelineBlockText, 0), { opacity: 0, y: '2.5rem' });

		const tl = new gsap.timeline({
			scrollTrigger: {
				trigger: container,
				horizontal: true,
				scroller: scrollerElem,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
			defaults: {
				duration: pauseDuration * 4,
				ease: 'expo.inOut',
			},
		});

		tl;

		// .to(timeline, { x: `0vw` })
		// 	.to(filterArray(timelineBlocks, 0), { scale: initialScale }, '<')
		// 	.to(timelineBlocks[0], { scale: 1 }, '<')

		// 	.to(filterArray(timelineBlockText, 0), { opacity: 0, y: '2.5rem' }, '<')
		// 	.to(timelineBlockText[0], { opacity: 1, y: '0' }, '<')

		// 	.to(filterArray(timelineDots, 0), { scale: initialScale }, '<')
		// 	.to(timelineDots[0], { scale: 1 }, '<')

		//block two
		tl.to(timeline, { x: `-${movementPerc}vw` } /*`>+=${pauseDuration}`*/)
			.to(filterArray(timelineBlocks, 1), { scale: initialScale }, '<')
			.to(timelineBlocks[1], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 1), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[1], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 1), { scale: initialScale }, '<')
			.to(timelineDots[1], { scale: 1 }, '<')

			//block three
			.to(timeline, { x: `-${movementPerc * 2}vw` }, `>+=${pauseDuration}`)
			.to(filterArray(timelineBlocks, 2), { scale: initialScale }, '<')
			.to(timelineBlocks[2], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 2), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[2], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 2), { scale: initialScale }, '<')
			.to(timelineDots[2], { scale: 1 }, '<')

			//block four
			.to(timeline, { x: `-${movementPerc * 3}vw` }, `>+=${pauseDuration}`)
			.to(filterArray(timelineBlocks, 3), { scale: initialScale }, '<')
			.to(timelineBlocks[3], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 3), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[3], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 3), { scale: initialScale }, '<')
			.to(timelineDots[3], { scale: 1 }, '<')

			// block five
			.to(timeline, { x: `-${movementPerc * 4}vw` }, `>+=${pauseDuration}`)
			.to(filterArray(timelineBlocks, 4), { scale: initialScale }, '<')
			.to(timelineBlocks[4], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 4), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[4], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 4), { scale: initialScale }, '<')
			.to(timelineDots[4], { scale: 1 }, '<')

			// block six
			.to(timeline, { x: `-${movementPerc * 5}vw` }, `>+=${pauseDuration}`)
			.to(filterArray(timelineBlocks, 5), { scale: initialScale }, '<')
			.to(timelineBlocks[5], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 5), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[5], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 5), { scale: initialScale }, '<')
			.to(timelineDots[5], { scale: 1 }, '<')

			//block seven
			.to(timeline, { x: `-${movementPerc * 6}vw` }, `>+=${pauseDuration}`)
			.to(filterArray(timelineBlocks, 6), { scale: initialScale }, '<')
			.to(timelineBlocks[6], { scale: 1 }, '<')

			.to(filterArray(timelineBlockText, 6), { opacity: 0, y: '2.5rem' }, '<')
			.to(timelineBlockText[6], { opacity: 1, y: '0' }, '<')

			.to(filterArray(timelineDots, 6), { scale: initialScale }, '<')
			.to(timelineDots[6], { scale: 1 }, '<');
	}

	function filterArray(array, index) {
		let newArr = [];

		for (i = 0; i < array.length; i++) {
			if (i !== index) {
				newArr.push(array[i]);
			}
		}

		return newArr;
	}

	window.addEventListener('load', init);
})();
