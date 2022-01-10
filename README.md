# imdb

#### Project is testing some of the search functionality cases on imdb.com page in Cypress. Test cases are logically structured into 7 spec files: 
- advancedSearch.spec.js
- companiesSearch.spec.js
- confirmSearch.spec.js
- navigation.spec.js
- searchActors.spec.js
- suggestions.spec.js
- titlesSearch.spec.js

#### Logic for all the tests is saved in 3 files that represents components of the page:
- ResultsPage.js
- SearchFieldPage.js
- SuggestionsPage.js

Project is structured in the way that code can be reused and clear to the tester what each test is testing. 

## How to run a project:
1. in command line navigate to a folder that you want to save a project in 
2. clone git repository ("git clone https://github.com/tjasha/imdb.git")
3. navigate to imdb (root) folder of the project ("cd imdb")
4. run command "npx cypress run"
   1. if you're ask to install cypress, answer with "y"

### Another option to run a project 
1. clone the project as before or in IDE
2. run "npx cypress open"
3. in cypress window create a project and exchange "projectId" value with your created project id in cypress.json
4. instead of only run command, you can run "npx cypress run --record --key <key_value>" (key value is created when project is created), to see test dashboard with all run tests and analytics 
