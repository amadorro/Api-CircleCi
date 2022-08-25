

describe('Api- Testing', () => {
  beforeEach(function() {
    // from the end point 
    cy.request('GET','https://reqres.in/api/users?page=2').as('api')
  })

  it('GET - Body length', function () { 
  cy.get('@api').its('body').its('data').should('have.length',6)
  })

  it('GET - status', function () { 
    cy.get('@api').its('status').should('eq',200)
    })
    it('GET - Header content', function () { 
      cy.get('@api').its('headers').its('cache-control').should('contain','max-age=14400')
      
     })
      it('Verify body', () => {
        const data2 =  [
          {
              "id": 7,
              "email": "michael.lawson@reqres.in",
              "first_name": "Michael",
              "last_name": "Lawson",
              "avatar": "https://reqres.in/img/faces/7-image.jpg"
          },
          {
              "id": 8,
              "email": "lindsay.ferguson@reqres.in",
              "first_name": "Lindsay",
              "last_name": "Ferguson",
              "avatar": "https://reqres.in/img/faces/8-image.jpg"
          },
          {
              "id": 9,
              "email": "tobias.funke@reqres.in",
              "first_name": "Tobias",
              "last_name": "Funke",
              "avatar": "https://reqres.in/img/faces/9-image.jpg"
          },
          {
              "id": 10,
              "email": "byron.fields@reqres.in",
              "first_name": "Byron",
              "last_name": "Fields",
              "avatar": "https://reqres.in/img/faces/10-image.jpg"
          },
          {
              "id": 11,
              "email": "george.edwards@reqres.in",
              "first_name": "George",
              "last_name": "Edwards",
              "avatar": "https://reqres.in/img/faces/11-image.jpg"
          },
          {
              "id": 12,
              "email": "rachel.howell@reqres.in",
              "first_name": "Rachel",
              "last_name": "Howell",
              "avatar": "https://reqres.in/img/faces/12-image.jpg"
          }
      ]
          // loop through the fixtures
          cy.get('@api').its('body').its('data').should('deep.eq',data2)
        })
        it('Json Schema Check - Assert key of data', () => {
          cy.get('@api').its('body').its('data').each(value => {
            expect(value).to.have.all.keys('id','email','first_name','last_name','avatar')
          })
        })
        it('Assert request headers', () => {
          cy.get('@api').should(res => {
            expect(res).to.have.property('requestHeaders')
            
          })
        })
      })
    
  

