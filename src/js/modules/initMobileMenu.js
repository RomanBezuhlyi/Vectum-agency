export function initMobileMenu() {
	const burger = document.querySelector('.header__burger')
	const menu = document.querySelector('.mobile-menu-wrap')

	if (!burger || !menu) return

	burger.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('open')
		burger.classList.toggle('open', isOpen)
		document.body.classList.toggle('no-scroll', isOpen)
	})
}
