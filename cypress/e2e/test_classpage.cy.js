import { ClassPage } from "../pages/classPage";
import { checkIfValid } from "../pages/homePage";

describe ("Class Page Testing", () => {
  let page = new ClassPage();
  it("Visit the page", () => {
    page.visit();
    cy.contains("Pygame Guide for Sneks");
  })

  it('check all links to sites', () => {
    let failed_pages = [];
    page.visit();
    page.getLinks().each(page => {
      checkIfValid(page, failed_pages);
    })
    .then(() => {
      expect(failed_pages).to.deep.equal([]);
    })
  });
})