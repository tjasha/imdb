export class ResultsPage {

    urlIsCorrect(url){
        cy.url().should('include', url);
    }

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

    navigateToAdvancedNameSearch() {
       cy.get('div:nth-child(2) > div:nth-child(2) > a')
         .should('have.attr', 'href').and('include', '/search/name')
         .then((href) => {
           cy.visit(href)
         })
    }

    insertBirthday(date){
        cy.get('[name="birth_monthday"]')
            .type(date);
    }

    checkCategory(category){
        cy.get('[type="checkbox"]')
            .check(category);
    }

    submitSearch(){
        cy.get('.primary')
            .click();
    }

}