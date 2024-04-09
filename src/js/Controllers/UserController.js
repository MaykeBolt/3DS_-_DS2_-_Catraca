import { Auth } from "./firebase/fbInitializeApp.js";

export class UserController{

    validarEmail(email) {
        // Expressão regular para validar um email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validation = regex.test(email);
        if(!validation){ 
            window.alert('Este email não é válido')
            return false
        } 
        console.log('Este email é válido')
        return true
    }
    verificarSenhaForte(senha) {
        // Verifica se a senha tem pelo menos 8 caracteres
        if (senha.length < 8) {
            window.alert('Senha fraca: A senha possui menos de 8 caracteres')
            return false;
        }
    
        // Verifica se a senha contém pelo menos uma letra maiúscula
        if (!/[A-Z]/.test(senha)) {
            window.alert('Senha fraca: A senha não possui letra maiúscula')
            return false;
        }
    
        // Verifica se a senha contém pelo menos uma letra minúscula
        if (!/[a-z]/.test(senha)) {
            window.alert('Senha fraca: A senha não possui letra minúscula')
            return false;
        }
    
        // Verifica se a senha contém pelo menos um número
        if (!/[0-9]/.test(senha)) {
            
            window.alert('Senha fraca: A senha não possui números')
            return false;
        }
    
        // Verifica se a senha contém pelo menos um caractere especial
        if (!/[^A-Za-z0-9]/.test(senha)) {
            window.alert('Senha fraca: A senha não possui caracteres especiais')
            return false;
        }
    
        // Se a senha passar por todas as verificações, consideramos ela forte
        console.log('Esta senha é válida')
        return true;
    }
    showCurrentUser(){
        console.log("function showCurrentUser(){...");
        document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
    }
    logout(){
        try{
            Auth.signOut();
            showCurrentUser();//update lbUserLoggedIn label
        }catch(e){
            alert(e);
        }
    }    
       
}