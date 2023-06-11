import baseLogin from "../../support/PageObject/loginPage.cy"
import baseUsermanagement from "../../support/PageObject/usrmanagementPage.cy"

const login = new baseLogin()
const usermanagement = new baseUsermanagement ()

const dataLogin = require("../../fixtures/tricentis/login.json")
const dataUsermanagement = require("../../fixtures/tricentis/usermanagement.json")


const randomString = generaterandomString(9)
const randomString65 = generaterandomString(65)
const randomString41 = generaterandomString(41)


// Generate a random string
function generaterandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}


describe('Menu: Admin > User Management', () => {
  beforeEach('open page and login', () => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  // == POSITIVE CASE  ==

  // ENABLED ACCOUNT
  it('[+] ADD USER WITH STATS = ENABLED', () => {
    
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.userRoleForm).click()
    cy.contains(dataUsermanagement.roleESS).click()
    cy.get(usermanagement.statusForm).click()
    cy.contains(dataUsermanagement.enabledStatus).click()
    cy.get(usermanagement.employeeNameForm).type(dataUsermanagement.employeename)
    cy.contains("Odis Adalwin").click()
    cy.get(usermanagement.usernameForm).type(randomString)
    cy.get(usermanagement.password).type(dataUsermanagement.password)
    cy.get(usermanagement.confirmPassword).type(dataUsermanagement.password)
    
    //save & re-login
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.successfully).should('be.visible')
    cy.get(usermanagement.userDropdown).click()
    cy.get(usermanagement.logout).click()
    cy.get(login.usernameField).type(randomString).should('have.value', randomString)
    cy.get(login.passwordField).type(dataUsermanagement.password)
    .should('have.value', dataUsermanagement.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)

    //verify
    cy.get(usermanagement.nameDropdown).contains('Odis Adalwin')
  })

  // DISABLED ACCOUNT
  it('[+] ADD USER WITH STATS = DISABLED', () => {
    const randomString = generaterandomString(9)

    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.userRoleForm).click()
    cy.contains(dataUsermanagement.roleESS).click()
    cy.get(usermanagement.statusForm).click()
    cy.contains(dataUsermanagement.disabledStatus).click()
    cy.get(usermanagement.employeeNameForm).type(dataUsermanagement.employeename)
    cy.contains("Odis Adalwin").click()
    cy.get(usermanagement.usernameForm).type(randomString)
    cy.get(usermanagement.password).type(dataUsermanagement.password)
    cy.get(usermanagement.confirmPassword).type(dataUsermanagement.password)
    
    //save & re-login
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.successfully).should('be.visible')
    cy.get(usermanagement.userDropdown).click()
    cy.get(usermanagement.logout).click()
    cy.get(login.usernameField).type(randomString).should('have.value', randomString)
    cy.get(login.passwordField).type(dataUsermanagement.password)
    .should('have.value', dataUsermanagement.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)

    //verify
    cy.get(usermanagement.disabledAccount).contains(dataUsermanagement.accountDisabled)
  })

  // == NEGATIVE CASE ==

  //BLANK ALL FIELD
  it('[-] BLANK ALL FIELD', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.userroleFormVerify).contains(dataUsermanagement.required)
    cy.get(usermanagement.employeenameFormVerify).contains(dataUsermanagement.required)
    cy.get(usermanagement.statusFormVerify).contains(dataUsermanagement.required)
    cy.get(usermanagement.usernameFormVerify).contains(dataUsermanagement.required)
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement.required)
    cy.get(usermanagement.confirmpasswordVerify).contains(dataUsermanagement.required)
    cy.wait(4000)
   
  })
  
  //USERNAME ALREADY EXIST
  it('[-] USERNAME ALREADY EXIST', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.userRoleForm).click()
    cy.contains(dataUsermanagement.roleESS).click()
    cy.get(usermanagement.statusForm).click()
    cy.contains(dataUsermanagement.enabledStatus).click()
    cy.get(usermanagement.employeeNameForm).type(dataUsermanagement.employeename)
    cy.contains("Odis Adalwin").click()
    cy.get(usermanagement.usernameForm).type(randomString)
    cy.contains(dataUsermanagement.alreadyExist).wait(1000)
   
  })

  //INVALID EMPLOYEE NAME
  it('[-] INVALID EMPLOYEE NAME', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.employeeNameForm).type('aaxc')
    cy.wait(1000)
    cy.contains(dataUsermanagement.norecordsFound).click()
    cy.get(usermanagement.employeenameFormVerify).contains(dataUsermanagement.invalid)
    cy.wait(1000)
  })

  // INPUT USERNAME MORE THAN 40 CHAR
  it('[-] INPUT USERNAME MORE THAN 40 CHAR', () => {

    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.usernameForm).type(randomString41)
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.usernameFormVerify).contains(dataUsermanagement["40char"])
  })

  // INPUT PASSWORD & CONF PASSWORD MORE THAN 64 CHAR
  it('[-] INPUT PASSWORD & CONF PASSWORD MORE THAN 64 CHAR', () => {

    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type(randomString65)
    cy.get(usermanagement.confirmPassword).type(randomString65)
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement["64char"])
    cy.get(usermanagement.confirmpasswordVerify).contains(dataUsermanagement["64char"])
  })
  
  //USERNAME LESS THAN 5 CHAR
  it('[-] USERNAME LESS THAN 5 CHAR', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.usernameForm).type('aaxc')
    cy.wait(1000)
    cy.get(usermanagement.usernameFormVerify).contains(dataUsermanagement["5char"])
    cy.wait(1000)
  })

  //PASSWORD LESS THAN 7 CHAR
  it('[-] PASSWORD LESS THAN 7 CHAR', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type('aaxc')
    cy.wait(1000)
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement["7char"])
    cy.wait(1000)
  })

  //CONFRIM PASSWORD DONT MACTH
  it('[-] CONFRIM PASSWORD DONT MACTH', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type(dataUsermanagement.password)
    cy.get(usermanagement.confirmPassword).type(dataUsermanagement.wrongPassword)
    cy.get(usermanagement.saveButton).click()
    cy.contains(dataUsermanagement.passdontmatch)
  })

  // PASSWORD WITHOUT MINIMUM 1 LOWER-CASE
  it('[-] PASSWORD WITHOUT MINIMUM 1 LOWER-CASE', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type('AQWERT~~@#YUGDGG')
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement.minimum1lowercase)
  })

  // PASSWORD WITHOUT MINIMUM 1 NUMBER
  it('[-] PASSWORD WITHOUT MINIMUM 1 NUMBER', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type('asdasdzxcdsfe')
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement.minimum1number)
  })

  // PASSWORD USING SPACE
  it('[-] PASSWORD USING SPACE', () => {
    cy.get(usermanagement.adminButton).click()
    cy.get(usermanagement.addButton).click()
    cy.get(usermanagement.password).type('asdasdzxcd313 sfe')
    cy.get(usermanagement.saveButton).click()
    cy.get(usermanagement.passwordVerify).contains(dataUsermanagement.anyspace)
  })
})