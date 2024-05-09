import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';
import home_page from "../pages/home_page";
import register_page from "../pages/register_page";

Given('Im on register screen', () => {
    home_page.acessarCadastrarUsuario()
});

When('I click on Register', () => {
    register_page.clickOnRegisterbutton()
});

Given('I fill name', () => {
    register_page.preencherNome('Teste da Silva')
});

Then('I see message {string} on register', (mensagem) => {
    register_page.validarMensagemErro(mensagem)
});

Given('I fill email {string}', (email) => {
    register_page.preencherEmail(email)
});

Given('I fill  password with {string}', (senha) => {
    register_page.preencherSenha(senha)
});

Given('I fill my datas of register', () => {
    register_page.preencherNome("Teste da Silva")
    register_page.preencherEmail('teste@teste.com')
    register_page.preencherSenha('123456')
});

Then('I see success message on register', () => {
    register_page.validarCadastroComSucesso('Teste da Silva')
})