// this line tells vs code this is a cypress file, meaning it helps with stuff like auto completion
/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });
  //You can grab dom elements in a few different ways, get, find, contains etc. This next suit of test uses the .get() method
  it("locating elements with get", () => {
    // get all elements by tag name
    cy.get("button");
    //get elements by class name
    cy.get(".btn-with-class");
    // get all elements by specific classes
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    // get all elements by id
    cy.get("#btn-with-id");

    //get elements by specific attribute
    cy.get("[type='submit']");
    // get all elements by tag name AND class
    cy.get("button.Elements-btn");

    // get all elements by tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id");

    // get all elements by tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']");

    //get all elementts with specific data test id
    cy.get("[data-cy='btn-id-1']");

    //Same get but using a function defined within support/commands.js
    cy.getByTestId("btn-id-1");
  });
  //This next suit of tests uses the .contains() method
  it("locating elements with contains", () => {
    //get element by text
    cy.contains("Unique Text");
    //get element by text but text is not unique
    cy.contains("Not Unique Text");

    //with selector, both of these ways are almost the same
    cy.contains('[type="submit"]', "Not Unique Text");

    cy.get("[type='submit']").contains("Not Unique Text");
  });

  //This next suit of tests uses the .find() method
  //This method doesn't work just by itself, it finds descendent DOM elements of a speficic selector
  //meaning it needs to be chained to a selector .get().find() for example
  it("locating elements with find", () => {
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");
  });
});
