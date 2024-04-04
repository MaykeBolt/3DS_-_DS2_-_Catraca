import mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
export class Drawer {
    btnToggleDrawerProp;
    drawerProp;

    drawerMenuItens = [
        {
            label: "Login",
            elmId: "drawerMenuItem_Login",
            action: "open_view_login",
            //link: ""
        },
        {
            label: "Registrar",
            elmId: "drawerMenuItem_Register",
            action: "open_view_register",
            //link: ""
        }
    ]

    constructor(drawerId, btnId){
        this.drawerProp = document.getElementById(drawerId);
        this.drawerProp.style.display = "none";
        this.btnToggleDrawerProp = document.getElementById(btnId);
        this.btnToggleDrawerProp.addEventListener('click', () => {this.toggleDrawer()});
    }

    render() {
        const template = document.getElementById("DrawerMenuTemplate").innerHTML;
        const renderedMenu = mustache.render(template, {menuItens: this.drawerMenuItens});
        this.drawerProp.innerHTML = renderedMenu
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