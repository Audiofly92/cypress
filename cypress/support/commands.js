// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', () => {
	cy.visit('https://demo.realworld.io');
	cy.contains('Sign in').click();
	cy.get('input[type="email"]').type('raulbutabetfair@gmail.com');
	cy.get('input[type="password"]').type('Mahomes03#');
	cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginBank', (username, password) => {
	cy.visit('http://zero.webappsecurity.com/login.html');
	cy.get('#user_login').type(username);
	cy.get('#user_password').type(password);
	cy.contains('Sign in').click();
});
