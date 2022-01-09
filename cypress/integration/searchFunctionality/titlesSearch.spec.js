import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/integration/pages/SuggestionsPage';
import { Navigation } from '/cypress/integration/pages/Navigation';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const navigation = new Navigation();
const searchedTitle = 'Matrix';
const originalTitle = 'La dolce vita';
const slovenianTitle = 'La Dolce Vita'

describe('Search for a title', () => {

    it('All suggestions include word ' + searchedTitle + 'in the title', () => {
        navigation.navigateToTitlesSearch();
        searchFieldPage.typeTextIntoSearchField(searchedTitle);
        suggestionsPage.checkThatSearchSuggestionsContainsQuery(searchedTitle, 8);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.mainMovieTitleIsShown(searchedTitle);
    });

    it('Search for title in different language work', () => {
        navigation.navigateToTitlesSearch();
        searchFieldPage.typeTextIntoSearchField(slovenianTitle);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.mainMovieTitleIsShown(slovenianTitle);
        resultsPage.originalTitleIsShown(originalTitle);
    });

});