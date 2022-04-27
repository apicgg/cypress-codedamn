/// <reference types="cypress" />

describe('Demo Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    console.log(1)
    cy.visit('https://codedamn.com/login')
  })

  it('The forget password page loads', () => {
    console.log(2)
    cy.contains('Forgot your password').click({ force: true })
    // cy.debug()
    cy.log(3)
    console.log(3)
    cy.url().should('include', '/password-reset')
    cy.go('back')
  })
})
