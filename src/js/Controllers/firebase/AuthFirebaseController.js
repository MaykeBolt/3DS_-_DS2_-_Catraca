import { UserController } from "../UserController.js";
import { Auth } from "./fbInitializeApp.js";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

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

    if (!emailVal || !senhaVal) {
      alert("Email e/ou senha inválidos");
      throw new Error('Email e/ou senha inválidos');
    }
    createUserWithEmailAndPassword(this.auth, email, senha)
      .then((userRecord) => {
        console.log("Usuário Criado com sucesso:", userRecord.uid);
        setTimeout(function(){
          window.location.href = "/"
        }, 500)
      })
      .catch((error) => {
        console.log("Erro ao criar o usuário:", error);
        
      });
  }
  async autenticarUsuario() {
    console.log('Login iniciado')
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    signInWithEmailAndPassword(this.auth, email, senha)
      .then(function (userCredential) {
        const user = userCredential.user;
        console.log("Login bem sucedido! Bem-vindo, " + user.email);
        setTimeout(function(){
          window.location.href = "/"
        }, 500)
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

export{AuthController}