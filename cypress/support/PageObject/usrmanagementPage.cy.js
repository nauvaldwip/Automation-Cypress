class baseUsermanagement {
    //GENERAL
    adminButton = ':nth-child(1) > .oxd-main-menu-item'
    addButton = '.orangehrm-header-container > .oxd-button'
    userDropdown = '.oxd-userdropdown-tab > .oxd-icon'
    nameDropdown = '.oxd-userdropdown-name'
    logout = ':nth-child(4) > .oxd-userdropdown-link'


    //FORM
    userRole = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    status = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    employeeName = '.oxd-autocomplete-text-input > input'
    username = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPassword = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    saveButton = '.oxd-button--secondary'

    //VERIFY 
    successfully = '.oxd-toast'
    disabledAccount = '.oxd-alert-content > .oxd-text'
    userroleVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text'
    employeenameVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
    statusVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
    usernameVerify = ':nth-child(4) > .oxd-input-group > .oxd-text'
    passwordVerify = '.oxd-input-group > .oxd-text'
    confirmpasswordVerify = '.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
}

export default baseUsermanagement;