class baseOrganization {
    //GENERAL
    menuAdmin = ':nth-child(1) > .oxd-main-menu-item'
    menuOrganization = '.oxd-topbar-body-nav > ul > :nth-child(3)'
    menuLocations = ':nth-child(2) > .oxd-topbar-body-nav-tab-link'

    //ADD DATA LOCATIONS
    

    //EDIT DATA LOCATIONS
    logoPencil = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)'
    editName = ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    editCity = ':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editState = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editZip = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editCountry = '.oxd-select-text'
    editPhone = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editFax = ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editAddress = ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea'
    editNote = ':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea'
    editSaveButton = '.oxd-button--secondary'
    editCancelButton = '.oxd-button--ghost'
    successEdit = '.oxd-toast'
    blankfieldName = ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text'
    blankfieldCountry = ':nth-child(4) > .oxd-input-group > .oxd-text'
    invalidPhone = ':nth-child(5) > .oxd-input-group > .oxd-text'
    invalidFax = ':nth-child(6) > .oxd-input-group > .oxd-text'
    editName100 = '.oxd-input-group > .oxd-text'
    editCity50 = '.oxd-input-group > .oxd-text'
    editAddress250 = ':nth-child(7) > .oxd-input-group > .oxd-text'
    editNote250 = ':nth-child(8) > .oxd-input-group > .oxd-text'
    
    // DELETE
    assertCancel = '.orangehrm-horizontal-padding > .oxd-text'
    keranjangSampah = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    yesDelete = '.oxd-button--label-danger'
    noDelete = '.oxd-button--text'
    successDelete = '.oxd-toast-content'

    
}
export default baseOrganization;