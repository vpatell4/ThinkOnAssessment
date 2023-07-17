import commands from "../support/commands"
import cssselectors from "../support/cssselectors"
import example from "../fixtures/example.json"



describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
    })
    

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App')
    cy.get('table tbody tr').should('have.length', 1)
  })
  
  
  // Add tests here
  // The below tests are created assuming that the current behavior of the web application is the expected behavior of the web application, diregarding the logical behavior. 
  // Following these scenarios are the logical scenarios. For ex, the phone number field should accept exactly 10 characters.
  it('Verify title of the name text box', ()=> {
    cy.verifyFieldName(cssselectors.name_fieldName, example.fieldName1)
    }) 

  it('Verify title of the phone text box', ()=> {
    cy.verifyFieldName(cssselectors.phone_fieldName, example.fieldName2)
    }) 

  it('Verify title of the email text box', ()=> { 
    cy.verifyFieldName(cssselectors.email_fieldName, example.fieldName3)
    }) 

  it('Verify title of the actions text box', ()=> {
    cy.verifyFieldName(cssselectors.email_fieldName, example.fieldName3) 
    }) 

  it('Verify presence of name text box', ()=>{
    cy.verifyTextBoxes(cssselectors.name_tbx)
    })

  it('Verify presence of phone text box', ()=>{
    cy.verifyTextBoxes(cssselectors.phone_tbx)
    })

  it('Verify presence of email text box', ()=>{
    cy.verifyTextBoxes(cssselectors.email_tbx)
    })
  
  it('Verify presence of add button', () =>{
    cy.get(cssselectors.action_tbx).should('exist')
  })


  it('Testing that the website moves to second entry after adding no values in the first entry',()=>{
    cy.get(cssselectors.action_tbx).click()
  })

  it('Testing that the website moves to second entry after adding only name in first entry',()=>{
    cy.enterDataInOneField(cssselectors.name_tbx, example.nameT, cssselectors.action_tbx)
  })

  it('Testing that the website moves to second entry after adding only phone in first entry',()=>{
    cy.enterDataInOneField(cssselectors.phone_tbx, example.phoneT, cssselectors.action_tbx)
  })

  it('Testing that the website moves to second entry after adding only email in first entry',()=>{
    cy.enterDataInOneField(cssselectors.email_tbx, example.nameT, cssselectors.action_tbx)
})

it('Testing that the website moves to second entry after adding only name and phone in first entry',()=>{
  cy.enterDataInTwoField(cssselectors.name_tbx, cssselectors.phone_tbx, example.nameT, example.phoneT, cssselectors.action_tbx)
})

it('Testing that the website moves to second entry after adding only phone and email in first entry',()=>{
  cy.enterDataInTwoField(cssselectors.phone_tbx, cssselectors.email_tbx, example.phoneT, example.emailT, cssselectors.action_tbx)
})

it('Testing that the website moves to second entry after adding only email and name in first entry',()=>{
  cy.enterDataInTwoField(cssselectors.email_tbx, cssselectors.name_tbx, example.emailT, example.nameT, cssselectors.action_tbx)
})

it('Testing that the website moves to second entry after adding name, email and phone in first entry',()=>{
  cy.enterDataInThreeField(cssselectors.name_tbx,cssselectors.phone_tbx,cssselectors.email_tbx,
    example.nameT, example.phoneT, example.emailT, cssselectors.action_tbx)
})

