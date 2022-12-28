describe ('Home Page Testing', () => {
  it ('Visit the page', () => {
    cy.visit('/');
    cy.contains("Pygame Guide for Sneks");
  });

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
  //         url: link.prop('href'),
  //         failOnStatusCode: false
  //       }).then((response) => {
  //         expect(response.status).to.be.lt(300)
  //       });
  //     });
  //   });
  // });

  it('check all links to sites', () => {
    const failed_pages = []
    cy.visit('/')
    cy.get("a:not([href*='mailto:'])").each(page => {
      cy.request({
        url:page.prop('href'),
        failOnStatusCode: false
      }).then((response) => {
        if (!response.isOkStatusCode) {
          failed_pages.push({ url: page.prop('href').split("4000")[1], status: response.status })
        }
      })
    })
    .then(() => {
      expect(failed_pages).to.deep.equal([])
    })
    .then(() => {
      cy.log(failed_pages)
    })
  });
});
