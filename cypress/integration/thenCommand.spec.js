/// <reference types='Cypress' />  

describe('Testing  case ', () => {

    before(() => {
        cy.login('raulbutabetfair@gmail.com','Mahomes03#')
    });
    it('is logged it', () => {
        cy.get('.navbar-nav.pull-xs-right > li:nth-child(4)').as('userID')
        cy.get('@userID').then(($user)=>{
            const user =$user.text()
            expect(user).to.contain('raulbuta92')
        })
        cy.get('.article-preview')
        .text()
        .should('contain','No articles are here')
        cy.get('@userID')
        .find('a')
        .attribute('href')
        .should('eq','#@raulbuta92')
    });

    it('iterate through tag list and choose cars', () => {
        cy.get('.tag-list a').each(($el,index,$list)=> {
            const tag = $el.text()

             if (tag.includes('cars')) {
                 cy.wrap($el).click()
                 cy.log(index)
            }
            
            
            // if (index === 14) {
            //     expect(tag).to.contain('cars')
            // }
        })
        
    });

});