import { AuthController } from "../Controllers/firebase/AuthFirebaseController.js";

const authController = new AuthController()
function cadastrar(){
    
document.getElementById("btnRegister").addEventListener("click", async function() {
    try {
        await authController.CadastrarUsuário();
    } catch (error) {
        console.error('Erro durante a autenticação do usuário:', error);
    }
});
}
export{cadastrar}
