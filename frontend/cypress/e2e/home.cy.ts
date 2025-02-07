import { home } from "../support/e2e"

beforeEach(() => {
	// cy.intercept(/.*(next|google).*/i, { log: false })
	cy.intercept(/.*/, { log: false })
	cy.visit(home)
})

describe("viewport", () => {
	context("components fully in viewport", () => {
		const components = ["header", "hero"]
		components.forEach((component) => {
			it(`should fully contain ${component}`, () => {
				cy.getByData(component).should("be.fullyInViewport")
			})
		})
	})

	context("components at least partially in viewport", () => {
		const components = ["hero"]
		components.forEach((component) => {
			it(`should at least partially contain ${component}`, () => {
				cy.getByData(component).should("be.inViewport")
			})
		})
	})
})

context("header", () => {
	context("logo", () => {
		it("should be visible", () => {
			cy.getByData("header").findByData("logo").should("be.visible")
			cy.getByData("header").findByData("logo").should("be.fullyInViewport")
		})
		it("should redirect to home", () => {
			cy.getByData("header").findByData("logo").click()
			cy.url().should("eq", home)
		})
	})

	context("contact button", () => {
		it("should be visible", () => {
			cy.getByData("header").findByData("contact-link").should("be.visible")
			cy.getByData("header").findByData("contact-link").should("be.fullyInViewport")
		})

		it("should redirect to contact section", () => {
			cy.getByData("header").findByData("contact-link").eq(0).click()
			cy.url().should("include", "#contact")
		})
	})
})
