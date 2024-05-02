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
    },
    preencherNome(nome) {
        cy.get(registerElements.input.name)
            .type(nome)
    },
    preencherEmail(email) {
        cy.get(registerElements.input.email)
            .type(email)
    },
    preencherSenha(senha) {
        cy.get(registerElements.input.password)
            .type(senha)
    },
    validarCadastroComSucesso(name) {
        cy.get(registerElements.modal.check)
            .should("be.visible");

    cy.get(registerElements.modal.successMessage)
        .should("be.visible")
        .then((createUserSuccess) => {
            expect(createUserSuccess.text()).to.equal("Cadastro realizado!");
        });

    cy.get(registerElements.modal.welcomeMessage)
        .should("be.visible")
        .then((messageSucces) => {
            expect(messageSucces.text()).to.equal(`Bem-vindo ${name}`);
        });
    }
}