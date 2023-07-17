
Cypress.Commands.add("verifyFieldName", (selector, expected)=> {

    let expName = expected
    cy.get(selector).then((verifyField) =>{
      let actName = verifyField.text()
      
      //BDD approach 
      expect(actName).to.equal(expName)
      // TDD approach
      assert.equal(actName,expName)
    })
  
  })

Cypress.Commands.add("verifyTextBoxes",(selector) =>{
  cy.get(selector).should('exist')

})

Cypress.Commands.add("enterDataInOneField", (selector, textbx, enter) =>{
  cy.get(selector).type(textbx)
  cy.get(enter).click()
})

Cypress.Commands.add("enterDataInTwoField", (selector1, selector2, textbox1, textbox2, enter) => {
  cy.get(selector1).type(textbox1)
  cy.get(selector2).type(textbox2)
  cy.get(enter).click()
})

Cypress.Commands.add("saveDataInOneField", (selector, textbx, enter, saveBox) =>{
  cy.enterDataInOneField(selector, textbx, enter)
  cy.get(saveBox).click()
})

Cypress.Commands.add("saveDataInTwoFields", (selector1, selector2, textbox1, textbox2, enter, saveBox) =>{
  cy.enterDataInTwoField(selector1, selector2, textbox1, textbox2, enter)
  cy.get(saveBox).click()
})

Cypress.Commands.add("deleteDataInOneField", (selector, textbx, enter, deleteBox) =>{
  cy.enterDataInOneField(selector, textbx, enter)
  cy.get(deleteBox).click()
})

Cypress.Commands.add("deleteDataInTwoFields", (selector1, selector2, textbox1, textbox2, enter, deletebox) =>{
  cy.enterDataInTwoField(selector1, selector2, textbox1, textbox2, enter)
  cy.get(deletebox).click()
})

Cypress.Commands.add("enterDataInThreeField", (selector1, selector2, selector3, textbox1, textbox2, textbox3, enter) => {
  cy.get(selector1).type(textbox1)
  cy.get(selector2).type(textbox2)
  cy.get(selector3).type(textbox3)
  cy.get(enter).click()
})

Cypress.Commands.add("saveDataInThreeField", (selector1, selector2, selector3, textbox1, textbox2, textbox3, enter, savebox) =>{
cy.enterDataInThreeField(selector1, selector2, selector3, textbox1, textbox2, textbox3, enter)
cy.get(savebox).click
})

Cypress.Commands.add("deleteDataInThreeField", (selector1, selector2, selector3, textbox1, textbox2, textbox3, enter, deletebox) =>{
  cy.enterDataInThreeField(selector1, selector2, selector3, textbox1, textbox2, textbox3, enter)
  cy.get(deletebox).click
  })

Cypress.Commands.add("phoneNoExactly10Chars", (selector, number, addBox) =>{
    
    cy.get(selector).type(number)
    cy.get(addBox).click()
    expect(number).to.be.a('string').and.to.have.length(10)
  })

  Cypress.Commands.add("emailWithAtSign", (selector, email, addBox) =>{
    cy.get(selector).type(email)
    cy.get(addBox).click()
    expect(email).to.include('@')
  })

  Cypress.Commands.add("emailWithNoDotSign", (selector, email, addBox) =>{
    cy.get(selector).type(email)
    cy.get(addBox).click()
    expect(email).to.include('.')

  })




