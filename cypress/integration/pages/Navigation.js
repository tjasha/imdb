export class Navigation {

    navigateToTitlesSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('Titles').click();
    }

    navigateToTVEpisodesSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('TV Episodes').click();
    }

    navigateToCelebsSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('Celebs').click();
    }

    navigateToCompaniesSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('Companies').click();
    }

    navigateToKeywordsSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('Keywords').click();
    }

    navigateToAdvancedSearch() {
        cy.get('.search-category-selector').click();
        cy.contains('Advanced Search').click();
    }
}