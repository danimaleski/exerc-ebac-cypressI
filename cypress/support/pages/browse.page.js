/// <reference types="Cypress" />

export const browsePage = {
    
    productDetails:() => { return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
    
    },

    addToCart: () => {return cy.get('[data-testid="addToCart"]').click()

    }
}
