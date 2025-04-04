/// <reference types="Cypress" />

class addressPage {

    get btnAddress() { return cy.get('[data-testid="addNewAddress"] > .r-lrvibr') }

    get name() { return cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz') }

    get number() { return cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz') }

    get endereco() { return cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz') }

    get city() { return cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz') }

    get state() { return cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz') }

    get zipcode() { return cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz') }

    get btnSave() { return cy.get('[data-testid="save"]') }


    address(name, number, endereco, city, state, zipcode){
        this.btnAddress.click()
        this.name.type(name)
        this.number.type(number)
        this.endereco.type(endereco)
        this.city.type(city)
        this.state.type(state)
        this.zipcode.type(zipcode)
        this.btnSave.click()
    }

}

module.exports = new addressPage(); 