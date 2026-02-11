export function initOpacityAnimations() {
	const elements = document.querySelectorAll('.fade-opacity')

	if (!elements.length) return

	// Додаємо клас одразу після завантаження сторінки
	requestAnimationFrame(() => {
		elements.forEach(el => {
			el.classList.add('is-visible')
		})
	})
}
