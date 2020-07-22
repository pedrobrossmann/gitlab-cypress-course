/// <reference types="Cypress" />

import 'cypress-file-upload';

Cypress.Commands.add('login', () =>{
    cy.visit('users/sign_in')
    
    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'))
    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add('logout', () =>{
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project =>{
    cy.visit('/projects/new')
    
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})  

Cypress.Commands.add('gui_createIssue', issue =>{
    cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
    
    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()

})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
})

Cypress.Commands.add('gui_createGroup', group => {
    cy.get('.qa-groups-dropdown').click()
    cy.get('.qa-your-groups-link').click()
    cy.get('.btn-success').should('have.text', 'New group').click()
    cy.get('#group_name').type(group.name)
    cy.get('#group_description').type(group.description)
    cy.get('.btn-success').click()
})

Cypress.Commands.add('gui_createSnippet', snippet => {
    cy.get('.qa-new-menu-toggle').click()
    cy.get('.qa-global-new-snippet-link').click()
    cy.get('.qa-snippet-title').type(snippet.title)
    cy.get('.qa-issuable-form-description').type(snippet.description)
    cy.get('.ace_content').type(snippet.file)
    cy.get('.qa-create-snippet-button').click()
})