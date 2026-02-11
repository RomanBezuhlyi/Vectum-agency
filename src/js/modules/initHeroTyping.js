export function initHeroTyping() {
	const element = document.querySelector('.hero__text')

	// Перевірка на наявність елемента
	if (!element) return

	const originalText = element.textContent.trim()

	// Якщо тексту немає — вихід
	if (!originalText.length) return

	element.textContent = ''

	typeText(element, originalText, 60)
}

function typeText(element, text, speed) {
	let index = 0

	function type() {
		if (index < text.length) {
			element.textContent += text.charAt(index)
			index++
			setTimeout(type, speed)
		}
	}

	type()
}
