declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element by data-test attribute.
			 * @example cy.getByData('hero-heading')
			 */
			getByData(selector: string): Chainable<JQuery<HTMLElement>>

			/**
			 * Custom command to find DOM element by data-test attribute.
			 * @example cy.findByData('hero-heading')
			 */
			findByData(selector: string): Chainable<JQuery<HTMLElement>>

			/**
			 * Custom command to wrap DOM element by data-test attribute.
			 * @example cy.wrapByData('hero-heading')
			 */
			wrapByData(selector: string): Chainable<JQuery<HTMLElement>>
		}
	}
}

export {}
