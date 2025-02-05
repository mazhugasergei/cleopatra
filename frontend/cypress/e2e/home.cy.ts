const url = "http://localhost"

describe("home page", () => {
	beforeEach(() => {
		cy.visit(url)
	})

	it("should have hero heading", () => {
		cy.getByData("hero-heading").contains("Dont just get it. Drive it.").should("be.visible")
	})

	it("should have hero image", () => {
		cy.getByData("hero-image").should("be.visible")
	})
})
