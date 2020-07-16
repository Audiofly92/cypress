///<reference types='Cypress'/>

describe('Bank App', () => {
    beforeEach(() => {
        cy.loginBank('username','password')
        cy.get('table').eq(0).as('cashAcc')
    });

    it('Check that it logged in', () => {
        cy.get('#account_summary_tab')
        .should('be.visible')
        .and('have.class','active')
        cy.location('pathname').should('eq','/bank/account-summary.html')
    });

    it('Check the cash accounts savings balance', () => {
        cy.get('@cashAcc').within(()=>{
            cy.get('tbody > :nth-child(1) > :nth-child(3)')
            .should(($price)=>{
                const price =$price.text().trim()
                expect(price).to.eq('$1000')
            })
        })
    });

});
