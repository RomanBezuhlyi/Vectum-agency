export function initVacancyContentSwitcher() {
	const switcher = document.querySelector('.vacancy__content-switcher')
	if (!switcher) return

	const tabs = switcher.querySelectorAll('.vacancy__content-tab')
	const blocks = switcher.querySelectorAll('.vacancy__content-block')

	if (!tabs.length || !blocks.length) return
	if (tabs.length !== blocks.length) {
		console.warn('Tabs count does not match blocks count')
	}

	// Ініціалізація стану
	function setActive(index) {
		tabs.forEach((tab, i) => {
			tab.classList.toggle('active', i === index)
		})

		blocks.forEach((block, i) => {
			block.style.display = i === index ? 'block' : 'none'
		})
	}

	// Визначаємо початковий активний таб
	const initialIndex = [...tabs].findIndex(tab =>
		tab.classList.contains('active')
	)

	setActive(initialIndex !== -1 ? initialIndex : 0)

	// Навішування подій
	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			if (tab.classList.contains('active')) return
			setActive(index)
		})
	})
}
