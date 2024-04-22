Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplicação para fazer um pedido de compra

Background: Access register screen
    Given Im on register screen

Scenario: Campo nome vazio
    When I click on Register
    Then I see message "E-mail inválido" on register

Scenario: Campo e-mail vazio
    And I fill name
    When I click on Register
    Then I see message "O campo e-mail deve ser preenchido corretamente" on register

Scenario: Campo e-mail inválido
    And I fill name
    And I fill email "invalidEmail"
    When I click on Register
    Then I see message "O campo e-mail deve ser preenchido corretamente" on register

Scenario: Campo senha vazio
    And I fill name
    And I fill email "teste@teste.com"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

Scenario: Campo senha inválida
    And I fill name
    And I fill email "teste@teste.com"
    And I fill  password with "12345"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

Scenario: Cadastro de usuário com sucesso
    And I fill my datas of register
    When I click on Register
    Then I see success message on register
