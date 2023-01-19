import { HomePage, checkIfValid } from "../pages/homePage";

describe ("Home Page Testing", () => {
  let home = new HomePage();
  it("Visit the page", () => {
    home.visit();
    cy.contains("Pygame Guide for Sneks");
  })

  it("check all links to sites", () => {
    let failed_pages = []
    home.visit();
    home.getLinks().each(page => {
      checkIfValid(page, failed_pages);
    })
    .then(() => {
      expect(failed_pages).to.deep.equal([])
    })
  });
})

  /* 
  Leaving this code here as an alternative test for only specific
  links on a page.
  */

  // const pages = [
  //   "Base setup and opening a window",
  //   "Drawing shapes",
  //   "Moving things",
  //   "Loading images and drawing them",
  //   "Using classes to better contain our code",
  //   "Loading and playing audio files",
  //   "Making a small game to demonstrate how these go together",
  //   "Fonts in pygame",
  //   "Colors in pygame",
  //   "PixelArray",
  //   "Blend modes",
  //   "pygame.display.set_mode flags"
  // ];

  // pages.forEach(page => {
  //   it (`Testing ${page}`, () => {
  //     cy.visit("/");
  //     cy.contains(page).then(link => {
  //       cy.request({
  //         url: link.prop("href"),
  //         failOnStatusCode: false
  //       }).then((response) => {
  //         expect(response.status).to.be.lt(300)
  //       });
  //     });
  //   });
  // });
