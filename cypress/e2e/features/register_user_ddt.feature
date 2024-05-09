Feature: Register User
    Eu como novo cliente
    Quero me cadastrar na aplicação pra fazer um pedido de compra

Background: Access register screen
    Given Im on register screens

Scenario: Cadastro de usuário com sucesso
    And I fill my datas with correct informations of register
    |nome                 |email            |senha    |
    |Teste Teste da Silva |teste@teste.com  |123456   |
    When I click on btn Register
    Then The Registration is successful
