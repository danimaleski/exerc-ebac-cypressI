/// <reference types="Cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    openSearchProduct(){
        cy.get('[data-testid="search-products"]').click()
    },

    toOrder: () => {
        cy.get('[href="/Tab/Order"]').click()
    },

    cartShopping: () => {
        cy.get('[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
    }


}