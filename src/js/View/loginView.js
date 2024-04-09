import { AuthController } from "../Controllers/firebase/AuthFirebaseController.js";
const authController = new AuthController()


    function login(){  
        document.getElementById("btnLogin").addEventListener("click", function() {
            try {
                authController.autenticarUsuario();
            } catch (error) {
                console.error('Erro durante a autenticação do usuário:', error);
            }
        });
}
export{login}