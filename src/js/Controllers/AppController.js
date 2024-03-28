export class appController {
    setGuiController(guiCtrlInstance) {
        console.log("appController.js is working.")
        this.guiCtrl = guiCtrlInstance;
        this.guiCtrl.buildGui();
    }

}