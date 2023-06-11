import baseLogin from "../../support/PageObject/loginPage.cy"
import baseUsermanagement from "../../support/PageObject/usrmanagementPage.cy"

const usermanagement = new baseUsermanagement ()
const login = new baseLogin()

const dataLogin = require("../../fixtures/tricentis/login.json")


describe('Menu: Admin > User Management', () => {

  beforeEach('open page and login', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  // == POSITIVE ==

  it('[+] SEARCH WITH VALID DATA', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.username).type('Aaliyah.Haq')
    cy.get(usermanagement.userRole).type('ESS')
    cy.get(usermanagement.employeename).type('Aali')
    cy.contains('Aaliyah Haq').click()
    cy.get(usermanagement.status).type('Enabled')
    cy.contains('Enabled').click()
    cy.wait(1000)
    cy.get(usermanagement.searchButton).click({force:true})
    cy.get(usermanagement.resultUsernameVerify).click({force:true})
    cy.get(usermanagement.resultUserroleVerify).click({force:true})
    cy.get(usermanagement.resultEmployeeNameVerify).click({force:true})
    cy.get(usermanagement.resultStatusVerify).click({force:true}).wait(4000)

  })

  it('[+] RESET BUTTON', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.username).type('Aaliyah.Haq')
    cy.get(usermanagement.userRole).type('ESS')
    cy.get(usermanagement.employeename).type('Aali')
    cy.contains('Aaliyah Haq').click()
    cy.get(usermanagement.status).type('Enabled')
    cy.contains('Enabled').click()
    cy.wait(1000)
    cy.get(usermanagement.resetButton).click({force:true})
    //verify
    cy.get(usermanagement.userRole).contains('-- Select --')
    cy.get(usermanagement.status).type('-- Select --')

  })

  // == NEGATIVE ==
  
  // USERNAME INVALID IN SEARCH
  it('[-] USERNAME INVALID IN SEARCH', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.username).type('12345{enter}')
    cy.contains('No Records Found').should('be.visible')
    cy.wait(3000)
  })

  // EMPLOYEE NAME INVALID IN SEARCH
  it('[-] EMPLOYEE NAME INVALID IN SEARCH',() => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.username).type('obama{enter}')
    cy.contains('No Records Found').should('be.visible')
    cy.wait(3000)

  })

})