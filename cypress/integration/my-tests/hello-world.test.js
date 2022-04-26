/// <reference types="cypress" />

describe('Empty Test', () => {
  it('The webpage loads', () => {
    // cy.get('[data-testid=homepage-cta]').click()
    cy.visit('https://codedamn.com/login')
  })

  it('The sign in page loads', () => {
    cy.viewport(1280, 720)
    // cy.get('.m-auto > .font-semibold').should('exist')
    cy.contains('Forgot your password').click({ force: true })
    cy.url().should('include', '/password-reset')
    cy.go('back')
  })
})
