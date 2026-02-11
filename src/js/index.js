import { initArticlesSwiper } from './modules/initArticlesSwiper'
import { initClientsSwiper } from './modules/initClientsSwiper'
import { initFaqAccordion } from './modules/initFaqAccordion'
import { initHeroArrowAnimation } from './modules/initHeroArrowAnimation'
import { initHeroCounters } from './modules/initHeroCounters'
import { initHeroTyping } from './modules/initHeroTyping'
import { initMobileMenu } from './modules/initMobileMenu'
import { initMobileMenuAccordion } from './modules/initMobileMenuAccordion'
import { initOpacityAnimations } from './modules/initOpacityAnimations'
import { initPhoneMask } from './modules/initPhoneMask'
import { initPlannerForm } from './modules/initPlannerForm'
import { initPopups } from './modules/initPopups'
import { initPriceCalculator } from './modules/initPriceCalculator'
import { initReviewsSwiper } from './modules/initReviewsSwiper'
import { initScrollAnimations } from './modules/initScrollAnimations'
import { initScrollToTop } from './modules/initScrollToTop'
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
	initReviewsSwiper()
	initArticlesSwiper()
	initFaqAccordion()
	initPopups()
	initHeroCounters()
	initHeroTyping()
	initHeroArrowAnimation()
	initScrollAnimations()
	initOpacityAnimations()
	initScrollToTop()
})
