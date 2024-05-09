import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

Given("I am on login screen", () => {
    home_page.acessarLoginoUsuario();
});

Given('fill e-mail', () => {
    login_page.preencherEmail("teste@teste.com")
});

Given('fill my credencials', () => {
    login_page.preencherEmail('teste@teste.com')
    login_page.preencherSenha('111111')
});

When("I click on login", () => {
    login_page.clickOnLogin()
});

Then("I see the message {string}", (message) => {
    login_page.validarMensagemErro(message);
});

Then('I see success message', () => {
    login_page.validarModalLoginComSucesso('Login realizado', 'teste@teste.com')
});