/// <reference types="Cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")
const { signPage } = require("../support/pages/signup.page")
const { firstName, lastName, phone, emailAdd, pass, repassword } = require('../fixtures/dados.json')
const cadastroPage = require("../support/pages/cadastro.page")
const { browsePage } = require("../support/pages/browse.page")
const { name, number, endereco, city, state, zipcode } = require("../fixtures/endereco.json")
const addressPage = require("../support/pages/address.page")
const { checkoutPage } = require("../support/pages/checkout.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    signPage.signUp('Sign Up')
    cadastroPage.cadastro(firstName, lastName, phone, emailAdd, pass, repassword)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', 'Maleski Daniella')
  })

  it('Deve fazer o checkout com sucesso', () => {
    cy.login(email, senha)
  })


  it('deve fazer login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', 'Maleski Daniella')
  })
})