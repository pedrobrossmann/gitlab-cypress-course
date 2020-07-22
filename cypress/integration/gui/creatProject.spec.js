/// <reference types="Cypress" />

const faker = require('faker')

describe('Projet', () =>{
    
    beforeEach(() => cy.login())
    
    it('Creat Project', () =>{
        const project ={
            name: `project-${faker.random.uuid()}`,
            descripition: faker.random.words(5)
        }

        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.descripition).should('be.visible')
    })
})