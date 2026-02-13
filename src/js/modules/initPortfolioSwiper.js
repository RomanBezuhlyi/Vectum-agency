export function initPortfolioSwiper() {
	new Swiper('.portfolio__swiper', {
		spaceBetween: 20,
		slidesPerView: 1,
		navigation: {
			prevEl: '.portfolio__nav-prev',
			nextEl: '.portfolio__nav-next',
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1025: {
				spaceBetween: 30,
				slidesPerView: 3,
			},
		},
	})
}
