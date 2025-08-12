describe('Almosafer Signin Page Visual Testing', () => {
  beforeEach(() => {
    // Handle any uncaught exceptions from the page before visiting
    cy.on('uncaught:exception', (err, runnable) => {
      // Ignore Google Tag Manager and other external script errors
      if (err.message.includes('gtm') || 
          err.message.includes('render') || 
          err.message.includes('Cannot read properties of undefined')) {
        return false // Don't fail the test
      }
      return true // Fail the test for other errors
    })

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