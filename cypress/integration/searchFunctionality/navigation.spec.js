import { SearchFieldPage } from '/cypress/integration/pages/SearchFieldPage';
import { ResultsPage } from '/cypress/integration/pages/ResultsPage';
const searchFieldPage = new SearchFieldPage();
const resultsPage = new ResultsPage();
const titles = 'Titles';
const episodes  = 'TV Episodes';
const celebs = 'Celebs';
const company = 'Companies';
const keywords = 'Keywords';
const advanced = 'Advanced Search';
const advancedUrl = '/search'


describe('Categories navigations', () => {

    it('Navigate to Titles search', () => {
        searchFieldPage.navigateToSearchCategory(titles);
        searchFieldPage.navigationIsSetTo(titles);
    });

    it('Navigate to TV Eposodes search', () => {
        searchFieldPage.navigateToSearchCategory(episodes);
        searchFieldPage.navigationIsSetTo(episodes);
    });

    it('Navigate to Celebs search', () => {
        searchFieldPage.navigateToSearchCategory(celebs);
        searchFieldPage.navigationIsSetTo(celebs);
    });

    it('Navigate to Companies search', () => {
        searchFieldPage.navigateToSearchCategory(company);
        searchFieldPage.navigationIsSetTo(company);
    });

    it('Navigate to Keywords search', () => {
        searchFieldPage.navigateToSearchCategory(keywords);
        searchFieldPage.navigationIsSetTo(keywords);
    });

    it('Navigate to Advanced Search search', () => {
        searchFieldPage.navigateToSearchCategory(advanced);
        resultsPage.urlIsCorrect(advancedUrl);
    });

});