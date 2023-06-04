import baseLogin from "../../support/PageObject/loginPage.cy"

  const login = new baseLogin()
  const dataLogin = require("../../fixtures/tricentis/login.json")

describe('Login Scenario', () => {

  it('[+] Login Success', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.get(login.headerDashboard).contains(dataLogin.dashboard)
    cy.wait(1000)
  })

  it('[-] Wrong Username', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.wrongUsername).should('have.value', dataLogin.wrongUsername)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.get(login.invalidCredentials).contains(dataLogin.invalidCredentials)
    cy.wait(1000)
  })

  it('[-] Wrong Password', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.wrongPassword).should('have.value', dataLogin.wrongPassword)
    cy.get(login.loginButton).click()
    cy.get(login.invalidCredentials).contains(dataLogin.invalidCredentials)
    cy.wait(1000)
  })

  it('[-] Empty Username', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).clear()
    cy.get(login.passwordField).type(dataLogin.wrongPassword).should('have.value', dataLogin.wrongPassword)
    cy.get(login.loginButton).click()
    cy.get(login.emptyField).contains(dataLogin.emptyField)
    cy.wait(1000)
  })

  it('[-] Empty Password', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).clear()
    cy.get(login.loginButton).click()
    cy.get(login.emptyField).contains(dataLogin.emptyField)
    cy.wait(1000)
  })

})