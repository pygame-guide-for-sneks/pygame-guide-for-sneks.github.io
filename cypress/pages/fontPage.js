import { HomePage } from "./homePage";

class FontPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("intro/fonts");
    }

}

export { FontPage };