import { HomePage } from "./homePage";

class SetupPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("intro/setup");
    }

}

export { SetupPage };