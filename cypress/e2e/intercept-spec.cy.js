//note: cy.request == perform requests at the network level. Useful when the application under test has a public API.

// cy.intercept == does not make a request, but rather listens to requests that occur on the network layer.  Is to monitor all network traffic, not just request. 

/* Mocking APIs helps in situations where we only have the front-end of the application or we are dependant on third-party APIs. Mocking enables one to decouple the back-end from the front-end which results in faster execution of tests. In cypress, we can mock any XHR (XML HTTP Request) using cy.intercept().*/

/*  Task: =====================

We will intercept the tags requests and instead of the original list of Tags, we will pass two completely new tags – cypress, selenium, and verify them in the UI.

 We will intercept the Article Feed request and instead of the original list of articles, we will pass just one article with the changed username, description, and the number of likes and then verify all of them in UI
*/
describe('Api Mocking testing', () => {
    beforeEach(() => {
       
        // how to access fixtures 
        cy.intercept('GET','**/tags',{fixture:'tags.json'})
        cy.intercept('GET','**/articles',{fixture:'articleFeed.json'})
        cy.visit('https://angular.realworld.io/')
    })

    it('Moc the Tags from the API response and then validate on UI', () => {
        cy.get('.tag-list', {timeout: 10000}).should('contain','cypress').and('contain','selenium')
    })
    // note: sing-up to be able to click the button and perform the test correctly

    it('Mock the Article feed from the API response and then validate on UI', function() {
        cy.get('app-favorite-button.pull-xs-right').contains('10')
    cy.get('.author').contains('testersdock')
    cy.get('.preview-link > p').contains('This is a test description')

    })
})