it('Testing that the website saves entry when only entered in name field', () =>{
  cy.saveDataInOneField(cssselectors.name_tbx,example.nameT, cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the website saves entry when only entered in phone field', () =>{
  cy.saveDataInOneField(cssselectors.phone_tbx,example.phoneT, cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the website saves entry when only entered in email field', () =>{
  cy.saveDataInOneField(cssselectors.email_tbx,example.emailT, cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the website saves entry when only name and phone are inputted', () =>{
  cy.saveDataInTwoFields(cssselectors.name_tbx, cssselectors.phone_tbx, example.nameT,example.phoneT,
    cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the website saves entry when only phone and email are inputted', () =>{
  cy.saveDataInTwoFields(cssselectors.phone_tbx, cssselectors.email_tbx, example.phoneT,example.emailT,
    cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the website saves entry when only email and name are inputted', () =>{
  cy.saveDataInTwoFields(cssselectors.email_tbx, cssselectors.name_tbx, example.emailT,example.nameT,
    cssselectors.action_tbx, cssselectors.save_box)

})

it('Testing that the website deletes entry when data is only entered in name field', () =>{
  cy.deleteDataInOneField(cssselectors.name_tbx,example.nameT, cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the website deletes entry when data is only entered in phone field', () =>{
  cy.deleteDataInOneField(cssselectors.phone_tbx,example.phoneT, cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the website deletes entry when data is only entered in email field', () =>{
  cy.deleteDataInOneField(cssselectors.email_tbx,example.emailT, cssselectors.action_tbx, cssselectors.delete_box)
}) 

it('Testing that the website delete entry when only name and phone are inputted', () =>{
  cy.deleteDataInTwoFields(cssselectors.name_tbx, cssselectors.phone_tbx, example.nameT,example.phoneT,
    cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the website delete entry when only email and phone are inputted', () =>{
  cy.deleteDataInTwoFields(cssselectors.email_tbx, cssselectors.phone_tbx, example.emailT,example.phoneT,
    cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the website delete entry when only name and email are inputted', () =>{
  cy.deleteDataInTwoFields(cssselectors.email_tbx, cssselectors.name_tbx, example.emailT,example.nameT,
    cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the first entry is saved when data is entered in all fields', () =>{
  cy.saveDataInThreeField(cssselectors.name_tbx,cssselectors.phone_tbx,cssselectors.email_tbx,
    example.nameT, example.phoneT, example.emailT, cssselectors.action_tbx, cssselectors.save_box)
})

it('Testing that the first entry is deleted when data is entered in all fields', () =>{
  cy.enterDataInThreeField(cssselectors.name_tbx,cssselectors.phone_tbx,cssselectors.email_tbx,
    example.nameT, example.phoneT, example.emailT, cssselectors.action_tbx, cssselectors.delete_box)
})

it('Testing that the website accepts space before name',() =>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.nameSpaceFront, cssselectors.action_tbx)
})

it('Testing that the website accepts space between name',() =>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.nameSpaceBet, cssselectors.action_tbx)
})

it('Testing that the website accepts space after name',() =>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.nameSpaceBack, cssselectors.action_tbx)
})

it('Testing that the website accepts space before phone number',() =>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.phoneSpaceFront, cssselectors.action_tbx)
})

it('Testing that the website accepts space in between phone number ',() =>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.phoneSpaceBet, cssselectors.action_tbx)
})

it('Testing that the website accepts space after phone number',() =>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.phoneSpaceBack, cssselectors.action_tbx)
})

it('Testing that the website accepts space in front of entering email',() =>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.emailSpaceFront, cssselectors.action_tbx)
})

it('Testing that the website accepts space between entering email',() =>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.emailSpaceBet, cssselectors.action_tbx)
})

it('Testing that the website accepts space after entering email',() =>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.emailSpaceBack, cssselectors.action_tbx)
})

it('Testing if the name field accepts number',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.phoneT, cssselectors.action_tbx)
})

it('Testing if the name field accepts number at the end',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.numberInName, cssselectors.action_tbx)
})

it('Testing if the name field accepts number at the middle',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.numberInNameMid, cssselectors.action_tbx)
})

it('Testing if the name field accepts number at the front',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.numberInNameFront, cssselectors.action_tbx)
})

it('Testing if the email field accepts number in middle of the email ID',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.numberInEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts number in front of the email ID',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.numberInEmailFront, cssselectors.action_tbx)
})

it('Testing if the email field accepts number at the back of the email ID',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.numberInEmailBack, cssselectors.action_tbx)
})

it('Testing if the number field accepts all alphabets in the phone number field',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.alphaInNum, cssselectors.action_tbx)
})

it('Testing if the number field accepts alphabets in front of phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.aplhaInNumFront, cssselectors.action_tbx)
})

it('Testing if the number field accepts alphabets in middle of phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.alphaInNumMid, cssselectors.action_tbx)
})

it('Testing if the number field accepts alphabets in back of phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.alphaInNumBack, cssselectors.action_tbx)
})

it('Testing if the name field accepts special character in front of the name',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.spCharFrontName, cssselectors.action_tbx)
})

it('Testing if the name field accepts special character in middle of the name',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.spCharMidName, cssselectors.action_tbx)
})

it('Testing if the name field accepts special character in end of the name',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.spCharBackName, cssselectors.action_tbx)
})

it('Testing if the phone field accepts special character in front of the phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.spCharFrontNum, cssselectors.action_tbx)
})

