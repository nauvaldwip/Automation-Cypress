class baseUsermanagement {
    //GENERAL
    adminButton = ':nth-child(1) > .oxd-main-menu-item'
    addButton = '.orangehrm-header-container > .oxd-button'
    searchButton = '.oxd-form-actions > .oxd-button--secondary'
    resetButton = '.oxd-button--ghost'
    userDropdown = '.oxd-userdropdown-tab > .oxd-icon'
    nameDropdown = '.oxd-userdropdown-name'
    logout = ':nth-child(4) > .oxd-userdropdown-link'
    username = ':nth-child(2) > .oxd-input'
    userRole = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    status = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    employeename = '.oxd-autocomplete-text-input > input'

    // VERIFY GENERAL
    resultUsernameVerify = '.oxd-table-card > .oxd-table-row > :nth-child(2) > div'
    resultUserroleVerify = '.oxd-table-card > .oxd-table-row > :nth-child(3) > div'
    resultEmployeeNameVerify = '.oxd-table-card > .oxd-table-row > :nth-child(4) > div'
    resultStatusVerify = '.oxd-table-card > .oxd-table-row > :nth-child(5) > div'


    //FORM
    userRoleForm = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    statusForm = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    employeeNameForm = '.oxd-autocomplete-text-input > input'
    usernameForm = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPassword = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    saveButton = '.oxd-button--secondary'

    // VERIFY FORM
    successfully = '.oxd-toast'
    disabledAccount = '.oxd-alert-content > .oxd-text'
    userroleFormVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text'
    employeenameFormVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
    statusFormVerify = ':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
    usernameFormVerify = ':nth-child(4) > .oxd-input-group > .oxd-text'
    passwordVerify = '.oxd-input-group > .oxd-text'
    confirmpasswordVerify = '.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'

}

export default baseUsermanagement;