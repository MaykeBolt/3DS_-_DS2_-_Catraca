import AuthController from "../Controllers/firebase/AuthFirebaseController";

const authController = new AuthController()

document.getElementById("btnLogin").addEventListener("click", function() {
    authController.autenticarUsuario()
    console.log('Processando Login')
});
