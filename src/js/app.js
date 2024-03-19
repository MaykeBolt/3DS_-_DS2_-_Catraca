import { appController } from "./Controllers/AppController.js";
import { guiController } from "./Controllers/guiController.js";

const appInstance = new appController();
appInstance.setGuiController(new guiController());

export {appInstance}