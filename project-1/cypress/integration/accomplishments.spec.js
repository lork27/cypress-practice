// this line tells vs code this is a cypress file, meaning it helps with stuff like auto completion
/// <reference types="cypress" />

//In these tests we will go to the /habits page and test the checklist feature

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  it("should showcase error if info is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("caca");
    cy.contains("Submit Accomplishment").click();
    cy.get("[class='Accomplishment-error-container']").should("be.visible");
  });

  it("should create new habit", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("Title habit");
    cy.get("[data-cy='accomplishment-input']").type("Lorem ipsum sit amet");
    cy.get("[data-cy='accomplishment-checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("should display empty fields after creating a new habit", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "Another title habit"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "Lorem ipsum sit amet etc etc"
    );
    cy.get("[data-cy='accomplishment-checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
    cy.get("[class='Accomplishment-btn']").click();

    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked");
  });
});
