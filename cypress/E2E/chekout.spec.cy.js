///<reference types="cypress" />
describe('Fluxo de compra', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');        
    });
    it('Realizar uma compra completa', () => {
 
        cy.get('.vtex-rich-text-0-x-wrapper--menuLoginIcon').click()
        cy.contains('Entrar com email e senha').click()
        cy.get('[name="userEmail"]').type('ana.leal@globalsys.com.br')
        cy.get('.containerPassword > .undefined').type('Teste@reserva123')
        cy.get('.sendButton').click()
        cy.get(':nth-child(2) > .rsv__header__nav__list__item').click()
        cy.get('a[href="/colecao-reversa/feminino-camisas"]').click()
        cy.wait(30000)
        cy.contains('Camisa Sarja Cropped Color').click({waitForAnimations: false})
        cy.wait(30000)
        cy.get('.lojausereserva-add-to-cart-button-0-x-buttonText').click({ force: true }); 
        cy.wait(6000)
        cy.get('.lojausereserva-minicart-2-x-openIconContainer').click()
        cy.wait(10000)
        cy.get(".minicart-footer__checkout-btn").click()
        cy.get('#payment-group-creditCardPaymentGroup > .payment-group-item-text').click({force: true})
      
    });
});