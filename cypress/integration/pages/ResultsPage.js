export class ResultsPage {
 /*   visit() {
        cy.visit('/');
    }
*/
/*

    typeTextIntoSearchField(text){
        cy.get('#suggestion-search')
            .type(text);
    }

    getSearchButton() {
        return cy.get('suggestion-search-button');
    }

    checkSearchSuggestionsThatContain(query, noOfSuggestions){
        cy.get('[data-testid="search-result--const"]')
            .should('be.visible')
            .and('have.length', noOfSuggestions)
            .each(($el, index, $lis) => {
                cy.wrap($el).should('contain.text', query);
            });
    }

    checkNoResultsErrorMessage(){
        cy.get('.ipc-error-message')
            .invoke('text')
            .should('equal', 'No results found.')
    }
*/

    searchedResult(query){
        cy.get('.findHeader')
            .invoke('text')
            .should('contain', 'Results for')
            .get('.findSearchTerm')
                .invoke('text')
                .should('equal', '"' + query + '"');
    }

    mainMovieTitleIsShown(suggestionText){
        cy.get('[data-testid="hero-title-block__title"]')
            .invoke('text')
            .should('contain', suggestionText);
    }

    originalTitleIsShown(originalTitle){
        cy.get('[data-testid="hero-title-block__original-title"]')
            .invoke('text')
            .should('contain', originalTitle);
    }

    actorIsShown(actorName){
        cy.get('.itemprop')
            .should('contain', actorName);
    }


/*    bothTitlesAreShown(originalTitle){///??????
        if (cy.find('[data-testid="hero-title-block__original-title"]').length>0){
          *//*  cy.find('[data-testid="hero-title-block__original-title"]'
            .invoke('text')
            .should('contain', originalTitle);*//*
            cy.log('true');
        }else{
        cy.log("meh");
        }
    }*/

/*
    choseXthSuggestion(x){
        cy.get('[data-testid="search-result--const"]')
            .eq(x).click();
    }

    seeAllResultsOptionIsShown(query){
        cy.get('[data-testid="search-result--link"]')
            .should('contain', query);
    }
*/



}