import mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
import { Drawer } from "../gui/Drawer.js";

export class guiController {
    #guiComponents = {}
    
    buildGui() {
        this.#guiComponents.drawer = new Drawer("menuDrawer", "btnToggleDrawer");
        this.#renderGuiComponents();
    }

    #renderGuiComponents() {
        this.#guiComponents.drawer.render();
    }
}