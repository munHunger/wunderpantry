describe("Basics", function() {
  before(() => cy.visit("http://localhost:4200"));

  it("Title is 'WunderPantry'", function() {
    cy.title().should("eq", "WunderPantry");
  });
});
