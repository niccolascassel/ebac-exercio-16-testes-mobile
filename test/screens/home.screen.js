const selector = 'new UiSelector().description("__DESC__").className("__CLASS__")'

class HomeScreen{

    get #enterFormsComponents() {
        return $(`android=${selector.replace("__DESC__", "Forms").replace("__CLASS__", "android.widget.Button")}`)
    }

    async formsComponents() { 
        await this.#enterFormsComponents.click()
    }
}

module.exports = new HomeScreen()