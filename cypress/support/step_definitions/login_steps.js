import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import  login_page from "../pages/login_page";

Given("I am on login screen", () => {
    home_page.acessarLoginoUsuario();
});

When("I click on login", () => {
    login_page.clickOnLogin()
});

Then("I see the message {string}", (message) => {
    login_page.validarMensagemErro(message);
});