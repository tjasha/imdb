export class SearchFieldPage {

    typeTextIntoSearchField(text){
        cy.get('#suggestion-search')
            .type(text);
    }

    getSearchButton() {
        return cy.get('suggestion-search-button');
    }

    navigateToSearchCategory(category){
        cy.get('.search-category-selector').contains(category).then (item1 => {
            item1.click();
        });
    }

    navigateToAdvancedSearchCategory(category){
        cy.get('.search-category-selector').click();
        cy.contains(category).click();
    }

    navigationIsSetTo(category){
        cy.get('.ipc-button__text')
            .should('contain', category);
    }
}