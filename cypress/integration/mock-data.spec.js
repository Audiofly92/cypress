/// <reference types='Cypress' />
Cypress.config('baseUrl', 'https://demo.realworld.io/');
describe('Testing mocked data for tags', () => {
	beforeEach(() => {
		cy.server();
		cy.route('GET', 'https://conduit.productionready.io/api/tags', 'fixture:tags.json').as('geTags');
		cy.route(
			'GET',
			'https://conduit.productionready.io/api/articles/feed?limit=10&offset=0',
			'{"articles":[],"articlesCount":0}'
		);
		cy
			.route('GET', 'https://conduit.productionready.io/api/articles?limit=10&offset=0', 'fixture:articles.json')
			.as('getArticles');
		cy.login();
	});

	it('Reads mocked tags', () => {
		cy.wait('@geTags');
		cy.get('@geTags').then((xhr) => {
			expect(xhr.status).to.eq(200);
			expect(xhr.response.body.tags[0]).to.contain('cypress');
		});
		cy.get('.tag-list > a').should('contain', 'cypress').and('have.length', 4);
	});

	it('Mocks articles', () => {
		cy.wait('@getArticles');
		cy.contains('Global Feed').click();
		cy.get('.btn').eq(0).should('contain', '3');
	});
});
