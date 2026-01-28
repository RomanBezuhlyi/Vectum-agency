export function initClientsSwiper() {
	new Swiper('.clients__swiper', {
		spaceBetween: 20,
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			767: {
				spaceBetween: 60,
				slidesPerView: 4.5,
			},
			1024: {
				spaceBetween: 100,
				slidesPerView: 5,
			},
		},
	})
}
