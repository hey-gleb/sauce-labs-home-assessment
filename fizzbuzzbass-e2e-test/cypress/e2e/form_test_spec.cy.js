describe('Form Submission', () => {
    before(() => {
        cy.fixture('form').as('formData');
    })

    it('successfully submits the form', function () {
        this.formData.forEach(data=>{
            cy.visit('http://localhost:3000/');

            cy.get('[data-testid="main-inputWithError"]').type(data.gameValue);
            cy.get('[data-testid="main-form"]').submit();

            cy.get('[data-testid="main-result"]').contains(data.expected.result).should('be.visible');
        })
    })
});