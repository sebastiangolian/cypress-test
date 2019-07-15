/// <reference types='Cypress' />

describe('google.com', () => {
    it('should open', () => {
        cy.visit('www.google.com')
    })

    it('should search "polska"', () => {
        cy.get('input[name="q"]').type('polska{enter}').should('have.value', 'polska')
        cy.get('#rso').should('contain', 'Wikipedia')
    })

    it('should search "polska" by keyboard', () => {
        cy.get('.gLFyf').clear()
        cy.get('.MiYK0e').click()
        cy
            .get('#K80').click()    //P
            .get("#K79").click()    //O
            .get("#K76").click()    //L
            .get("#K83").click()    //S
            .get("#K75").click()    //K
            .get("#K65").click()    //A
            .get("#K16").click()    //ENTER
        cy.get('#rso').should('contain', 'Wikipedia')
    })

    
})