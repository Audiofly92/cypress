import {LogIn} from '../pageOjects/components/LogIn'
describe('My page object test', () => {
    const login = new LogIn ()
    
    it('Will log in', () => {
        login.visitPage()
        login.login('username','password')
    });
});