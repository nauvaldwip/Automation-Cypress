import baseOrganization from "../../support/PageObject/organizationPage.cy"
import baseLogin from "../../support/PageObject/loginPage.cy"

// Generate a random string
function generaterandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const dataLogin = require("../../fixtures/tricentis/login.json")
const randomString = generaterandomString(10);
const string250 = generaterandomString(251);
const login = new baseLogin()
const organization = new baseOrganization()

describe('Menu : Admin', () => {

  beforeEach(() => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  // ========= Positive case =========
  it('Edit with valid data', () => {
    cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
    cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
    cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
    cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
    cy.get(organization.editName).clear().type(randomString) //name
    cy.get(organization.editCity).clear().type('Newyork') //city
    cy.get(organization.editState).clear().type('NY') //state
    cy.get(organization.editZip).clear().type('+12345') //zip code
    cy.get(organization.editCountry, {timeout:10000}).click() //dropdown country
    cy.contains('Afghanistan', {timeout:10000}).click()
    cy.get(organization.editPhone).clear().type('1 (866) 781-7104') //no hp
    cy.get(organization.editFax).clear().type('111-0123') //fax
    cy.get(organization.editAddress).clear().type('11th Ave') //address
    cy.get(organization.editSaveButton, {timeout:10000}).click({force:true}) //tombol save edit
    cy.get(organization.successEdit).should('be.visible')
    })
  it('Cancel edit locations', () => {
    cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
    cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
    cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
    cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
    cy.get(organization.editCancelButton, {timeout:10000}).click({force:true}) //tombol cancel edit
    cy.get(organization.assertCancel).should('be.visible').should('contain', 'Records Found')
    })
  
// ========== Negative case ==========
it('Blank Mandatory field, name', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editName).clear() //name
  cy.get(organization.blankfieldName).should('be.visible')
    })
it('Blank Mandatory field, country', () => {
    cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
    cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
    cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
    cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
    cy.get(organization.editCountry, {timeout:10000}).click()
    cy.contains('-- Select --', {timeout:10000}).click()
    cy.get(organization.blankfieldCountry).should('be.visible')
    })  
it('Input Phone selain + - / () dan angka', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editPhone).clear().type('asd123') 
  cy.get(organization.invalidPhone).should('be.visible')
    })
it('Input Fax selain + - / () dan angka', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editFax).clear().type('asd123') 
  cy.get(organization.invalidFax).should('be.visible')
    })
it('Input Name > 100 char', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editName).clear().type(string250) 
  cy.get(organization.editName100).should('be.visible')
    })
it('Input City > 50 char', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editCity).clear().type(string250) 
  cy.get(organization.editCity50).should('be.visible')
})
it('Input Fax dan Phone > 30 char', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editPhone).clear().type('234567890123456789012345678900110') 
  cy.get(organization.editFax).clear().type('234567890123456789012345678900110')
  cy.get(organization.invalidPhone).should('be.visible')
  cy.get(organization.invalidFax).should('be.visible')
    })
it('Input Address dan Note > 250', () => {
  cy.get(organization.menuAdmin, {timeout:10000}).click() //menu admin
  cy.get(organization.menuOrganization, {timeout:10000}).click() //menu organizations
  cy.get(organization.menuLocations, {timeout:10000}).click() //menu locations
  cy.get(organization.logoPencil, {timeout:10000}).click() //logo pensil
  cy.get(organization.editAddress).clear().type(string250) 
  cy.get(organization.editNote).clear().type(string250)
  cy.get(organization.editAddress250).should('be.visible')
  cy.get(organization.editNote250).should('be.visible')
    })   
})