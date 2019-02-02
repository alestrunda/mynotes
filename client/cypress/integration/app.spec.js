/*global cy*/

describe("App", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Adds new note", () => {
  it("adds note", () => {
    cy.visit("/");
    cy.get('[data-test-id="new-note-btn"]').click();
    cy.get("#note-title").type("Note name");
    cy.get("#note-description").type("Note description");
    cy.get('[data-test-id="note-done-btn"]').click();
    cy.get(".note-preview")
      .last()
      .get("h2")
      .should("have.text", "Note name");
  });
});
