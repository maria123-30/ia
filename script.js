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
                afirmacao: "No início, ficou com medo do avanço acelerado da tecnologia."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Desde o princípio, viu o potencial positivo da inteligência artificial."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia... a professora de tecnologia... decidiu fazer uma sequência de aulas... No fim de uma aula ela pede que você escreva um trabalho... Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA...",
                afirmacao: "Acha que a IA é uma ferramenta que facilita a busca por informações."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas...",
                afirmacao: "Prefere métodos tradicionais de pesquisa e valoriza o debate humano."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho... como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades...",
                afirmacao: "Acredita que a IA trará novas oportunidades de emprego."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos...",
                afirmacao: "Teme o impacto social do desemprego causado pela automação."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Prefere usar ferramentas manuais para expressar sua criatividade."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Adotou a IA como uma ferramenta de auxílio na criação visual."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia... uma pessoa do seu grupo decidiu fazer com ajuda de uma IA... o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir...",
                afirmacao: "Acredita que o uso direto da IA sem edição é aceitável."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção...",
                afirmacao: "Defende que a revisão humana é essencial para garantir a qualidade e a ética."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    // Limpa as alternativas anteriores antes de mostrar as novas
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        // Acessa a propriedade .texto do objeto de alternativa
        botaoAlternativas.textContent = alternativa.texto;
        // Adiciona o botão na tela
        caixaAlternativas.appendChild(botaoAlternativas);
        
        // Evento opcional para avançar para a próxima pergunta ao clicar
        botaoAlternativas.addEventListener("click", () => {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                caixaPerguntas.textContent = "Fim do Quiz!";
                caixaAlternativas.textContent = "";
            }
        });
    }
}

mostraPergunta();