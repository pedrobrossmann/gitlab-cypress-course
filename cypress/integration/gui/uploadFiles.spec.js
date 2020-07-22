/// <reference types="Cypress" />

describe('Fazer upload de arquivo', () => {
    it('Successfully one file', () =>{
        const fileInputElement = "#fileInput"
        const fixtureFile = 'example.json'
    
        cy.visit('https://dsheiko.github.io/react-html5-form')
        cy.get(fileInputElement).attachFile(fixtureFile)
    })

    it('Successfully three file', () =>{
        const fileInputElement = "#fileInput"
        
        const fixtureFile1 = 'example.json'
        const fixtureFile2 = 'example.jpg'
        const fixtureFile3 = 'example.xlsx'
        
        cy.visit('https://dsheiko.github.io/react-html5-form')
        cy.get(fileInputElement)
            .attachFile(fixtureFile1)
            .attachFile(fixtureFile2)
            .attachFile(fixtureFile3)
    })
})