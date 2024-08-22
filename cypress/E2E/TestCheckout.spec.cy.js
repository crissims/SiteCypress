///<reference types="cypress" />

describe('Fluxo de compra', () => {
    beforeEach(() => {
        cy.visit('https://www.usereserva.com/');
        cy.wait(20000)

    });

    it('Fluxo de compra categoria FEMININO', () => {

        cy.comprarCategoriaFeminino();
        cy.selecionarCategoriaFeminina();
        cy.selecionarCamisaFeminina();

    })
});