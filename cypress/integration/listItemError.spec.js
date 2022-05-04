const URL = 'http://localhost:3000'
const fixtureFile = 'download.jpg';

describe('add new item errors', () => {
    it('missing fields', () => {
        cy.visit(URL);
        cy.get('a').contains('Login').click();
        cy.get('input').first().type('test')
        cy.get('input').eq(1).type('test');
        cy.get('div').contains('Login').click();

        cy.get('div').contains('Add new Item');
        cy.get('a').eq(5)
        .invoke('attr', 'href')
        .then(href => {
            cy.visit(URL + href);
        });


        cy.get('div').contains('Upload and image').attachFile(fixtureFile);
        cy.get('img').eq(5).click();
        cy.get('div').contains('Please fill out all items');
    })
})

