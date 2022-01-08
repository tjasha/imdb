export class SearchFieldPage {

    typeTextIntoSearchField(text){
        cy.get('#suggestion-search')
            .type(text);
    }

    getSearchButton() {
        return cy.get('suggestion-search-button');
    }
}