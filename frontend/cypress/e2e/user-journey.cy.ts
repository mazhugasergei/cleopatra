import { home } from "../support/e2e"

beforeEach(() => {
	// cy.intercept(/.*(next|google).*/i, { log: false })
	cy.intercept(/.*/, { log: false })
	cy.visit(home)
})

describe("user journey", () => {
	it("should visit the home page", () => {
		cy.visit(home)
	})

	const sections = ["about", "services", "contact"]

	sections.forEach((section) => {
		it(`should be able to navigate to the ${section} section`, () => {
			cy.getByData("header").findByData(`${section}-link`).click()
			cy.url().should("include", `#${section}`)
			cy.getByData(section).should("be.inViewport")
		})
	})
})
