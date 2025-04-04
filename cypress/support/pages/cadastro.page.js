/// <reference types="Cypress" />

class cadastroPage {

    get #firstName() { return cy.get('[data-testid="firstName"]') }

    get #lastName() { return cy.get('[data-testid="lastName"]') }

    get #phone() { return cy.get('[data-testid="phone"]') }

    get #emailAdd() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }

    get #pass() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }

    get #repassword() { return cy.get('[data-testid="repassword"]') }

    get #btnCreate() { return cy.get('[data-testid="create"]') }

    cadastro(firstName, lastName, phone, emailAdd, pass, repassword){
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phone.type(phone)
        this.#emailAdd.type(emailAdd)
        this.#pass.type(pass)
        this.#repassword.type(repassword)
        this.#btnCreate.click()
    }

}

module.exports = new cadastroPage();