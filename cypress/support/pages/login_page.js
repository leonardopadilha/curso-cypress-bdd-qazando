/// <reference types="cypress" />

import elemLogin from "../../elements/login_elements";

export default {
    preencherEmail(email) {
        cy.get(elemLogin.input.email)
            .type(email)
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
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal(mensagem);
            })
    },
    validarModalLoginComSucesso(message, email) {
        cy.get(elemLogin.modal.successCheck)
        .should('be.visible')

    cy.get(elemLogin.modal.successMessage)
        .should('be.visible')
        .then((loginSuccess) => {
            expect(loginSuccess.text()).to.equal(message)
        })

    cy.get(elemLogin.modal.welcomeMessage)
        .should('be.visible')
        .then((messageSucces) => {
            expect(messageSucces.text()).to.equal(`Olá, ${email}`)
        })
    }
}
