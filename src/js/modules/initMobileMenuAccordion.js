export function initMobileMenuAccordion() {
	const triggers = document.querySelectorAll('.mobile-menu__nav-item--main')
	if (!triggers.length) return

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			const item = trigger.closest('.mobile-menu__nav-item')
			if (!item) return

			const isMobile = window.innerWidth < 767

			if (isMobile) {
				// якщо клік по вже активному — просто закриваємо
				if (item.classList.contains('active')) {
					item.classList.remove('active')
					return
				}

				// знімаємо active з усіх
				triggers.forEach(t => {
					const parent = t.closest('.mobile-menu__nav-item')
					parent?.classList.remove('active')
				})

				// активуємо поточний
				item.classList.add('active')
			} else {
				// desktop — звичайний toggle
				item.classList.toggle('active')
			}
		})
	})
}
