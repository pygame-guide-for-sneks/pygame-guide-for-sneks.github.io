class HomePage {
  visit() {
    cy.visit('/');
  }

  getLinks() {
    return cy.get('a:not([href*=\'mailto:\'])');
  }
}

function checkIfValid(page, failed_pages) {
    let url = page.prop('href');
    if (url == "https://pygame.org/docs") {
        return;
    }
    cy.request({
      url: url,
      failOnStatusCode: false
    }).then((response) => {
      if (!response.isOkStatusCode) {
        if (url.includes("localhost")) {
            failed_pages.push({ url: url.split("4000")[1], status: response.status })
        } else {
            failed_pages.push({ url: url, status: response.status })
        }
      }
    })
  }

export { HomePage, checkIfValid };