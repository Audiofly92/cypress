/// <reference types='Cypress' /> 

import Login from '../pageOjects/login'

describe('Page Object login spec', () => {
    const login = new Login ()
    it('Sign In', () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('raulbutabetfair@gmail.com')
        login.password().type('Mahomes03#')
        login.signInButton().should('be.visible').click()
        
    });
});