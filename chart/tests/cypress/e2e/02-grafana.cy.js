// Loads a dashboard and validates title
Cypress.Commands.add('loaddashboard', (name) => {
  cy.intercept('POST', '**/query*').as('apiQuery')
  cy.get('input[placeholder="Search for dashboards and folders"]').type(name)
  cy.get('a[title="' + name + '"]').click()
  cy.wait('@apiQuery', {timeout: 30000}).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
  })
  console.log('Loaded Dashboard for ' + name)
  cy.get('title').contains(name)
})

// Validates panel data should not be zero
Cypress.Commands.add('panelnotzero', (name) => {
  cy.get('[data-testid="data-testid Panel header ' + name + '"]')
    .contains(/^[1-9][0-9]*$/)
})

// Log in
before (function() {
  cy.visit(Cypress.env('grafana_url'))
  cy.get('input[name="user"]')
    .type('admin')
  cy.get('input[name="password"]')
    .type('prom-operator')
  cy.contains("Log in").click()
  cy.get('.page-dashboard').contains('Welcome', {timeout: 30000})
})

// Save cookies so we don't have to log in again
beforeEach(function () {
  cy.visit(`${Cypress.env('grafana_url')}/dashboards`)
})

describe('Validate Grafana Dashboards', {
  retries: {
    runMode: 4,
  }
}, () => {
  if (Cypress.env("check_datasource")) {
    it('Validate Cluster Policy Report Details Dashboard', () => {
      cy.loaddashboard('ClusterPolicyReport Details')
      cy.panelnotzero('Policy Pass Status')
      cy.panelnotzero('Policy Fail Status')
    })
    it('Validate Policy Report Details Dashboard', () => {
      cy.loaddashboard('PolicyReport Details')
      cy.panelnotzero('Policy Pass Status')
      cy.panelnotzero('Policy Fail Status')
    })
    it('Validate Policy Reports Dashboard', () => {
      cy.loaddashboard('PolicyReports')
      cy.panelnotzero('Failing ClusterPolicies')
  
    })
  }
})

// Clear cookies to force login again
after(() => {
  Cypress.session.clearCurrentSessionData
})