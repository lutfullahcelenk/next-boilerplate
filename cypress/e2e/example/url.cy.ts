/// <reference types="cypress" />

describe("Dummy test", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Url must be /", () => {
		cy.url().should("eq", "http://localhost:3000/");
	});
});

export {};
