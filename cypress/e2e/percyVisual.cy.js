import { retrieveMyBooking, correctDomStructure } from '../support/helpers';

describe('Booking Details Page Visual Testing - Flight - Percy', () => {

  beforeEach(() => {
    // Intercept external scripts and analytics to prevent them from affecting visit command
    cy.intercept('GET', 'https://bat.bing.com/bat.js', { statusCode: 204 });
    cy.intercept('GET', 'https://connect.facebook.net/en_US/fbevents.js', { statusCode: 204 });
    cy.intercept('GET', 'https://s.yimg.com/wi/ytc.js', { statusCode: 204 });
    cy.intercept('GET', 'https://analytics.tiktok.com/i18n/pixel/events.js*', { statusCode: 204 });
    cy.intercept('GET', 'https://wa.onelink.me/v1/onelink', { statusCode: 204 });
    cy.intercept('GET', 'https://banner.appsflyer.com/sb/**', { statusCode: 204 });
    cy.intercept('GET', 'https://www.googletagmanager.com/gtm.js*', { statusCode: 204 });
    cy.intercept('GET', 'https://www.google.com/recaptcha/enterprise/webworker.js*', { statusCode: 204 });
    cy.intercept('GET', 'https://www.google.com/recaptcha/enterprise/pat*', { statusCode: 204 });
    cy.intercept('POST', 'https://www.google.com/recaptcha/enterprise/pat*', { statusCode: 204 });
    cy.intercept('GET', 'https://td.doubleclick.net/td/rul/**', { statusCode: 204 });
    cy.intercept('POST', 'https://wa.appsflyer.com/events*', { statusCode: 204 });

    cy.visit('/en/myaccount/retrieve-booking?ncr=1');
  
  });

  //use same figma snapshot for the first two

  it('layout comparison with figma-valid design (present booking with no exclusions)', () => {
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

  it('layout comparison with figma (past booking with exclusions)', () => {
    const currentEmail = 'autocypress@mailinator.com';
    const currentSaleId = 'U2508120027450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('layout comparison with figma - past booking', { 
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
      widths: [1920], 
      minHeight: 720
    });
  });

  it('content comparison with screenshot of same order(layout + content)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    // Take a Percy snapshot of the entire page
    cy.percySnapshot('baseline-layout-and-content', { 
      widths: [1920], 
      minHeight: 720
    });
  });
  it('content comparison with screenshot of same order(layout + content) => negative (change the html)', () => {
    const currentEmail = 'Qusai.Qishta@almosafer.com';
    const currentSaleId = 'U2508210148450';
    retrieveMyBooking(currentEmail, currentSaleId);
    correctDomStructure();
    cy.get('[data-testid="paymentName"]').invoke('remove')

    // Take a Percy snapshot of the entire page
    cy.percySnapshot('baseline-layout-and-content - negative', { 
      widths: [1920], 
      minHeight: 720
    });
  });
});
