/// <reference types='Cypress' />  
describe('angular practice', () => {
    beforeEach(() => {
        const now = new Date(2020, 5, 3).getTime()
        cy.clock(now)
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    });
    it('selects the date', () => {
        cy.get('input[name="bday"]').type('1992-05-03')
        
    });
});