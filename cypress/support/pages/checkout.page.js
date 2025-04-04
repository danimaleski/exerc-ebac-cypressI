/// <reference types="Cypress" />


export const checkoutPage = {
    
    selectAddressOrContinueToPayment: () => { return cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click() 

    },

    completeCheckout: () => { return cy.get('[data-testid="completeCheckout"]').click() 
        
    }

}
