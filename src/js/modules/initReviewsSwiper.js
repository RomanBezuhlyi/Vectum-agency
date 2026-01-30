export function initReviewsSwiper() {
	const swiperEl = document.querySelector('.reviews__swiper')
	const users = document.querySelectorAll('.reviews__user')

	if (!swiperEl || !users.length) return

	const swiper = new Swiper(swiperEl, {
		slidesPerView: 1,
		spaceBetween: 16,
		speed: 1000,
		navigation: {
			prevEl: '.reviews__nav-prev',
			nextEl: '.reviews__nav-next',
		},
		on: {
			slideChange() {
				updateActiveUser(swiper.realIndex)
			},
		},
	})

	function updateActiveUser(index) {
		users.forEach(user => user.classList.remove('active'))
		if (users[index]) {
			users[index].classList.add('active')
		}
	}

	// клік по юзеру → перемикання слайду
	users.forEach((user, index) => {
		user.addEventListener('click', () => {
			if (swiper.params.loop) {
				swiper.slideToLoop(index)
			} else {
				swiper.slideTo(index)
			}
		})
	})

	// ініціалізація активного юзера
	updateActiveUser(swiper.realIndex)
}
