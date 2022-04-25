// this line tells vs code this is a cypress file, meaning it helps with stuff like auto completion
/// <reference types="cypress" />

//In these tests we will go to the /habits page and test the checklist feature

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });
  it("should display modal when add button is clicked", () => {
    //get "add" button and click on it
    cy.get("#habit-add-btn").click();
    //checking if the modals opens by looking for the expeted text and asserts if it is visible
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display habit card when new habit is added", () => {
    //get "add" button and click on it
    cy.contains("button", "Add").click();
    //get the textbox and type on it
    cy.get("input[placeholder='Habit']").type("Type a test");
    cy.contains("Save Changes").click();
    cy.get("[class='HabitCard__completion-container']").click();
    cy.contains("button", "Add").click();
    cy.get("input[placeholder='Habit']").type("Type a test2");
    cy.contains("Save Changes").click();
    cy.contains("Type a test2").should("be.visible");
  });
  it("should toggle habit between done and not done", () => {
    cy.contains("button", "Add").click();
    cy.get("input[placeholder='Habit']").type("toogle test");
    cy.contains("Save Changes").click();
    cy.get(
      "[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']"
    ).should("be.visible");
    cy.contains("toogle test").click();
    cy.get(
      "[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']"
    ).should("be.visible");
  });
});
