import { ResultsPage } from '/cypress/fixtures/pages/ResultsPage';
const resultsPage = new ResultsPage();
const date = '01-01'
const filter = 'oscar_nominees'
const topic1 = 'Filming Locations';
const topic2 = 'Trivia';
const location = 'slovenia';
const trivia = 'Snow White';

describe('Search for a title', () => {

    it('Search people born on ' + date + ' with ' + filter, () => {
        cy.visit('/search');
        resultsPage.navigateToAdvancedNameSearch();
        resultsPage.insertBirthday(date);
        resultsPage.checkCategory(filter);
        resultsPage.submitSearch();
        resultsPage.advancedResultsAreShownFor(date);
    });

    it('Search ' + location + ' within a topic ' + topic1, () => {
        cy.visit('/search');
        resultsPage.selectTopic(topic1, location, 0);
        resultsPage.advancedResultsAreShownFor(location)
    });

    it('Search ' + trivia + ' within a topic ' + topic2, () => {
        cy.visit('/search');
        resultsPage.selectTopic(topic2, trivia, 1);
        resultsPage.advancedResultsAreShownFor(trivia);
    });

});