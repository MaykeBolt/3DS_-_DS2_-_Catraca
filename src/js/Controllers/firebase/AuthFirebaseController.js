import { UserController } from "../UserController";
import { Auth } from "./fbInitializeApp.ja";

 class AuthController {
  userController;
  auth;
  constructor() {
    this.auth = Auth;
    this.userController = new UserController();
  }

  async CadastrarUsuário() {
    console.log('Cadastro iniciado')
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    const emailVal = await this.userController.validarEmail(email);
    const senhaVal = await this.userController.verificarSenhaForte(senha);

    if (emailVal || senhaVal === false) {
      alert("Email e/ou senha incorretos");
      return;
    }
    this.auth
      .createUser({
        email: email,
        emailVerified: false,
        senha: senha,
        displayName: nome,
      })
      .then((userRecord) => {
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  }
  async autenticarUsuario() {
    console.log('Login iniciado')
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if (emailVal || senhaVal === false) {
      alert("Email e/ou senha incorretos");
      return;
    }
    this.auth
      .signInWithEmailAndPassword(email, senha)
      .then(function (userCredential) {
        const user = userCredential.user;
        console.log("Login bem sucedido! Bem-vindo, " + user.email);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Erro ao autenticar o usuário: " + errorMessage + errorCode);
      });
  }

  // Exemplo de uso do SDK do Firebase
  // Função para verificar se o email existe no Firebase Authentication
  async verificarEmail() {
    let email = document.getElementById("email").value;
    this.auth
      .fetchSignInMethodsForEmail(email)
      .then(function (signInMethods) {
        if (signInMethods.length == 0) {
          console.log("O email não está registrado.");
        } else {
          alert("O email está registrado.");
        }
      })
      .catch(function (error) {
        alert("Erro ao verificar o email: " + error.message);
      });
  }
}

export default AuthController