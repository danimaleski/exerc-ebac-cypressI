/// <reference types="Cypress" />

const { email, senha } = require('../fixtures/data.json')
const { browsePage } = require('../support/pages/browse.page')
const { homePage } = require('../support/pages/home.page')
const loginPage = require('../support/pages/login.page')

describe('Carrinho de Compras', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit("/")
    })
  
    it('Deve adicionar item ao carrinho com sucesso', () => {
        cy.intercept('PUT', '**/public/updateCart/*', {
            statusCode: 200,
            body: {
                message: "cart updated",
                success: true,
        }
      }).as('adicionarItem')

        homePage.openMenu('Account')
        loginPage.login(email, senha)
        homePage.openMenu('Browse')
        //homePage.openSearchProduct()
        browsePage.productDetails()
        browsePage.addToCart()
        
    })

    it('Deve remover item do carrinho com sucesso', () => {
        cy.intercept('PUT', '**/public/updateCart/*', {
            statusCode: 200,
            body: {
                message: "cart updated",
                success: true,
              }
          }).as('removerItem')
        
        
        homePage.openMenu('Account')
        loginPage.login(email, senha)
        homePage.openMenu('Browse')
        //homePage.openSearchProduct()
        browsePage.productDetails()
        browsePage.addToCart()
        browsePage.deleteIten()

    })

    it('Deve atualizar quantidade de item no carrinho', () => {
        cy.intercept('PUT', '**/public/updateCart/*', {
            statusCode: 200,
            body: {
                error: "cart updated",
                success: true,
              }
          }).as('atualizarQuantidade')
        
        homePage.openMenu('Account')
        loginPage.login(email, senha)  
        homePage.openMenu('Browse')
        //homePage.openSearchProduct()
        browsePage.productDetails()
        browsePage.addToCart()
        browsePage.addItem()

    })
  
    
  
   
  })