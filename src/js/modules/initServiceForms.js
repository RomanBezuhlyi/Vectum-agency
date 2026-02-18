export function initServiceForms(options = {}) {
	const formSelectors = options.formSelectors || [
		'.planner__form form',
		'#modal-audit form',
	]
	const tabSelectors = options.tabSelectors || [
		'.planner__form-tab',
		'.modal__tab',
	]
	const hiddenInputSelectors = options.hiddenInputSelectors || [
		'#selected-service',
		'#selected-service',
	]

	formSelectors.forEach((formSelector, index) => {
		const form = document.querySelector(formSelector)
		const tabs = document.querySelectorAll(tabSelectors[index])
		const hiddenInput = form?.querySelector(hiddenInputSelectors[index])

		if (!form || !tabs.length || !hiddenInput) {
			console.warn(
				`Form init: Не всі потрібні елементи знайдені для ${formSelector}`
			)
			return
		}

		let selectedTab = null

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				tabs.forEach(t => t.classList.remove('active'))
				tab.classList.add('active')

				selectedTab = tab.textContent.trim()
				hiddenInput.value = selectedTab
			})
		})
	})
}
