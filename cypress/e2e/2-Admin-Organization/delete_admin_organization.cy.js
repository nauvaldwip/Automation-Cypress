import baseOrganization from "../../support/PageObject/organizationPage.cy";
import baseLogin from "../../support/PageObject/loginPage.cy"

const login = new baseLogin()
const organization = new baseOrganization()

const dataLogin = require("../../fixtures/tricentis/login.json")


describe('Menu : Admin > Organization', () => {

  beforeEach(() => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  it('[+] Yes Delete Locations', () => {
    cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
    cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
    cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
    cy.get(organization.keranjangSampah, {timeout:10000}).click()//keranjang sampah
    cy.get(organization.yesDelete, {timeout:10000}).click()
    cy.get(organization.successDelete).should('be.visible')
  })

  it('[-] No, Cancel Delete ', () => {
    cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
    cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
    cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
    cy.get(organization.keranjangSampah, {timeout:10000}).click()//keranjang sampah
    cy.get(organization.noDelete, {timeout:10000}).click()
    cy.get(organization.assertCancel).should('be.visible')
  })
})