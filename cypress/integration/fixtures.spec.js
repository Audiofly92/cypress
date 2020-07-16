/// <reference types='Cypress' />

describe('Fixtures testing', () => {
	beforeEach(function() {
		cy.visit('https://react-redux.realworld.io/#/login');
		cy.fixture('userLogin').as('user');
	});

	it('Sign in', function() {
		cy.get('input[type="email"]').type(this.user.email);
		cy.get('input[type="password"]').type(this.user.password);
		cy.get('.btn').contains('Sign in').should('be.visible').click();
	});
});

describe('Fixtures testing', () => {
	beforeEach(function() {
		cy.visit('https://react-redux.realworld.io/#/login');
		cy.fixture('userLogin').then((user) => {
			cy.get('input[type="email"]').type(user.email);
			cy.get('input[type="password"]').type(user.password);
			cy.log(`The id id is ${user.id}`);
			cy.get('.btn').contains('Sign in').should('be.visible').click();
		});
	});

	it('Check x thing ', function() {
		cy.get('.article-preview').should('contain', 'No articles are here... yet.');
	});
});

describe('Cypress github fixtures example cases', () => {
	context('before each test using closures variables', () => {
		let resedinta;
		let city;
		let country;
		beforeEach(() => {
			cy.fixture('location').then((loc) => {
				city = loc.oras;
				country = loc.tara;
			});
			cy.fixture('city').then((c) => {
				resedinta = c;
			});
		});

		it('has loaded fixtures', () => {
			expect(city).to.contain('Deva');
			expect(country).to.deep.equal('Romania');
			expect({ resedinta }).to.deep.equal({
				resedinta: { name: 'Cluj-Napoca' }
			});
		});
	});
});

describe.only('This context example', () => {
	beforeEach(function() {
		cy.fixture('location').then((loc) => {
			this.loc = loc;
		});
	});

	it('Will pass the object value', function() {
		expect(this.loc.oras).to.equal('Deva');
		expect(this.loc.tara).to.equal('Romania');
	});
});
