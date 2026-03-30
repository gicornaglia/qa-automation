describe('API Users', () => {

  const getUsers = () => cy.request('GET', '/users')

  it('deve retornar lista de usuários com status 200', () => {
    getUsers().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.length(10)
      expect(response.body[0]).to.include.all.keys(
        'id',
        'name',
        'username',
        'email'
      )
    })
  })

  it('deve buscar usuário por ID com sucesso', () => {
    cy.request('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
    })
  })

  it('deve criar usuário com sucesso', () => {
    const user = {
      name: 'Gisele QA',
      username: 'giseleqa teste',
      email: 'gisele.qa@email.com'
    }

    cy.request('POST', '/users', user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(user)
    })
  })

  it('deve atualizar usuário com sucesso', () => {
    const updatedUser = {
      name: 'Gisele QA Atualizada'
    }

    cy.request('PUT', '/users/1', updatedUser).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(updatedUser.name)
    })
  })

  it('deve deletar usuário com sucesso', () => {
    cy.request('DELETE', '/users/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('deve retornar 404 para usuário inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/users/9999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

})