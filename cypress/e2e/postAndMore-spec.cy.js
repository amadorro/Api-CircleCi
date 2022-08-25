// use baseUrl and call it using the rest of end point 

describe('API', () => {
    beforeEach(function () {
        cy.request('GET','/users?page=2').as('users')
       
    })
    it('Get - list user', () => {
        cy.get('@users').then(res => {
            expect(res.status).eq(200)
            expect(res.body.data[1].first_name).equal('Lindsay')
        })
    })
    it('Post - create user', () => {
        let user = {
            "name": "James",
            "job": "Sr. Engineer"
        }
        cy.request('POST','/users',user).then(res => {
           expect(res.status).equal(201)
           expect(res.body.name).equal('James')
           expect(res.body.job).equal('Sr. Engineer')
        })
})
    it('PUT - update user', () => {
    let user1 = {
        "name": "Conuss",
        "job": "Sr. Engineer||"
    }
    cy.request('PUT','/users/2',user1).then(res => {
        expect(res.status).eq(200)
        expect(res.body.name).equal(user1.name)
        expect(res.body.job).equal(user1.job)

        })
    })
    it('DELETE, user', () => {
        cy.request('DELETE','/users/2').then(res => {
            expect(res.status).eq(204)
        })
    })
})