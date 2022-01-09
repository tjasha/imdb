import { ResultsPage } from '/cypress/fixtures/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/fixtures/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/fixtures/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const actorName = 'Joan';

describe('Searches for a celebrities', () => {

    it('All suggestions include word ' + actorName + ' and actress in the title', () => {
        searchFieldPage.typeTextIntoSearchField(actorName);
        suggestionsPage.checkThatSearchSuggestionsContainsQueryAndActorActress(actorName, 8);
        suggestionsPage.choseXthSuggestion(0);
        resultsPage.actorIsShown(actorName);
    });
});