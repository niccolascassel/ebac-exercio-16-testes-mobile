const homeScreen = require('../screens/home.screen')
const formsScreen = require('../screens/forms.screen')

describe('Change Forms Components', () => {

    before(async () => {
        await homeScreen.formsComponents()
    })

    it('Should fill input field element', async () =>{

        let inputText = 'Níccolas F. Cassel'
        await formsScreen.setTextInputValue(inputText)
        expect(await formsScreen.getInputTextResultText()).toEqual(inputText)
    })

    it('Should change switch status', async () =>{

        await formsScreen.clickSwitch()
        expect(await formsScreen.getSwitchTextValue()).toEqual('Click to turn the switch OFF')
    })

    it('Should change dropdown value', async () =>{

        await formsScreen.changeDropdownValue()
        expect(await formsScreen.getDropdownValue()).toEqual('Appium is awesome')
    }) 
})