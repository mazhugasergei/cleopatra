// .getByData("")
Cypress.Commands.add("getByData", (selector) => {
	return cy.get(`[data-test=${selector}]`)
})

// .findByData("")
Cypress.Commands.add("findByData", { prevSubject: true }, (subject, selector) => {
	return cy.wrap(subject).find(`[data-test=${selector}]`)
})

// .should("be.inViewport")
chai.Assertion.addMethod("inViewport", function () {
	const subject = this._obj
	const bounding = subject[0].getBoundingClientRect()
	const viewportHeight = Cypress.config("viewportHeight")
	const viewportWidth = Cypress.config("viewportWidth")

	const isVisible =
		bounding.top < viewportHeight && bounding.bottom > 0 && bounding.left < viewportWidth && bounding.right > 0

	this.assert(
		isVisible,
		"expected #{this} to be in the viewport",
		"expected #{this} not to be in the viewport",
		subject,
		isVisible
	)
})

// .should("be.fullyInViewport")
chai.Assertion.addMethod("fullyInViewport", function () {
	const subject = this._obj
	const bounding = subject[0].getBoundingClientRect()
	const viewportHeight = Cypress.config("viewportHeight")
	const viewportWidth = Cypress.config("viewportWidth")

	const isVisible =
		bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= viewportHeight && bounding.right <= viewportWidth

	this.assert(
		isVisible,
		"expected #{this} to be in the viewport",
		"expected #{this} not to be in the viewport",
		subject,
		isVisible
	)
})
