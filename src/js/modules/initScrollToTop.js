export function initScrollToTop() {
	const btn = document.querySelector('.scroll-to-top')
	if (!btn) return

	// Показати кнопку при прокрутці вниз
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			btn.classList.add('is-visible')
		} else {
			btn.classList.remove('is-visible')
		}
	})

	// Клік → плавний скрол вгору
	btn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}
