/// <reference types='Cypress' />
describe('', () => {
	beforeEach(() => {
		cy.login();
	});

	it('checks the testing library', () => {
		cy.findByText('Global Feed').click();
	});
});
