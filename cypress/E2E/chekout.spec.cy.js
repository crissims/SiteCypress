///<reference types="cypress" />
describe('Fluxo de compra', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');        
    });
    it('Realizar uma compra completa', () => {
 
        cy.get('.vtex-rich-text-0-x-wrapper--menuLoginIcon').click()  //clicando no botão de login
        cy.contains('Entrar com email e senha').click()  
        cy.get('[name="userEmail"]').type('ana.leal@globalsys.com.br')
        cy.get('.containerPassword > .undefined').type('Teste@reserva123') 
        cy.get('.sendButton').click()
        cy.get(':nth-child(2) > .rsv__header__nav__list__item').click() //criando na categoria feminina
        cy.get('a[href="/colecao-reversa/feminino-camisas"]').click() // entrando na coleção camisas
        cy.wait(30000)
        cy.get('a[href="/camisa-paisley-estrelas0083121/p?skuId=533092"]').click({waitForAnimations: false}) // clicando em um item
        cy.wait(30000) 
        cy.contains('ADICIONAR À SACOLA').click({ force: true }); // clicando no botão para adicionar ao carrinho
        cy.wait(6000)
        cy.get('.lojausereserva-minicart-2-x-openIconContainer').click() // clicando em finalizar a compra
        cy.wait(10000)
        cy.get(".minicart-footer__checkout-btn").click() // clicando no carrinho
        cy.get('#payment-group-creditCardPaymentGroup > .payment-group-item-text').click({force: true})
      
    });
});