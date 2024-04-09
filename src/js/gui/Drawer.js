import mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"
export class Drawer {
    btnToggleDrawerProp;
    drawerProp;

    drawerMenuItens = [
        {
            label: "Login",
            elmId: "drawerMenuItem_Login",
            action: "open_view_login",
            link: "../../components/login.html"
        },
        {
            label: "Registrar",
            elmId: "drawerMenuItem_Register",
            action: "open_view_register",
            link: "../../components/register.html"
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
        if (window.location.pathname === "/components/login.html") {
            this.drawerMenuItens[0] = {label: "Voltar a página inicial",
            elmId: "drawerMenuItem_Index",
            action: "open_view_index",
            link: "../index.html"}
        } else if (window.location.pathname === "/components/register.html") {
            this.drawerMenuItens[1] = {label: "Voltar a página inicial",
            elmId: "drawerMenuItem_Index",
            action: "open_view_index",
            link: "../index.html"}
        }
        const renderedMenu = mustache.render(template, {menuItens: this.drawerMenuItens});
        this.drawerProp.innerHTML = renderedMenu;
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