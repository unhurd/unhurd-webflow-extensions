import Marquee from './Marquees.js';

document.addEventListener('DOMContentLoaded', () => {
	const marqueeElements = document.querySelectorAll('.marquee');
	marqueeElements.forEach((element) => new Marquee(element));
});
