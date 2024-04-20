/// <reference types="cypress" />

import elemLogin from "../../elements/login_elements";

export default {
    preencherNome(name) {
        cy.get(elemLogin.input)
            .type(name)
    },
    preencherSenha(password) {
        cy.get(elemLogin.input.password)
            .type(password)
    },
    clickOnLogin() {
        cy.get(elemLogin.button.login)
            .click()
    },
    validarMensagemErro(mensagem) {
        cy.get(elemLogin.mensagem.erro)
            .should('be.visible')
            .then((element) => {
                expect(element.text()).to.be.equal(mensagem);
            })
    }
}
