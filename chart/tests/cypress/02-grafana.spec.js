// Loads a dashboard and validates title
Cypress.Commands.add('loaddashboard', (name) => {
  cy.get('[data-testid*="Dashboard search item ' + name + '"]')
    .click()
  cy.get('title').contains(name)
})

// Validates panel data should not be zero
Cypress.Commands.add('panelnotzero', (name) => {
  cy.get('.panel-container[aria-label*="' + name + '"]')
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
  cy.get('.page-toolbar').contains('General', {timeout: 30000})
})

// Save cookies so we don't have to log in again
beforeEach(function () {
  cy.getCookies().then(cookies => {
    const namesOfCookies = cookies.map(cm => cm.name)
    Cypress.Cookies.preserveOnce(...namesOfCookies)
  })
  cy.visit(`${Cypress.env('grafana_url')}/dashboards`)
  
  cy.get('.pointer > button[id^="collapse-button-"]').invoke('attr', 'aria-expanded').then(($expanded) => {
    if ($expanded === 'false') {
      cy.get('.pointer > button[id^="collapse-button-"]').click({multiple: true})
    }
  })
})

describe('Validate Grafana Dashboards', {
  retries: {
    runMode: 4,
  }
}, () => {
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
    cy.panelnotzero('Failing Policies')
    cy.panelnotzero('Failing ClusterPolicies')
  })
})

// Clear cookies to force login again
after(function () {
  cy.clearCookies()
})