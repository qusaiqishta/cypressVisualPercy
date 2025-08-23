import { retrieveBookingPO } from './pageObjects/retrieveBookingPO.js';

/**
 * Retrieves a booking using email address and order number
 * @param {string} emailAddress - The email address associated with the booking
 * @param {string} orderNumber - The order number/ID for the booking
 */
export function retrieveMyBooking(emailAddress, orderNumber) {
  watchRetrieveFlightOrderRequestDesk();
  cy.get(retrieveBookingPO.retrieveBooking_emailInput).type(emailAddress);
  cy.get(retrieveBookingPO.retrieveBooking_orderIdInput).type(orderNumber);
  cy.get(retrieveBookingPO.retrieveBooking_continueButton).last().click();
  cy.wait('@retrieveOrder').then((retrieveOrderResponse) => {
    expect(retrieveOrderResponse.response.statusCode).to.eq(200);
  })
  cy.get(retrieveBookingPO.BookingDetails).should('be.visible');
}

function watchRetrieveFlightOrderRequestDesk() {
    cy.intercept('GET', '/api/checkout/sale/number?number=U*').as('retrieveOrder');
}

export function correctDomStructure() {
  cy.window().then((win) => {
    win.document.querySelectorAll('p').forEach((p) => {
      if (p.querySelector('div')) {
        const div = win.document.createElement('div');
        for (let attr of p.attributes) {
          div.setAttribute(attr.name, attr.value);
        }
        while (p.firstChild) {
          div.appendChild(p.firstChild);
        }
        p.parentNode.replaceChild(div, p);
      }
    });
  });
}