it('Testing if the phone field accepts special character in middle of the phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.spCharMidNum, cssselectors.action_tbx)
})

it('Testing if the phone field accepts special character in back of the phone number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.spCharBackNum, cssselectors.action_tbx)
})

it('Testing if the email field accepts no special character in middle of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.noSpInEmail, cssselectors.action_tbx)
}) 

it('Testing if the email field accepts no special character in front of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.spCharInFrontEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts no special character in back of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.spCharInBackEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts no @ sign but dot in the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.noAtSignInEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts @ sign but no dot in the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.noDtSignInEmail, cssselectors.action_tbx)
})

it('Testing if the name field accepts all uppercase characters',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.allUpCaseName, cssselectors.action_tbx)
})

it('Testing if the name field accepts repetitive names',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.repName, cssselectors.action_tbx)
})

it('Testing if the name field accepts all uppercase characters in middle of the name',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.upCaseInMidName, cssselectors.action_tbx)
})

it('Testing if the name field accepts all uppercase characters in baCK of the name',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.upCaseInBackName, cssselectors.action_tbx)
})

it('Testing if the email field accepts all uppercase characters',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.allUpCaseEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts uppercase characters in front of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.allUpCaseInFrontEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts uppercase characters in middle of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.allUpCaseInMidEmail, cssselectors.action_tbx)
})

it('Testing if the email field accepts uppercase characters at the back of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.allUpCaseInBackEmail, cssselectors.action_tbx)
})

it('Testing if the name field accepts all lowercase characters',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.allLowerCaseInName, cssselectors.action_tbx)
})

it('Testing if the email field accepts email id without .com the back of the email',()=>{
  cy.enterDataInOneField(cssselectors.email_tbx, example.emailWithOutCom, cssselectors.action_tbx)
})

it('Testing if the phone field accepts number that has 11 characters',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numLong11, cssselectors.action_tbx)
})

it('Testing if the phone field accepts number that has 9 characters',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numShort10, cssselectors.action_tbx)
})

it('Testing if the phone field accepts number that has 9 characters',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numShort1, cssselectors.action_tbx)
})

it('Testing if the phone field accepts dashes in between number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numDashes, cssselectors.action_tbx)
})

it('Testing if the phone field accepts country code with + sign in between number',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numCounCode, cssselectors.action_tbx)
})

it('Testing if the phone field accepts brackets',()=>{
  cy.enterDataInOneField(cssselectors.phone_tbx, example.numBrackets, cssselectors.action_tbx)
})

it('Testing if the name field accepts only 1 character',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.name1CHar, cssselectors.action_tbx)
})

it('Testing if the name field accepts more than 10 characters',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.name15char, cssselectors.action_tbx)
})

it('Testing if the name field accepts more than 20 characters',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.name25Char, cssselectors.action_tbx)
})

it('Testing if the name field accepts less than 10 characters',()=>{
  cy.enterDataInOneField(cssselectors.name_tbx, example.name10char, cssselectors.action_tbx)
})

//Below are logical scenarios. For exmaple, the contact number should only accept 10 digits, and fail otherwise
it('Testing if the phone accepts exactly 10 digits',()=>{
  cy.phoneNoExactly10Chars(cssselectors.phone_tbx, example.phoneT, cssselectors.action_tbx)
})

it('Testing if the email contains no @ sign',()=>{
  cy.emailWithAtSign(cssselectors.email_tbx, example.emailT, cssselectors.action_tbx)
})


// The below test cases for phone number field should logically fail as the number can only be 10 digits long
it('Testing if the phone accepts less than 10 digits',()=>{
  cy.phoneNoExactly10Chars(cssselectors.phone_tbx, example.lessThan10Num, cssselectors.action_tbx)
})

it('Testing if the phone accepts more than 10 digits',()=>{
  cy.phoneNoExactly10Chars(cssselectors.phone_tbx, example.moreThan10Num, cssselectors.action_tbx)
})


// The below test cases for email field should logically fail as the email should always contain '@' and '.' sign
it('Testing if the email contains no @ sign',()=>{
  cy.emailWithAtSign(cssselectors.email_tbx, example.noAtSignInEmail, cssselectors.action_tbx)
})

it('Testing if the email contains no @ sign',()=>{
  cy.emailWithNoDotSign(cssselectors.email_tbx, example.noDtSignInEmail, cssselectors.action_tbx)
})

})