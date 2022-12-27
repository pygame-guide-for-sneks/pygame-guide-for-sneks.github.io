describe ('Home Page Testing', () => {
  it ('Visit the page', () => {
    cy.visit('/');
    cy.contains("Pygame Guide for Sneks");
  });

  const pages = [
    "Base setup and opening a window",
    "Drawing shapes",
    "Moving things",
    "Loading images and drawing them",
    "Using classes to better contain our code",
    "Loading and playing audio files",
    "Making a small game to demonstrate how these go together",
    "Fonts in pygame",
    "Colors in pygame",
    "PixelArray",
    "Blend modes",
    "pygame.display.set_mode flags"
  ];

  pages.forEach(page => {
    it (`Testing ${page}`, () => {
      cy.visit("/");
      cy.contains(page).then(link => {
        cy.request({ url: link.prop('href') });
      });
    });
  });
});
