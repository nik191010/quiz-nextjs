describe('Create Quiz E2E', () => {
  it('can create a quiz', () => {
    cy.visit('/create-quiz/1', { failOnStatusCode: false });
    cy.get('#quiz-title').type('My First Quiz');
    cy.get('label')
      .contains('Question')
      .invoke('attr', 'for')
      .then((id) => {
        cy.get(`#${id}`).type('What is 2+2?');
      });
    cy.get('label')
      .contains('Answer')
      .invoke('attr', 'for')
      .then((id) => {
        cy.get(`#${id}`).type('4');
      });

    cy.contains('Update Quiz').click();
    cy.contains('The quiz has been saved');
  });
});
