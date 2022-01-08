describe('Navigate to different searches', () => {

    it('navigate to Titles search', () => {
        cy.get('.search-category-selector').click();
        cy.contains('Titles').click();
    });

    it('navigate to TV Eposodes search', () => {
        cy.get('.search-category-selector').click();
        cy.contains('TV Episodes').click();
    });

    it('navigate to Celebs search', () => {
        cy.get('.search-category-selector').click();
        //cy.get('#iconContext-people').click();
        cy.contains('Celebs').click();
    });

    it('navigate to Companies search', () => {
        cy.get('.search-category-selector').click();
        cy.contains('Companies').click();
    });

    it('navigate to Keywords search', () => {
        cy.get('.search-category-selector').click();
        cy.contains('Keywords').click();
    });

    it('navigate to Advanced search', () => {
        cy.get('.search-category-selector').click();
        cy.contains('Advanced Search').click();
    });
});