let activeModal = null

export function initModals() {
	const openButtons = document.querySelectorAll('[data-modal-open]')
	const closeButtons = document.querySelectorAll('[data-modal-close]')
	const modals = document.querySelectorAll('.modal')

	// Відкриття
	openButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			const modalName = btn.dataset.modalOpen
			const modal = document.getElementById(`modal-${modalName}`)
			openModal(modal)
		})
	})

	// Закриття по кнопці або overlay
	closeButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			closeModal(btn.closest('.modal'))
		})
	})

	// Закриття по Esc
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && activeModal) {
			closeModal(activeModal)
		}
	})

	// Закриття кліком по overlay (додатковий захист)
	modals.forEach(modal => {
		modal.addEventListener('click', e => {
			if (e.target.classList.contains('modal')) {
				closeModal(modal)
			}
		})
	})
}

export function openModal(modal) {
	if (!modal) return

	if (activeModal) closeModal(activeModal)

	modal.classList.add('modal--active')
	modal.setAttribute('aria-hidden', 'false')
	document.body.style.overflow = 'hidden'

	activeModal = modal
}

export function closeModal(modal) {
	if (!modal) return

	modal.classList.remove('modal--active')
	modal.setAttribute('aria-hidden', 'true')
	document.body.style.overflow = ''

	activeModal = null
}
