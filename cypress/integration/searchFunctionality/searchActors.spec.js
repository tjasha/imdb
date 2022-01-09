import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/integration/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const actorName = 'Joan';
const originalTitle = 'La Dolce Vita';
const slovenianTitle = 'La Dolce Vita'
const englishTitle = 'Big bang theory';

describe('Searches for a celebrities', () => {

    it('Search title ' + )


    it('All suggestions include word ' + actorName + ' and actress in the title', () => {
        searchFieldPage.typeTextIntoSearchField(actorName);
        suggestionsPage.checkThatSearchSuggestionsContainsQueryAndActorActress(actorName, 8);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.actorIsShown(actorName);
    });



});