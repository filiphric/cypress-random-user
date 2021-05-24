it('login', () => {

  cy
    .readFile('./cypress/data.json')
    .then(({ accessToken }) => {
    cy
      .setCookie('trello_token', accessToken);
  }); 

  cy
    .visit('/');
  
});
