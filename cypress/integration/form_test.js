describe("App", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/') 
    })

    const nameInput = () => cy.get('input[name="name"]');
    const psizenameInput = () => cy.get('input[name="psize"]');
    const passInput = () => cy.get('input[name="password"]');
    const toppingInput = () => cy.get('input[type="checkbox"]');
    const submitInput = () => cy.get(".submitButton");



})