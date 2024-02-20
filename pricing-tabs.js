(() => {
	if (document.querySelector('.pricing-pane_wrapper.is-desktop') !== null) {
		const pricingPaneWrappers = document.querySelectorAll(
			'.pricing-pane_wrapper.is-desktop'
		);

		pricingPaneWrappers.forEach((wrapper) => {
			const seeMoreLink = wrapper.querySelector('.see-more');

			const hiddenItems = wrapper.querySelectorAll(
				'.pricing-box-list-item.is-hidden'
			);

			hiddenItems.forEach((item) => {
				item.style.display = 'none';
			});

			function seeMore() {
				hiddenItems.forEach((item) => {
					item.style.display = 'flex';
				});

				seeMoreLink.innerText = 'See Less';
			}

			function seeLess() {
				hiddenItems.forEach((item) => {
					item.style.display = 'none';
				});

				seeMoreLink.innerText = 'See All';
			}

			if (seeMoreLink !== null) {
				seeMoreLink.addEventListener('click', (e) => {
					if (seeMoreLink.classList.contains('is-open')) {
						seeMoreLink.classList.remove('is-open');
						seeLess();
					} else {
						seeMoreLink.classList.add('is-open');
						seeMore();
					}
				});
			}
		});
	}

	if (document.querySelector('.pricing-pane_wrapper.is-mobile') !== null) {
		const pricingPaneWrappers = document.querySelectorAll(
			'.pricing-pane_wrapper.is-mobile'
		);

		pricingPaneWrappers.forEach((wrapper) => {
			const seeMoreLink = wrapper.querySelector('.see-more');

			const hiddenItems = wrapper.querySelectorAll(
				'.pricing-box-list-item.is-hidden'
			);

			hiddenItems.forEach((item) => {
				item.style.display = 'none';
			});

			function seeMore() {
				hiddenItems.forEach((item) => {
					item.style.display = 'flex';
				});

				seeMoreLink.innerText = 'See Less';
			}

			function seeLess() {
				hiddenItems.forEach((item) => {
					item.style.display = 'none';
				});

				seeMoreLink.innerText = 'See All';
			}

			if (seeMoreLink !== null) {
				seeMoreLink.addEventListener('click', (e) => {
					if (seeMoreLink.classList.contains('is-open')) {
						seeMoreLink.classList.remove('is-open');
						seeLess();
					} else {
						seeMoreLink.classList.add('is-open');
						seeMore();
					}
				});
			}
		});
	}
})();
