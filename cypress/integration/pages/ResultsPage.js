export class ResultsPage {

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

    firstResultIsMatching(company){
        cy.get('.result_text')
            .eq(0)
            .should('contain', company);
    }

    checkCompanyResult(query){
        cy.get('.findHeader')
            .invoke('text')
            .should('contain', 'results for')
            .get('.findSearchTerm')
                .invoke('text')
                .should('equal', '"' + query + '"');
    }

// advanced search

    selectTopic(topic, value, order){
        cy.get('.ipl-select__input').eq(order).select(topic);
        cy.get('.ipl-input__input').eq(order).type(value + '{enter}');
    }

    advancedResultsAreShownFor(value){
        cy.get('.header')
            .should('contain', value);
    }

}