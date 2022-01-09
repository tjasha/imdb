import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
import { Navigation } from '/cypress/integration/pages/Navigation';
const resultsPage = new ResultsPage();
const navigation = new Navigation();
const topic1 = 'Filming Locations'
const location = 'slovenia';

describe('Search for a title', () => {

    it('Search ' + location + ' within a topic ' + topic1, () => {
        navigation.navigateToAdvancedSearch();
        resultsPage.selectTopic(topic1, location, 0);
        resultsPage.advancedResultsAreShownFor(location)
    });


});