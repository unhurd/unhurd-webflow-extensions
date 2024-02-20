(() => {
	if (document.querySelector('.nav') !== null) {
		const nav = document.querySelector('.nav');
		const navButton = nav.querySelector('.nav-button');
		const mobileNav = nav.querySelector('.mobile-nav');
		const mobileNavLinks = [
			...mobileNav.querySelectorAll('.button'),
			...mobileNav.querySelectorAll('.nav-link'),
			...mobileNav.querySelector('.nav-footer').children,
		];

		function navClick(e) {
			//check to see if we're opening or closing the nav
			if (navButton.classList.contains('is-open')) {
				closeNav();
				navButton.classList.remove('is-open');
			} else {
				openNav();
				navButton.classList.add('is-open');
			}
		}

		const tl = new gsap.timeline({ paused: true, defaults : {
            ease: "Power3.out",
            duration: 0.4
        } });

		tl.to(mobileNav, { height: 'auto' }).from(mobileNavLinks, {
			opacity: 0,
			transform: "translateY(-2rem)",
			stagger: { amount: 0.25 },
            delay: 0.2
		}, "<");

		function openNav() {
			tl.restart();
		}

		function closeNav() {
			tl.reverse();
		}

		function init() {
			navButton.addEventListener('click', navClick);
		}

		init();
	}
})();
