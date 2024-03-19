export class guiController {
    #btnToggleDrawer
    #menuDrawer
    
    constructor() {
        this.#btnToggleDrawer = document.getElementById("btnToggleDrawer");
        this.#menuDrawer = document.getElementById("menuDrawer");

        this.#btnToggleDrawer.addEventListener(
            "click",
            ()=>{
                if (document.getElementById("menuDrawer").style.display == "") {
                    document.getElementById("menuDrawer").style.display = "block";
                    return;
                }

                if (document.getElementById("menuDrawer").style.display == "none") {
                    document.getElementById("menuDrawer").style.display = "block";
                } else {
                    document.getElementById("menuDrawer").style.display = "none";
                }
            }
        )
    }
}