import AuthController from "../Controllers/firebase/AuthFirebaseController";

const authController = new AuthController()

document.getElementById("btnRegister").addEventListener("click", function() {
    authController.CadastrarUsuário()
    console.log('Cadastrando Usuário')
});
