export function initHeroArrowAnimation() {
	const arrow = document.querySelector('.hero__right-arrow')

	// Перевірка на наявність елемента
	if (!arrow) return

	// Даємо невелику затримку, щоб було плавніше
	requestAnimationFrame(() => {
		arrow.classList.add('is-visible')
	})
}
