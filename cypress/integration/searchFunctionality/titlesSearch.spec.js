import { ResultsPage } from '/cypress/fixtures/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/fixtures/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/fixtures/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const searchedTitle = 'Matrix';
const originalTitle = 'La dolce vita';
const slovenianTitle = 'La Dolce Vita'

describe('Search for a title', () => {

    it('All suggestions include word ' + searchedTitle + 'in the title', () => {
        searchFieldPage.navigateToSearchCategory('Title');
        searchFieldPage.typeTextIntoSearchField(searchedTitle);
        suggestionsPage.checkThatSearchSuggestionsContainsQuery(searchedTitle, 8);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.mainMovieTitleIsShown(searchedTitle);
    });

    it('Search for title in different language work', () => {
        searchFieldPage.navigateToSearchCategory('Title');
        searchFieldPage.typeTextIntoSearchField(slovenianTitle);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.mainMovieTitleIsShown(slovenianTitle);
        resultsPage.originalTitleIsShown(originalTitle);
    });

});