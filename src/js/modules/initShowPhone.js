export function initShowPhone() {
	const buttons = document.querySelectorAll('.header__contacts-phone button')

	if (!buttons.length) return

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			button.style.opacity = '0'
			button.style.pointerEvents = 'none'
		})
	})
}
