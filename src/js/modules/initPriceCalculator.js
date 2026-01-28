export function initPriceCalculator(options = {}) {
	// Очікуємо об'єкт опцій з селекторами, або ставимо дефолтні
	const checkboxSelector = options.checkboxSelector || '.price-checkbox'
	const priceDisplaySelector = options.priceDisplaySelector || '#custom-price'

	const checkboxes = document.querySelectorAll(checkboxSelector)
	const priceDisplayEl = document.querySelector(priceDisplaySelector)

	// Перевіряємо чи елементи взагалі є
	if (!checkboxes || checkboxes.length === 0) {
		console.warn('Price Calculator: чекбокси не знайдено')
		return
	}

	if (!priceDisplayEl) {
		console.warn(
			`Price Calculator: елемент для відображення ціни "${priceDisplaySelector}" не знайдено`
		)
		return
	}

	// Функція обчислення ціни
	function calculatePrice() {
		let total = 0

		checkboxes.forEach(cb => {
			if (!cb.dataset.price) return // якщо немає data-price, пропускаємо
			if (cb.checked) total += Number(cb.dataset.price) || 0
		})

		// Оновлюємо текст у блоці, якщо priceDisplayEl існує
		if (priceDisplayEl) {
			priceDisplayEl.textContent = `$${total} / month`
		}
	}

	// Прив'язуємо події до всіх чекбоксів
	checkboxes.forEach(cb => cb.addEventListener('change', calculatePrice))

	// Перший розрахунок при ініціалізації
	calculatePrice()
}
