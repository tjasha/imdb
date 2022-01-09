import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { SuggestionsPage } from '/cypress/integration/pages/SuggestionsPage';
const searchFieldPage = new SearchFieldPage();
const suggestionsPage = new SuggestionsPage();
const resultsPage = new ResultsPage();
const searchedCompany = 'Werner Brothers';

describe('Search for a title', () => {

    it('Company ' + searchedCompany + ' is shown as first in results', () => {
        searchFieldPage.navigateToSearchCategory('Companies');
        searchFieldPage.typeTextIntoSearchField(searchedCompany + '{enter}');
        resultsPage.checkCompanyResult(searchedCompany);
        resultsPage.firstResultIsMatching(searchedCompany);
    });

});