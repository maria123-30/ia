const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
 {
   enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
   alternativas: [
       {
           texto: "Isso é assustador!",
           afirmacao: "No início, você sentiu receio em relação ao avanço acelerado da IA."
       },
       {
           texto: "Isso é maravilhoso!",
           afirmacao: "Desde o primeiro contato, você se entusiasmou com as possibilidades da IA."
       }
   ]
 },
 {
   enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
   alternativas: [
       {
           texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
           afirmacao: "Aproveitou a tecnologia para otimizar suas pesquisas e aprender de forma mais ágil."
       },
       {
           texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
           afirmacao: "Preferiu confiar no método tradicional de pesquisa e na troca de conhecimentos com seus colegas."
       }
   ]
 },
 {
   enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
   alternativas: [
       {
           texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
           afirmacao: "Defendeu uma visão otimista sobre o futuro do trabalho com o suporte das tecnologias."
       },
       {
           texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
           afirmacao: "Trouxe uma perspectiva crítica e humanista quanto à preservação dos empregos frente à automação."
       }
   ]
 },
 {
   enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
   alternativas: [
       {
           texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
           afirmacao: "Optou por utilizar ferramentas manuais de criação digital para expressar suas ideias."
       },
       {
           texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
           afirmacao: "Experimentou o uso prático de geradores de imagem para expressar sua visão criativa."
       }
   ]
 },
 {
   enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
   alternativas: [
       {
           texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
           afirmacao: "Considera que a própria elaboração de comandos para a IA já é uma contribuição válida."
       },
       {
           texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
           afirmacao: "Entende que a automação precisa de supervisão humana e pensamento crítico constante."
       }
   ]
 },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
       exibeResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = ""; // Limpa as alternativas da pergunta anterior
   mostraAlternativas();
}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement("button");
       botaoAlternativa.textContent = alternativa.texto;
       botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativa);
   }
}

function respostaSelecionada(opcaoSelecionada) {
   historiaFinal += opcaoSelecionada.afirmacao + " ";
   atual++;
   mostraPergunta();
}

function exibeResultado() {
   caixaPerguntas.textContent = "Em resumo, suas escolhas mostram:";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
   caixaResultado.classList.remove("esconder"); // Garante a exibição do resultado se houver uma classe CSS de ocultação
}

mostraPergunta();