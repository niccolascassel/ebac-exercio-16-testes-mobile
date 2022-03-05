class FormsScreen{

    get #textInput() {
        return $('~text-input')
    }

    get #inputTextResult() {
        return $('~input-text-result')
    }

    get #switch() {
        return $('~switch')
    }

    get #switchText() {
        return $('~switch-text')
    }

    get #dropDownEditText() {
        return $('~Dropdown')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(1)')
                .$('android=new UiSelector().className("android.widget.EditText").index(0)')
    }

    get #appiumIsAwesomeCheckedTextView() {
        return $('android=new UiSelector().className("android.widget.CheckedTextView").index(2)')
    }

    get #buttonActive() {
        return $('android=new UiSelector().className("android.view.ViewGroup").description("button-Active")')
    }

    get #messageTextView() {
        return $('id:message')
    }

    get #button1() {
        return $('id:button1')
    }

    async setTextInputValue(input) { 
        await this.#textInput.setValue(input)
    }

    async getInputTextResultText() { 
        return await this.#inputTextResult.getText()
    }

    async clickSwitch() { 
        await this.#switch.click()
    }

    async getSwitchTextValue() { 
        return await this.#switchText.getText()
    }

    async changeDropdownValue() {
        await this.#dropDownEditText.click()
        await this.#appiumIsAwesomeCheckedTextView.click()
    }

    async getDropdownValue() {
        return await this.#dropDownEditText.getText()
    }
}

module.exports = new FormsScreen()