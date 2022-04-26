/// <reference types="cypress" />

describe('Empty Test', () => {
  it('We have correct page title', () => {
    cy.viewport(1280, 720)
    cy.visit('https://codedamn.com/')

    // cy.get('[data-testid=homepage-cta]').click()
  })
})
