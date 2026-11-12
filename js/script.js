import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';


const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoInciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


botaoInciar.addEventListener('click', iniciaJogo);


function iniciaJogo() {
   atual = 0;
   historiaFinal = "";
   telaInicial.style.display = 'none';
   caixaPerguntas.classList.remove("mostrar");
   caixaAlternativas.classList.remove("mostrar");
   caixaResultado.classList.remove("mostrar");
   mostraPergunta();
}


function mostraPergunta() {
   caixaResultado.style.display = "none";
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }


   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";


   mostraAlternativas();
}


function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => {
           respostaSelecionada(alternativa);
       });


       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
   historiaFinal += afirmacao + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
   caixaResultado.style.display = "block";
}


function jogaNovamente() {
   atual = 0;
   historiaFinal = "";
   mostraPergunta();
}


botaoJogarNovamente.addEventListener("click", jogaNovamente);


substituiNome()
