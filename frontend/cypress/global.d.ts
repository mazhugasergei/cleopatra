declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element by data-test attribute.
			 * @example cy.getByData('hero-heading')
			 */
			getByData(selector: string): Chainable<JQuery<HTMLElement>>
		}
	}
}

export {}
