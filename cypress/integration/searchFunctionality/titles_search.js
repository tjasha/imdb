import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/integration/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const searchedTitle = 'Matrix';
const originalTitle = 'La Dolce Vita';
const slovenianTitle = 'La Dolce Vita'
const englishTitle = 'Big bang theory';

describe('Search for a title', () => {

    it('All suggestions include word ' + searchedTitle + 'in the title', () => {
        searchFieldPage.typeTextIntoSearchField(searchedTitle);
        homePage.checkThatSearchSuggestionsContainsQuery(searchedTitle);
        homePage.choseXthSuggestion(0);
        homePage.correctSuggestionOpensMovie(searchedTitle);
    });

    it('Search for title in different language work', () => {
        searchFieldPage.typeTextIntoSearchField(slovenianTitle);
        homePage.choseXthSuggestion(0);
        //homePage.correctSuggestionOpensMovie(slovenianTitle);
        //homePage.correctMovieTitleIsShown(englishTitle)
        homePage.mainMovieTitleIsShown(slovenianTitle);
        homePage.originalTitleIsShown(englishTitle);
    });

});