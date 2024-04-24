/// <reference types="cypress" />

import registerElements from "../../elements/register_elements";

export default {
    clickOnRegisterbutton() {
        cy.get(registerElements.button.register)
            .should( "be.visible")
            .click()
    },
    validarMensagemErro(mensagem) {
        cy.get(registerElements.error.message)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal(mensagem)
            })
    }
}