/// <reference types="Cypress" />

const faker = require('faker')

beforeEach(() => cy.login())

describe('Criar grupo', () => {
    
    const group = {
        name: faker.random.uuid(),
        description: faker.random.words(5) 
    }
    
    it('Sucesssfully', () =>{
        cy.gui_createGroup(group)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${group.name}`)
        cy.get('.home-panel-title').should('contain', group.name)

    })    
})