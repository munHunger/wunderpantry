describe("Basics", function() {
  beforeEach(() => {
    cy.viewport(800, 480);
    cy.visit("http://localhost:4200");
    cy.server();
    cy.route({
      method: "GET",
      url: "http://mock/list",
      response: [
        {
          name: "Vetemjöl",
          id: "qwerty",
          hasDetails: false
        },
        {
          name: "Rice",
          id: "asdf",
          hasDetails: true
        }
      ]
    });
    cy.route({
      method: "GET",
      url: "http://mock/list",
      response: {
        main:
          "Clean the rice. Bring to boil. Let simmer for 20 minutes on low heat, covered",
        side: "**4port:** 1dl rice, 2dl water, some salt"
      }
    });
  });

  it("Title is 'WunderPantry'", function() {
    cy.title().should("eq", "WunderPantry");
  });

  it("Has 2 items", () => {
    cy.get(".list")
      .find(".card")
      .should("have.length", 2);
  });
});
