
import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Selecionando os elementos do HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

// Variáveis do jogo
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Mostra a pergunta atual
function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

// Mostra as alternativas da pergunta
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

// Registra a resposta escolhida
function respostaSelecionada(opcaoSelecionada) {

    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

// Mostra o resultado final
function mostraResultado() {

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

    caixaResultado.style.display = "block";
}

// Reinicia o jogo
function jogaNovamente() {

    atual = 0;

    historiaFinal = "";

    caixaResultado.style.display = "none";

    mostraPergunta();
}

// Botão para jogar novamente
botaoJogarNovamente.addEventListener("click", jogaNovamente);

// Inicia o jogo
mostraPergunta();
