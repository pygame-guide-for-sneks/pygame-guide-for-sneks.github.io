import { HomePage } from "./homePage";

class FontPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("/guide/intro/fonts");
    }

}

export { FontPage };