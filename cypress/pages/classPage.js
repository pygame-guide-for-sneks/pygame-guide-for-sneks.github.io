import { HomePage } from "./homePage";

class ClassPage extends HomePage {
    visit() {
       super.visit();
       cy.visit("/guide/intro/classes");
    }

}

export { ClassPage };