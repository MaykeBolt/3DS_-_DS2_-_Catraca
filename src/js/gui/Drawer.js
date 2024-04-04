export class Drawer {
    btnToggleDrawerProp;
    drawerProp;

    constructor(drawerId, btnId){
        this.drawerProp = document.getElementById(drawerId);
        this.drawerProp.style.display = "none";
        this.btnToggleDrawerProp = document.getElementById(btnId);
        this.btnToggleDrawerProp.addEventListener('click', () => {this.toggleDrawer()});
    }

    #openDrawer() {
        this.drawerProp.style.display = "block";
    }

    #closeDrawer() {
        this.drawerProp.style.display = "none";
    }

    toggleDrawer() {
        if(this.drawerProp.style.display === "none") {
            this.#openDrawer();
        } else {
            this.#closeDrawer();
        }
    }
}