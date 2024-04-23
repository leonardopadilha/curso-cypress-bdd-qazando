/// <reference types="cypress" />

import elements from "../../elements/common_elements";

export default {
    acessarLoginoUsuario() {
        cy.visit('/')
            .get(elements.link.topo_site)

        cy.get(elements.link.login)
            .should('be.visible')
            .click()
    },
    acessarCadastrarUsuario() {
        cy.visit('')
            .get(elements.link.topo_site)

        cy.get(elements.link.register)
            .should('be.visible')
            .click()
    }
}