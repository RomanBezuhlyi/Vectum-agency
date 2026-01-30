export function initFaqAccordion() {
	const items = document.querySelectorAll('.faq__item')

	if (!items.length) return

	items.forEach(item => {
		const top = item.querySelector('.faq__item-top')

		if (!top) return

		top.addEventListener('click', () => {
			const isOpen = item.classList.contains('open')

			// закриваємо всі
			items.forEach(i => i.classList.remove('open'))

			// якщо клік був не по відкритому — відкриваємо
			if (!isOpen) {
				item.classList.add('open')
			}
		})
	})
}
