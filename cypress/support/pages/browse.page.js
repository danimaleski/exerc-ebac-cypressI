/// <reference types="Cypress" />

export const browsePage = {
    
    productDetails:() => { 
        return cy.get(':nth-child(1) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    },

    addToCart: () => {
        return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > [data-testid="addToCart"] > .css-146c3p1').click()
    },

    deleteIten: () => {
        return cy.get('[data-testid="remove"] > .css-146c3p1').click()
    },

    addItem: () => {
        return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > [style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > :nth-child(2) > .r-1awozwy > [style="margin-left: 15px;"] > [style="flex-direction: row; margin-top: 10px;"] > :nth-child(1) > [style="flex-direction: row; align-items: center;"] > [data-testid="addItem"] > .css-146c3p1').click()
    }
}
