describe("Basics", function() {
  before(() => {
    cy.viewport(800, 480);
    cy.visit("http://localhost:4200");
  });

  it("Title is 'WunderPantry'", function() {
    cy.title().should("eq", "WunderPantry");
  });
});
