import PromptSync from "prompt-sync";

//nodeimport { verificarMaiorIdade } from "./ligar";node 
import { ImprimirNumerosPares } from "../ResolucaoWhile/ex6.js"
import { CalcularASoma } from "../ResolucaoWhile/ex7.js"
import { RecebaIdade } from "../ResolucaoWhile/ex8.js"
import { ContagemRegressiva } from "../ResolucaoWhile/ex9.js"
import { NumeroDiferente } from "../ResolucaoWhile/ex10.js"

const prompt = PromptSync();

// menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 4: "));


    switch (exercicio) {
        case 1:
            // chamando helloworld
            helloworld("Hello world !!!!");
            break;
        case 2:
            // objeto
            let aluno = {
                nome: "rebeca",
                idade: "19",
                hardSkills: ["figma", "Html", "css", "web responsive"]
            }
            // acessando objeto pelo propriedade
            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            //exibindo objeto inteiro
            console.log("objeto aluno", aluno);

            break; //finalizar

        case 3: ImprimirNumerosPares();
            break;


        case 4: CalcularASoma();
            break;

        case 5: RecebaIdade();
            break;

        case 6: ContagemRegressiva();
            break;


        case 7: NumeroDiferente();
            break;


        default:
            console.log("Digite um numero de 1 a 7!!!");
            break;
    }

    continuar = prompt("Deseja continuar ver outros exercicios ? Digite s para sim e n para nao: ")//.toLocaleLowerCase tranforma otexto em minusculo

} while (continuar.toLocaleLowerCase() === "s");


function helloworld(frase) {

    console.log(frase);

}