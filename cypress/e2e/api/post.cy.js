describe('API - Posts | JSONPlaceholder', () => {
    const postPayload = {
      title: 'Teste de post',
      body: 'Conteúdo do post criado por automação',
      userId: 1
    }
  
    it('deve listar posts com sucesso', () => {
      cy.request('GET', '/posts').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
        expect(response.body[0]).to.include.all.keys(
          'userId',
          'id',
          'title',
          'body'
        )
      })
    })
  
    it('deve buscar post por ID com sucesso', () => {
      cy.request('GET', '/posts/1').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
        expect(response.body.title).to.be.a('string')
      })
    })
  
    it('deve criar post com sucesso', () => {
      cy.request('POST', '/posts', postPayload).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.include(postPayload)
        expect(response.body).to.have.property('id')
      })
    })
  
    it('deve atualizar post com sucesso', () => {
      cy.request('PUT', '/posts/1', {
        title: 'Post atualizado',
        body: 'Novo conteúdo',
        userId: 1
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq('Post atualizado')
      })
    })
  
    it('deve deletar post com sucesso', () => {
      cy.request('DELETE', '/posts/1').then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  
    it('deve retornar 404 para post inexistente', () => {
      cy.request({
        method: 'GET',
        url: '/posts/9999',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })