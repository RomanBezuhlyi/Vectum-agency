export function initHeroCounters() {
	const counterElements = document.querySelectorAll(
		'.hero__left-bottom--item p'
	)

	// Перевірка на наявність елементів
	if (!counterElements || counterElements.length === 0) {
		return
	}

	counterElements.forEach(el => {
		const originalText = el.textContent.trim()

		// Витягуємо число
		const numericValue = parseInt(originalText.replace(/[^\d]/g, ''), 10)

		// Якщо число не знайдено — пропускаємо
		if (isNaN(numericValue)) {
			return
		}

		// Визначаємо суфікс (+, %, тощо)
		const suffix = originalText.replace(/[\d]/g, '')

		animateCounter(el, numericValue, suffix)
	})
}

function animateCounter(element, target, suffix) {
	const duration = 1500
	const startTime = performance.now()

	function update(currentTime) {
		const elapsed = currentTime - startTime
		const progress = Math.min(elapsed / duration, 1)

		const currentValue = Math.floor(progress * target)

		element.textContent = currentValue + suffix

		if (progress < 1) {
			requestAnimationFrame(update)
		} else {
			element.textContent = target + suffix
		}
	}

	requestAnimationFrame(update)
}
