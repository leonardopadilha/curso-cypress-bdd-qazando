/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';
import home_page from "../pages/home_page";
import register_page from "../pages/register_page";

Given('Im on register screens', () => {
    home_page.acessarCadastrarUsuario()
});

Given('I fill my datas with correct informations of register', (dataTable) => {
    dataTable.hashes().forEach((element) => {
        register_page.preencherNome(element.nome)
        register_page.preencherEmail(element.email)
        register_page.preencherSenha(element.senha)
    });
});

When('I click on btn Register', () => {
    register_page.clickOnRegisterbutton()
});

Then('The Registration is successful', () => {
    register_page.validarCadastroComSucesso('Teste Teste da Silva')
})