import { HomePage } from "./homePage";

class ClassPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("intro/classes");
    }

}

export { ClassPage };