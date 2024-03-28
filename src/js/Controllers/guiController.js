import { Drawer } from "../gui/Drawer.js";

export class guiController {
    #drawer
    
    buildGui() {
        this.#drawer = new Drawer("menuDrawer", "btnToggleDrawer");
        
    }
}