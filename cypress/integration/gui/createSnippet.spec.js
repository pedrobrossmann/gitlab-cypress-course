/// <reference types="Cypress" />

const faker = require('faker')

describe('Criação de snippet', () => {

beforeEach (() => cy.login())

const snippet = {
    title: faker.random.words(3), 
    description: faker.random.words(4),
    file: faker.random.words(15)
}   

    it('Successfully', () => {
        cy.gui_createSnippet(snippet)

        cy.get('.qa-snippet-title').should('contain', snippet.title)
    })
})