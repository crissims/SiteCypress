

Cypress.Commands.add('comprarCategoriaFeminino', () => {
    cy.get('header > nav')
        .click({ force: true })
    cy.get('ul > div')
        .eq(1)
        .click({ force: true }).click()
        .then(() => {
            cy.get(':nth-child(2) > .rsv__header__nav__list__item').click()
            //.contains('a[href="/reversa"]')
            //.and('contain', 'FEMININO')
            //.invoke('removeAttr', 'target', 'dropdown', 'visibility:hidden')
            //.click();
        })





});

Cypress.Commands.add('selecionarCategoriaFeminina', () => {
    cy.get('div > a')
    cy.wait(5000)
    cy.get('a[href="/colecao-reversa/feminino-camisas"]').eq(0)
        .click();

});

//Cypress.Commands.add('selecionarCamisaFeminina', () => {
//cy.get('div[id="gallery-layout-container"]')

//.click({ force: true }).click()
//cy.get('div > section')
//cy.get('a[href="/camisa-paisley-estrelas0083121/p?skuId=533092"]').eq(0)
//.click();

//})