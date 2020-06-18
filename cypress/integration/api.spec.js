describe('API Testing', () => {
    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')
    it('Get-read', () => {
        cy.request('GET','/employees').then((response)=>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
            expect(response).to.have.property('duration')
            expect(response.duration).to.be.lessThan(999)
        })

    });

    it('API', () => {
        
        cy.request('GET','/employees').as('getAPI')
        cy.get('@getAPI').then((response)=>{
            const respTest = response.body.data
            cy.wrap(respTest).each(($el,index,$list)=>{
                const name = $el.employee_name
                if (name === "Tiger Nixon") {
                    cy.log(`Employee ${name} is present in the data with index ${index}`)
                }
            })
        })
    });

    it('POST-create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create',item).as('postAPI')
            .its('body')
            .its('data')
            .should('include',{name:'test'})
        cy.get('@postAPI').then((response)=>{
            expect(response.body.data).to.have.property('salary','123')
        })
    });

    it('PUT-update', () => {
        const item ={"name":"raul"}
        cy.request({
            methold: 'PUT',
            url: '/update/1',
            body:item,
            failOnStatusCode:false
        })
        .its('status')
        .should('eq',405)
    });
});