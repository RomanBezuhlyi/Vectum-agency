export function initStickyHeaderShadow({
	headerSelector = '.header-wrap',
	scrolledClass = 'header-wrap--scrolled',
} = {}) {
	const header = document.querySelector(headerSelector)
	if (!header) return

	const toggleShadow = () => {
		header.classList.toggle(scrolledClass, window.scrollY > 0)
	}

	toggleShadow() // на випадок якщо сторінка вже проскролена
	window.addEventListener('scroll', toggleShadow, { passive: true })
}
