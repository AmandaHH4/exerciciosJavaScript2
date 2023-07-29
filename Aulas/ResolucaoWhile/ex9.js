// 9.	Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

//chama o pacote prompt-sync
import PromptSync from "prompt-sync";

//chama a funcao do pacote prompt
const prompt = PromptSync()

export function ContagemRegressiva () {
    
  
    let numero = parseInt(prompt("Digite um numero: "))
    
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}