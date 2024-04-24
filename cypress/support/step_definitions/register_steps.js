import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import register_page from "../pages/register_page";

Given('Im on register screen', () => {
    home_page.acessarCadastrarUsuario()
});

When('I click on Register', () => {
    register_page.clickOnRegisterbutton()
});

Then('I see message {string} on register', (mensagem) => {
    register_page.validarMensagemErro(mensagem)
})