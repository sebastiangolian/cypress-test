/// <reference types="Cypress" />

describe("google.com", () => {
    it("should open onet.pl", () => {
        cy.visit("www.onet.pl")
    })
})