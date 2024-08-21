///<reference types="cypress" />
describe('Fluxo de Remoção do carrinho', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');        
    });
    it('Adicionar e remover item do carrinho', () => {
 
        cy.get('.vtex-rich-text-0-x-wrapper--menuLoginIcon').click()  //clicando no botão de login
        cy.contains('Entrar com email e senha').click()  
        cy.get('[name="userEmail"]').type('ana.leal@globalsys.com.br')
        cy.get('.containerPassword > .undefined').type('Teste@reserva123') 
        cy.get('.sendButton').click()
        cy.get('a[href="/colecao-reserva/liqui-polos"]').click()
        cy.wait(20000)
        cy.get('a[href="/polo-piquet-work-tech0082832/p?skuId=516818"]').click()
        cy.contains('ADICIONAR À SACOLA').click()

    });
});