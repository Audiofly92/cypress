describe('Date picker example', () => {
    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html')

        const now = new Date(2020, 6, 19).getTime();

        cy.clock(now)
    });

    it('Will select bootstrap date picker', () => {
        
        cy.get('.date')
            .click()
        cy.get('.datepicker ').within(()=>{

            cy.get('.datepicker-switch')
                .should('exist')
                .and('contain','June 2020')
            cy.contains('th','Today')
            .click()
        })
        // cy.get('.date input').click()
            // .then(($date)=>{
            //     const date = $date.text()
            //     cy.log(date)
            // })
    });
});