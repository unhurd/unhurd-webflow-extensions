(() => {
	const script = document.currentScript;
	const container = script.closest('.custom-video_embed');

	if (!container.dataset.videoUrl) {
		console.log('Video url not set');
		return;
	}

	const { videoUrl } = container.dataset;
	const video = container.querySelector('video');

	function init() {
		video.setAttribute('src', videoUrl);

		function toggleSound() {
			video.muted = !video.muted;
            container.setAttribute("data-muted", video.muted);
		}

		video.addEventListener('click', toggleSound);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
