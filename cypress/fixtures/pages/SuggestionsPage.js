export class SuggestionsPage {

    checkThatSearchSuggestionsContainsQuery(query, noOfSuggestions){
        cy.get('[data-testid="search-result--const"]')
            .should('be.visible')
            .and('have.length', noOfSuggestions)
            .each(($el, index, $lis) => {
                cy.wrap($el).should('contain.text', query);
            });
    }

    checkThatSearchSuggestionsContainsQueryAndActorActress(query, noOfSuggestions){
        cy.get('[data-testid="search-result--const"]')
            .should('be.visible')
            .and('have.length', noOfSuggestions)
            .each(($el, index, $lis) => {
                cy.wrap($el)
                    .should('contain', query)
                    .and('contain', 'Actress');
            });
    }

    checkNoResultsErrorMessage(){
        cy.get('.ipc-error-message')
            .invoke('text')
            .should('equal', 'No results found.')
    }

    chooseXthSuggestion(x){
        return cy.get('[data-testid="search-result--const"]')
            .eq(x);
    }

    choseXthSuggestion(x){
        cy.get('[data-testid="search-result--const"]')
            .eq(x).click();
    }

    seeAllResultsOptionIsShown(query){
        cy.get('[data-testid="search-result--link"]')
            .should('contain', query);
    }

    getAllResultsOption(){
        return cy.get('[data-testid="search-result--link"]');
    }

}