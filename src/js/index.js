import { initArticleNavigation } from './modules/initArticleNavigation'
import { initArticlesSwiper } from './modules/initArticlesSwiper'
import { initClientsSwiper } from './modules/initClientsSwiper'
import { initCounters } from './modules/initCounters'
import { initFaqAccordion } from './modules/initFaqAccordion'
import { initHeroArrowAnimation } from './modules/initHeroArrowAnimation'
import { initHeroTyping } from './modules/initHeroTyping'
import { initMobileMenu } from './modules/initMobileMenu'
import { initMobileMenuAccordion } from './modules/initMobileMenuAccordion'
import { initOpacityAnimations } from './modules/initOpacityAnimations'
import { initPhoneMask } from './modules/initPhoneMask'
import { initPlannerForm } from './modules/initPlannerForm'
import { initPopups } from './modules/initPopups'
import { initPortfolioSwiper } from './modules/initPortfolioSwiper'
import { initPriceCalculator } from './modules/initPriceCalculator'
import { initReviewsSwiper } from './modules/initReviewsSwiper'
import { initScrollAnimations } from './modules/initScrollAnimations'
import { initScrollToTop } from './modules/initScrollToTop'
import { initShowPhone } from './modules/initShowPhone'
import { initStickyHeaderShadow } from './modules/initStickyHeaderShadow'
import { initTeamSwiper } from './modules/initTeamSwiper'
import { initVacancyContentSwitcher } from './modules/initVacancyContentSwitcher'
import { scrollToAnchor } from './modules/scrollToAnchor'

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
	initCounters()
	initHeroTyping()
	initHeroArrowAnimation()
	initScrollAnimations()
	initOpacityAnimations()
	initScrollToTop()
	scrollToAnchor()
	initPortfolioSwiper()
	initArticleNavigation({
		contentSelector: '.article__content',
		navSelector: '.article__nav',
	})

	initArticleNavigation({
		contentSelector: '.case__content', // якщо інший контент
		navSelector: '.case__nav',
	})
	initStickyHeaderShadow()
	initVacancyContentSwitcher()
})
