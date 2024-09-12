describe('Text may be inputed', () => {
    it('can receive text input', () => {
        cy.visit('https://reqres.in/api/orders');
        cy.get('#name-input')
        .type('Pagliacci').should('have.value', 'Pagliacci');
    })
})

describe('Multiple toppings may be selected', () => {
    it ('CSan check multiple toppings', () => {
        cy.visit('https://reqres.in/api/orders');
        cy.get('[type="checkbox"]')
        .check ({force: true})
        .should('be.checked')
    })
})

describe('Order may be sumbitted', () => {
    it('Posts submitted object', () => {
        cy.visit('https://reqres.in/api/orders');
        cy.get('#pizza-form').submit()
    })
})