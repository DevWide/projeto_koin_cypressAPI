describe('Testes de API para JSONPlaceholder', () => {

    it('Deve listar todos os posts', () => {
      cy.request('/posts').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  
    it('Deve criar um novo post', () => {
      cy.fixture('data').then((data) => {
        cy.request('POST', '/posts', data.newPost).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('id');
          expect(response.body.title).to.eq(data.newPost.title);
          expect(response.body.body).to.eq(data.newPost.body);
          expect(response.body.userId).to.eq(data.newPost.userId);
        });
      });
    });
  
    it('Deve atualizar um post existente', () => {
      cy.fixture('data').then((data) => {
        cy.request('PUT', '/posts/1', data.updatedPost).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.title).to.eq(data.updatedPost.title);
          expect(response.body.body).to.eq(data.updatedPost.body);
          expect(response.body.userId).to.eq(data.updatedPost.userId);
        });
      });
    });
  });
  