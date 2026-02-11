export function initScrollAnimations() {
	const elements = document.querySelectorAll('.fade-in')

	if (!elements.length) return

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible')
					obs.unobserve(entry.target) // щоб не тригерилось повторно
				}
			})
		},
		{
			threshold: 0.15,
		}
	)

	elements.forEach(el => observer.observe(el))
}
