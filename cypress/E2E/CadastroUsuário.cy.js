///<reference types="cypress" />
describe('Fluxo de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');        
    });
    it('Realizar um novo cadastro', () => {
 
        cy.get('.vtex-rich-text-0-x-wrapper--menuLoginIcon').click()  //clicando no botão de login
        cy.contains('CADASTRE-SE').click()

    });
});