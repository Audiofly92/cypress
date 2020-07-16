//  class LogIn {
//     visitPage() {
//         return cy.visit('http://zero.webappsecurity.com/login.html')
//     }

//     login(username,password) {
//         cy.get('#user_login').type(username)
//         cy.get('#user_password').type(password)
//         cy.contains('Sign in').click()
//     }
// }
// export default LogIn
export class LogIn {
    visitPage() {
        cy.visit('http://zero.webappsecurity.com/login.html')
    }

    login(username,password) {
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.contains('Sign in').click()
    }
}