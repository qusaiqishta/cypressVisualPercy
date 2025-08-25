import { retrieveMyBooking, correctDomStructure, visitCommandIntercept } from '../support/helpers';

describe('Booking Details Page Visual Testing - Flight - Percy', () => {

  beforeEach(() => {
    visitCommandIntercept();
    cy.visit('/en/myaccount/retrieve-booking?ncr=1');
  
  });

  it('content comparison with screenshot of same order(content)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('TC:verify content comparison', { 
      widths: [1920], 
      minHeight: 720
    });
  });

  it('content comparison with screenshot of same order(layout + content)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    cy.get('[data-testid="paymentName"]').invoke('remove');

    // Take a Percy snapshot of the entire page
    cy.percySnapshot('TC:verify content comparison -- CC details removed', { 
      widths: [1920], 
      minHeight: 720
    });
  });

  it('layout comparison with screenshot (any booking with exclusions)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    cy.wait(3000);
    correctDomStructure();
    // cy.get('[data-testid="need-help-container"] > div ~ div').invoke('remove')
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('TC:layout comparison with exclusions', { 
      widths: [1920], 
      minHeight: 720
    });
  });

  it('layout comparison with figma- outdated figma design (present booking with no exclusions but change in figma design)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('layout comparison with figma- outdated figma design', { 
      widths: [1440], 
      minHeight: 720
    });
  });

  it.skip('layout comparison with figma-valid design (present booking with no exclusions)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('layout comparison with figma - present booking', { 
      widths: [1920], 
      minHeight: 720
    });
  });

});
