
describe('Prometheus Targets', {
  // Wait up to 2 minutes (12 sec x 10 attempts) for target to be shown before failing
  retries: {
    runMode: 9,
  }
}, () => {
    it('Validate metrics are scraped', () => {
      cy.visit(`${Cypress.env('prometheus_url')}/targets`)
    })
})