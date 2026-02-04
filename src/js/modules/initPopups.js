export function initPopups() {
	const popupButtons = document.querySelectorAll('[data-popup-target]')
	const popups = document.querySelectorAll('.popup')

	if (!popupButtons.length || !popups.length) return

	const openPopup = popup => {
		popup.classList.add('active')
		document.body.classList.add('no-scroll') // забороняємо скролл
	}

	const closePopup = popup => {
		popup.classList.remove('active')
		// якщо більше немає відкритих попапів, дозволяємо скролл
		if (!document.querySelector('.popup.active')) {
			document.body.classList.remove('no-scroll')
		}
	}

	popupButtons.forEach(button => {
		button.addEventListener('click', () => {
			const targetId = button.getAttribute('data-popup-target')
			const popup = document.getElementById(targetId)
			if (popup) openPopup(popup)
		})
	})

	popups.forEach(popup => {
		const closeBtn = popup.querySelector('.popup__close')
		closeBtn?.addEventListener('click', () => closePopup(popup))

		popup.addEventListener('click', e => {
			if (e.target === popup) closePopup(popup)
		})
	})

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			popups.forEach(popup => closePopup(popup))
		}
	})
}
