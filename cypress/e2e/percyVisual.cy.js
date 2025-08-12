describe('Almosafer Signin Page Visual Testing', () => {
  beforeEach(() => {
    // Visit the signin page before each test
    cy.visit('/en/signin?ncr=1')
    
    // Wait for the page to load completely
    cy.get('body').should('be.visible')
  })

  it('should capture visual snapshot of the signin page', () => {
    // Wait for any dynamic content to load
    cy.wait(2000)
    
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('Almosafer Signin Page - Full Page')
  })
})