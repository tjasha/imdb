import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/integration/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const keyWord = 'Matrix';
const slovenianMovie = 'Chefurs Raus';
const unexisted = 'nhujuiji';

describe('Suggestions section tests', () => {

    it('There is 8 suggestions for query ' + keyWord, () => {
        searchFieldPage.typeTextIntoSearchField(keyWord);+
        suggestionsPage.checkThatSearchSuggestionsContainsQuery(keyWord, 8);
        suggestionsPage.seeAllResultsOptionIsShown(keyWord);
    });

    it('There is 1 suggestions for query ' + slovenianMovie, () => {
        searchFieldPage.typeTextIntoSearchField(slovenianMovie);
        suggestionsPage.checkThatSearchSuggestionsContainsQuery(slovenianMovie, 1);
        suggestionsPage.seeAllResultsOptionIsShown(slovenianMovie);
    });

    it('There is "No results found" message', () => {
        searchFieldPage.typeTextIntoSearchField(unexisted);
        suggestionsPage.checkNoResultsErrorMessage();
    });

});