export function initArticlesSwiper() {
	new Swiper('.articles__swiper', {
		spaceBetween: 8,
		slidesPerView: 1,
		navigation: {
			prevEl: '.articles__nav-prev',
			nextEl: '.articles__nav-next',
		},
		breakpoints: {
			767: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	})
}
