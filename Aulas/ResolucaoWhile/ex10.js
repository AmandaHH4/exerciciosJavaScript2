// 10. Faça um programa que receba um número do usuário e continue a pedir o numero se o numero for diferente de 0.
//chama o pacote prompt-sync
import PromptSync from "prompt-sync";

//chama a funcao do pacote prompt
const prompt = PromptSync()
//const prompt = require('prompt-sync')()

export function NumeroDiferente() {

    let numero;

    do {

        numero = prompt("Digite um numero: ")

    } while (numero != "0");
}