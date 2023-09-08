
describe('Prometheus Targets', {
  // Wait up to 2 minutes (4 sec x 30 attempts) for target to be shown before failing
  retries: {
    runMode: 29,
  }
}, () => {
    it('Validate metrics are scraped', () => {
      cy.visit(`${Cypress.env('prometheus_url')}/targets`)
      cy.get(`button:contains("serviceMonitor/${Cypress.env('reporter_ns')}")`)
        .click({force: true})
      cy.get(`a[href*="serviceMonitor/${Cypress.env('reporter_ns')}"]`)
        .should('be.visible')
        .and('contain', '(1/1 up)')
    })
})