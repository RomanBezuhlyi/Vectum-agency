export function initTeamSwiper() {
	new Swiper('.team__swiper', {
		spaceBetween: 16,
		slidesPerView: 1,
		navigation: {
			prevEl: '.team__swiper-prev',
			nextEl: '.team__swiper-next',
		},
	})
}
