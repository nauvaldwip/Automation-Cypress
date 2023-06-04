import basePim from "../../support/PageObject/pimPage.cy"
import baseLogin from "../../support/PageObject/loginPage.cy"

const pim = new basePim()
const login = new baseLogin()


describe('Menu : PIM', () => {

  beforeEach(() => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

// Positive case
  it('Search with no input', () => {
    cy.get(pim.pimMenu).click()
    cy.get(pim.searchlist).click({force:true})
    cy.get(pim.searchrecordfound).should('contain', 'Records Found')
    })
  
  it('Input Valid Data', () => {
    cy.get(pim.pimMenu).click()
    cy.get(pim.namesearch).type('Aaliyah Haq')
    cy.get(pim.idsearch).type('0038')
    cy.get(pim.searchlist).click({force:true})
    cy.get(pim.tabelrecord).should('contain', 'Aaliyah Haq')
  })

  it('Reset search filter', () => {
    cy.get(pim.pimMenu).click()
    cy.get(pim.namesearch).type('Aaliyah Haq')
    cy.get(pim.idsearch).type('0038')
    cy.get(pim.resetsearch).click({force:true})
    cy.get(pim.namesearch).should('be.empty')
  })

// Negative case
  it('Input Invalid Data', () => {
    cy.get(pim.pimMenu).click()
    cy.get(pim.namesearch).type('Bukan Employee')
    cy.get(pim.idsearch).type('110011101')
    cy.get(pim.searchlist).click({force:true})
    cy.contains('No Records Found').should('be.visible')
  })
  })