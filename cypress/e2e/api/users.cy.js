describe('API - Users | JSONPlaceholder', () => {
  const userPayload = {
    name: 'Gisele QA',
    username: 'giseleqa',
    email: 'gisele.qa@email.com'
  }

  it('deve retornar lista de usuários com status 200', () => {
    cy.request('GET', '/users').then((response) => {
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
      expect(response.body.name).to.be.a('string')
      expect(response.body.email).to.include('@')
    })
  })

  it('deve criar usuário com sucesso', () => {
    cy.request('POST', '/users', userPayload).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(userPayload)
      expect(response.body).to.have.property('id')
    })
  })

  it('deve atualizar usuário com sucesso', () => {
    cy.request('PUT', '/users/1', {
      name: 'Gisele QA Atualizada',
      username: 'giseleqa',
      email: 'gisele.qa@email.com'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Gisele QA Atualizada')
    })
  })

  it('deve atualizar parcialmente um usuário com PATCH', () => {
    cy.request('PATCH', '/users/1', {
      name: 'Nome Parcialmente Atualizado'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Nome Parcialmente Atualizado')
    })
  })

  it('deve deletar usuário com sucesso', () => {
    cy.request('DELETE', '/users/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('deve retornar objeto vazio para usuário inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/users/9999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})