export function scrollToAnchor() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const targetSelector = this.getAttribute('href')
			const target = document.querySelector(targetSelector)

			if (!target) return

			e.preventDefault()

			// Визначаємо позицію блоку
			const elementPosition =
				target.getBoundingClientRect().top + window.pageYOffset

			// Центрування по екрану
			const offset =
				elementPosition - window.innerHeight / 2 + target.offsetHeight / 2

			window.scrollTo({
				top: offset,
				behavior: 'smooth',
			})

			// Додатково можна підсвітити блок
			target.classList.add('highlight')
			setTimeout(() => target.classList.remove('highlight'), 2000)
		})
	})
}
