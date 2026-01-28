import { initClientsSwiper } from './modules/initClientsSwiper'
import { initMobileMenu } from './modules/initMobileMenu'
import { initMobileMenuAccordion } from './modules/initMobileMenuAccordion'
import { initPhoneMask } from './modules/initPhoneMask'
import { initPlannerForm } from './modules/initPlannerForm'
import { initPriceCalculator } from './modules/initPriceCalculator'
import { initShowPhone } from './modules/initShowPhone'
import { initTeamSwiper } from './modules/initTeamSwiper'

document.addEventListener('DOMContentLoaded', () => {
	initShowPhone()
	initMobileMenu()
	initMobileMenuAccordion()
	initClientsSwiper()
	initPriceCalculator({
		checkboxSelector: '.price-checkbox',
		priceDisplaySelector: '#custom-price',
	})
	initPriceCalculator({
		checkboxSelector: '.price-checkbox',
		priceDisplaySelector: '#custom-price-mobile',
	})
	initPhoneMask()
	initPlannerForm()
	initTeamSwiper()
})
