///<reference types="cypress" />

// Verifica se o login foi realizado com sucesso
describe('Fluxo de compra', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');        
    });
    it('logando com um usuario', () => {
   
        cy.get('.vtex-flex-layout-0-x-flexRow--vtex-login-btn').click()
        cy.contains('Entrar com email e senha').click()
        cy.get('[name="userEmail"]').type('ana.leal@globalsys.com.br')
        cy.get('.containerPassword > .undefined').type('Teste@reserva123')
        cy.get('.sendButton').click()
    
    });
    
    // Verifica se a mensagem de erro é exibida
    it('tentando logar com informações invalidas', () => {
    
     
        cy.get('.vtex-flex-layout-0-x-flexRow--vtex-login-btn').click()
        cy.contains('Entrar com email e senha').click();
        cy.get('[name="userEmail"]').type('ana.leal@globalsys.com.br');
        cy.get('.containerPassword > .undefined').type('Teste@reserva1');
        cy.get('.sendButton').click();
        cy.contains('Atenção! E-mail e/ou senha errada').should('be.visible');

        
    });
});