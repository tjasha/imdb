import { ResultsPage } from '/cypress/fixtures/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/fixtures/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/fixtures/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const searchedQuery = 'test'

describe('Do different searches for ' + searchedQuery, () => {

    it('confirm search with search icon', () => {
        searchFieldPage.typeTextIntoSearchField(searchedQuery);
        cy.get('#suggestion-search-button').click();
        resultsPage.searchedResult(searchedQuery);
    });

    it('confirm search with Enter', () => {
        searchFieldPage.typeTextIntoSearchField(searchedQuery + '{enter}');
        resultsPage.searchedResult(searchedQuery);
    });

    it('Search for first suggestion', () => {
        searchFieldPage.typeTextIntoSearchField(searchedQuery);
        suggestionsPage.chooseXthSuggestion(0).click();
    });

    it('Search for All results', () => {
        searchFieldPage.typeTextIntoSearchField(searchedQuery);
        suggestionsPage.getAllResultsOption().click();
        resultsPage.searchedResult(searchedQuery);
    });

});
