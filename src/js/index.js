import { initMobileMenu } from './modules/initMobileMenu'
import { initMobileMenuAccordion } from './modules/initMobileMenuAccordion'
import { initShowPhone } from './modules/initShowPhone'

document.addEventListener('DOMContentLoaded', () => {
	initShowPhone()
	initMobileMenu()
	initMobileMenuAccordion()
})
