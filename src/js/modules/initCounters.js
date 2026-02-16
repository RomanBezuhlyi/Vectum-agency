export function initCounters(selector = '[data-counter]') {
	const elements = document.querySelectorAll(selector)

	if (!elements.length) return

	elements.forEach(el => {
		const originalText = el.textContent.trim()
		const numericValue = parseInt(originalText.replace(/[^\d]/g, ''), 10)

		if (isNaN(numericValue)) return

		const suffix = originalText.replace(/[\d]/g, '')

		animateCounter(el, numericValue, suffix)
	})
}

function animateCounter(element, target, suffix = '', duration = 1500) {
	const startTime = performance.now()

	function update(currentTime) {
		const progress = Math.min((currentTime - startTime) / duration, 1)
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
