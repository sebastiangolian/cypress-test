/// <reference types='Cypress' />

const url = 'https://angular.realworld.io/'
const username = new Date().getTime()
const email = username + "@gmail.com"
const password = username

describe('angular.realworld.io', () => {
    it('should open', () => {
        cy.visit(url)
        cy.get('h1').should('contain', 'conduit')
    })

    it('should have links', () => {
        cy.get('.nav-link').should('contain', 'Home')
        cy.get('.nav-link').should('contain', 'Sign in')
        cy.get('.nav-link').should('contain', 'Sign up')
    })

    it('should registration', () => {
        cy.contains('Sign up').click() 
        cy.get(':nth-child(1) > .form-control').type(username)
        cy.get(':nth-child(2) > .form-control').type(email)
        cy.get(':nth-child(3) > .form-control').type(password)
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .nav-link').should('contain',username)
    })

    it('should login out', () => {
        cy.contains('Settings').click() 
        cy.get('.btn-outline-danger').click()
        cy.get(':nth-child(3) > .nav-link').should('contain','Sign up')
    })

    it('should login', () => {
        cy.contains('Sign in').click() 
        cy.get(':nth-child(2) > .form-control').type(email)
        cy.get(':nth-child(3) > .form-control').type(password)
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .nav-link').should('contain',username)
    })
})