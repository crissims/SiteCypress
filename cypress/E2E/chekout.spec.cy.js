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
        cy.contains('Blusas').click()
        cy.wait(20000)
        cy.contains('Blusa Tricot Estrelas').click({waitForAnimations: false})
        cy.wait(20000)
        cy.contains('ADICIONAR À SACOLA').click({force: true})
        cy.wait(6000)
        cy.get('.lojausereserva-minicart-2-x-openIconContainer').click()
        cy.wait(9000)
        cy.get(".minicart-footer__checkout-btn").click()
        /*
        cy.get('#client-first-name').type('Teste')
        cy.get('#client-last-name').type('ana')
        cy.get('#client-document').type('51957527536')
        cy.get('#client-phone').type('8499408-2859')
        cy.get('#client-birthday').type('06041995')
        cy.get('#go-to-shipping').click()
        */
        cy.get('#payment-group-creditCardPaymentGroup > .payment-group-item-text').click({force: true})
      
    });
});