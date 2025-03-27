(() => {
	//check if there are swiper sliders on the page
	if (document.querySelector('.slider-component') !== null) {
		//loop through each slider and set it up
		const sliders = document.querySelectorAll('.slider-component');
		sliders.forEach((slider) => {
			//check for type of slider
			if (slider.querySelector('.swiper.is-artist')) {
                //SETUP SLIDER

				const slides = [...slider.querySelectorAll(".swiper-slide")];
				const noOfSlides =  Math.max(Math.ceil(slider.offsetWidth / slides[0].offsetWidth), 10);
				const slideNum = Math.ceil(slider.offsetWidth / slides[0].offsetWidth);
				
				for(let i = 0; i < noOfSlides * 3 ; i++){
					slider.querySelector(".swiper-wrapper").appendChild(slides[i % 6].cloneNode(true));
				}

				const testimonialsSlider = new Swiper(
					slider.querySelector('.swiper.is-artist'),
					{
						speed: 800,
						effect: 'slide',
						direction: 'horizontal',
						loop: true,
						loopedSlides: slideNum,
						slidesPerView: 1.25,
						centeredSlides: true,
						loopAdditionalSlides: slideNum * 2,
						keyboard: true,
						spaceBetween: 24,
						navigation: {
							nextEl: slider.querySelector('.swiper-slide-button.is-next'),
							prevEl: slider.querySelector('.swiper-slide-button.is-prev'),
						},
						breakpoints: {
							
							600: {
								slidesPerView: 2.5
							},


							991: {
								slidesPerView: slideNum * 0.825
							},
						}
					}
				);
			}


            if(slider.querySelector(".swiper.is-stats")){
                const statsSlider = new Swiper(
					slider.querySelector('.swiper.is-stats'),
					{
						speed: 800,
						effect: 'slide',
						direction: 'horizontal',
						slidesPerView: 'auto',
						keyboard: true,
						spaceBetween: 40,
                        navigation: {
							nextEl: slider.querySelector('.swiper-slide-button.is-next'),
							prevEl: slider.querySelector('.swiper-slide-button.is-prev'),
						},
					}
				);
            }

			if(slider.querySelector(".swiper.is-testimonial")){
                const testimonailsSlider = new Swiper(
					slider.querySelector('.swiper.is-testimonial'),
					{
						speed: 800,
						effect: 'slide',
						direction: 'horizontal',
						slidesPerView: 'auto',
						keyboard: true,
						spaceBetween: 40,
                        navigation: {
							nextEl: slider.querySelector('.swiper-slide-button.is-next'),
							prevEl: slider.querySelector('.swiper-slide-button.is-prev'),
						},
						on: {
							init: function (){
								slider.querySelector(".slides-length").innerText = this.slides.length;

							},

							slideChange: function (){
								slider.querySelector(".active-slide").innerText = this.activeIndex + 1;
							}
						}
					}
				);

				// slider.querySelector(".slides-length").innerText = testimonailsSlider.slides.length;
				// console.log(testimonailsSlider)
				// slider.onslideChange = () => {
				// 	console.log("slide changed")
				// }
            }
		});
	}
})();
