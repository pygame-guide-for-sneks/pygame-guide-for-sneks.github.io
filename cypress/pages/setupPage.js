import { HomePage } from "./homePage";

class SetupPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("/guide/intro/setup");
    }

}

export { SetupPage };