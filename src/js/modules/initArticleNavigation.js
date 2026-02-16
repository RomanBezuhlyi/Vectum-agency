export function initArticleNavigation({
	contentSelector = '.article__content',
	navSelector = '.article__nav',
	activeClass = 'active',
	offset = 100, // відступ від верху (для fixed header)
} = {}) {
	const content = document.querySelector(contentSelector)
	const nav = document.querySelector(navSelector)

	if (!content || !nav) return

	const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6')
	if (!headings.length) return

	// Очистити навігацію (щоб не дублювалось)
	nav.innerHTML = ''

	const slugify = text => {
		return text
			.toString()
			.toLowerCase()
			.trim()
			.replace(/[\s]+/g, '-')
			.replace(/[^\w\u0400-\u04FF-]+/g, '') // латиниця + кирилиця
			.replace(/--+/g, '-')
	}

	const usedIds = new Set()

	headings.forEach((heading, index) => {
		let baseId = heading.id || slugify(heading.textContent)
		let id = baseId
		let counter = 1

		while (usedIds.has(id)) {
			id = `${baseId}-${counter++}`
		}

		usedIds.add(id)
		heading.id = id

		const link = document.createElement('a')
		link.href = `#${id}`
		link.textContent = heading.textContent
		link.dataset.target = id
		link.classList.add('article__nav-link')

		// Клік з урахуванням offset
		link.addEventListener('click', e => {
			e.preventDefault()
			const target = document.getElementById(id)
			if (!target) return

			const top =
				target.getBoundingClientRect().top + window.pageYOffset - offset

			window.scrollTo({
				top,
				behavior: 'smooth',
			})
		})

		nav.appendChild(link)
	})

	// Активний пункт при скролі
	const navLinks = nav.querySelectorAll('.article__nav-link')

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.id

					navLinks.forEach(link => {
						link.classList.toggle(activeClass, link.dataset.target === id)
					})
				}
			})
		},
		{
			rootMargin: `-${offset}px 0px -60% 0px`,
			threshold: 0.1,
		}
	)

	headings.forEach(heading => observer.observe(heading))
}
