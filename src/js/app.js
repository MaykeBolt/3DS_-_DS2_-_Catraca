import { appController } from "./Controllers/AppController.js";
import { guiController } from "./Controllers/guiController.js";

console.log("app.js is working.")
const appInstance = new appController();
appInstance.setGuiController(new guiController());

export {appInstance}