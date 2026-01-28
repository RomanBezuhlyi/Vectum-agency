export function initPlannerForm(options = {}) {
	const formSelector = options.formSelector || '.planner__form form'
	const tabSelector = options.tabSelector || '.planner__form-tab'
	const nameSelector = options.nameSelector || 'input[placeholder="Ваше ім’я"]'
	const phoneSelector = options.phoneSelector || 'input[data-phone-input]'
	const consentSelector = options.consentSelector || '.consent-checkbox'
	const submitButtonSelector =
		options.submitButtonSelector || 'button[type="submit"]'
	const hiddenInputSelector = options.hiddenInputSelector || '#selected-service'

	const form = document.querySelector(formSelector)
	const tabs = document.querySelectorAll(tabSelector)
	const nameInput = form?.querySelector(nameSelector)
	const phoneInput = form?.querySelector(phoneSelector)
	const consentCheckbox = form?.querySelector(consentSelector)
	const submitButton = form?.querySelector(submitButtonSelector)
	const hiddenInput = form?.querySelector(hiddenInputSelector)

	// Перевірки
	if (
		!form ||
		!tabs.length ||
		!nameInput ||
		!phoneInput ||
		!consentCheckbox ||
		!submitButton ||
		!hiddenInput
	) {
		console.warn('Planner Form: Не всі потрібні елементи знайдені на сторінці')
		return
	}

	let selectedTab = null

	// Обробка кліку на таби
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			// зняти active у всіх
			tabs.forEach(t => t.classList.remove('active'))
			tab.classList.add('active')
			selectedTab = tab.textContent.trim()

			// запис у прихований інпут
			hiddenInput.value = selectedTab

			checkFormValidity()
		})
	})

	// Функція перевірки валідності
	function checkFormValidity() {
		const isValid =
			selectedTab &&
			nameInput.value.trim() !== '' &&
			phoneInput.value.trim() !== '' &&
			consentCheckbox.checked

		submitButton.disabled = !isValid
	}

	// Прив’язуємо події до інпутів та чекбокса
	;[nameInput, phoneInput, consentCheckbox].forEach(el => {
		el.addEventListener('input', checkFormValidity)
		el.addEventListener('change', checkFormValidity)
	})

	// Ініціальна перевірка
	checkFormValidity()
}
