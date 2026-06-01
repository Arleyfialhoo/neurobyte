// Perguntas embutidas diretamente — sem fetch, funciona em qualquer ambiente incluindo GitHub Pages
const perguntas = [
    {
        "id": 1,
        "pergunta": "A tecnologia está presente principalmente em quais aspectos da vida moderna?",
        "respostas": [
            { "texto": "Apenas na indústria", "correta": false },
            { "texto": "Apenas na educação", "correta": false },
            { "texto": "Em várias atividades do cotidiano", "correta": true },
            { "texto": "Apenas em pesquisas científicas", "correta": false }
        ]
    },
    {
        "id": 2,
        "pergunta": "O que significa a sigla HTML?",
        "respostas": [
            { "texto": "High-Tech Markup Language", "correta": false },
            { "texto": "Home Tool Markup Language", "correta": false },
            { "texto": "Hyperlinks Text Management Language", "correta": false },
            { "texto": "HyperText Markup Language", "correta": true }
        ]
    },
    {
        "id": 3,
        "pergunta": "Qual tag é utilizada para criar um link em HTML?",
        "respostas": [
            { "texto": "<href>", "correta": false },
            { "texto": "<link>", "correta": false },
            { "texto": "<a>", "correta": true },
            { "texto": "<url>", "correta": false }
        ]
    },
    {
        "id": 4,
        "pergunta": "Qual elemento HTML é considerado semântico para definir o rodapé de uma página ou seção?",
        "respostas": [
            { "texto": "<bottom>", "correta": false },
            { "texto": "<section-end>", "correta": false },
            { "texto": "<footer>", "correta": true },
            { "texto": "<end>", "correta": false }
        ]
    },
    {
        "id": 5,
        "pergunta": "Qual componente do computador é responsável por processar informações?",
        "respostas": [
            { "texto": "Monitor", "correta": false },
            { "texto": "CPU", "correta": true },
            { "texto": "Teclado", "correta": false },
            { "texto": "Impressora", "correta": false }
        ]
    },
    {
        "id": 6,
        "pergunta": "Qual tecnologia conecta bilhões de dispositivos ao redor do mundo?",
        "respostas": [
            { "texto": "Bluetooth", "correta": false },
            { "texto": "Internet", "correta": true },
            { "texto": "Rádio", "correta": false },
            { "texto": "Satélite", "correta": false }
        ]
    },
    {
        "id": 7,
        "pergunta": "Qual a diferença entre as tags <ul> e <ol>?",
        "respostas": [
            { "texto": "<ul> é usada apenas para menus e <ol> para textos longos.", "correta": false },
            { "texto": "<ul> é para listas ordenadas e <ol> para listas não ordenadas.", "correta": false },
            { "texto": "Não há diferença, ambas funcionam da mesma forma.", "correta": false },
            { "texto": "<ul> cria listas com marcadores (bullets) e <ol> cria listas numeradas.", "correta": true }
        ]
    },
    {
        "id": 8,
        "pergunta": "Qual propriedade CSS é usada para alterar a cor do texto de um elemento?",
        "respostas": [
            { "texto": "text-color", "correta": false },
            { "texto": "color", "correta": true },
            { "texto": "background-color", "correta": false },
            { "texto": "font-color", "correta": false }
        ]
    },
    {
        "id": 9,
        "pergunta": "Qual pseudo-classe é usada para estilizar um link ou botão quando o mouse está sobre ele?",
        "respostas": [
            { "texto": ":hover", "correta": true },
            { "texto": ":visited", "correta": false },
            { "texto": ":active", "correta": false },
            { "texto": ":focus", "correta": false }
        ]
    },
    {
        "id": 10,
        "pergunta": "O que a inteligência artificial permite que as máquinas façam?",
        "respostas": [
            { "texto": "Apenas armazenar arquivos", "correta": false },
            { "texto": "Aprender com dados e realizar tarefas", "correta": true },
            { "texto": "Apenas acessar a internet", "correta": false },
            { "texto": "Apenas imprimir documentos", "correta": false }
        ]
    },
    {
        "id": 11,
        "pergunta": "O que é computação em nuvem?",
        "respostas": [
            { "texto": "Um tipo de computador portátil", "correta": false },
            { "texto": "Um sistema de jogos online", "correta": false },
            { "texto": "Armazenamento e acesso de dados pela internet", "correta": true },
            { "texto": "Um tipo de processador", "correta": false }
        ]
    },
    {
        "id": 12,
        "pergunta": "Qual tag é usada para inserir uma quebra de linha simples no texto?",
        "respostas": [
            { "texto": "<break>", "correta": false },
            { "texto": "<br>", "correta": true },
            { "texto": "<lthr>", "correta": false },
            { "texto": "<lb>", "correta": false }
        ]
    },
    {
        "id": 13,
        "pergunta": "Qual o objetivo principal do atributo alt em uma tag <img>?",
        "respostas": [
            { "texto": "Fornecer um texto alternativo para acessibilidade e casos de erro de carregamento.", "correta": true },
            { "texto": "Aplicar um filtro de cor na imagem.", "correta": false },
            { "texto": "Criar uma legenda visível abaixo da imagem.", "correta": false },
            { "texto": "Definir a altura da imagem em pixels.", "correta": false }
        ]
    },
    {
        "id": 14,
        "pergunta": "Qual é um dos desafios do avanço da tecnologia?",
        "respostas": [
            { "texto": "Falta de computadores", "correta": false },
            { "texto": "Falta de energia elétrica", "correta": false },
            { "texto": "Segurança digital e privacidade de dados", "correta": true },
            { "texto": "Falta de programadores", "correta": false }
        ]
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const questaoElement = document.getElementById("questao");
const botoesElement = document.getElementById("botoes");
const proximoBotao = document.getElementById("proximo");
const barra = document.getElementById("barra");

function atualizarBarra() {
    const progresso = (perguntaAtual / perguntas.length) * 100;
    barra.style.width = progresso + "%";
}

function iniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    atualizarBarra();
    mostrarPergunta();
}

function mostrarPergunta() {
    botoesElement.innerText = '';
    proximoBotao.style.display = 'none';
    atualizarBarra();

    let qAtual = perguntas[perguntaAtual];
    questaoElement.innerText = (perguntaAtual + 1) + ". " + qAtual.pergunta;

    qAtual.respostas.forEach(resp => {
        const btn = document.createElement("button");
        btn.textContent = resp.texto;
        btn.classList.add("btn");

        btn.onclick = () => {
            Array.from(botoesElement.children).forEach(b => b.disabled = true);

            if (resp.correta) {
                btn.classList.add("correct");
                pontuacao++;
            } else {
                btn.classList.add("incorrect");
                Array.from(botoesElement.children).forEach(b => {
                    const index = Array.from(botoesElement.children).indexOf(b);
                    if (qAtual.respostas[index] && qAtual.respostas[index].correta) {
                        b.classList.add("correct");
                    }
                });
            }
            proximoBotao.style.display = 'block';
        };
        botoesElement.appendChild(btn);
    });
}

proximoBotao.onclick = () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        barra.style.width = "100%";

        const percentual = Math.round((pontuacao / perguntas.length) * 100);
        let mensagem = "";
        if (percentual === 100) mensagem = "🏆 Perfeito! Parabéns!";
        else if (percentual >= 70) mensagem = "✅ Muito bem!";
        else if (percentual >= 50) mensagem = "📚 Continue estudando!";
        else mensagem = "💪 Não desista, tente novamente!";

        questaoElement.innerText = `Fim! Você acertou ${pontuacao} de ${perguntas.length} questões (${percentual}%). ${mensagem}`;
        botoesElement.innerText = '';
        proximoBotao.style.display = 'none';

        const reiniciar = document.createElement("button");
        reiniciar.innerText = "Tentar Novamente";
        reiniciar.id = "proximo";
        reiniciar.style.display = "block";
        reiniciar.style.marginTop = "20px";
        reiniciar.onclick = () => iniciarQuiz();
        botoesElement.appendChild(reiniciar);
    }
};

iniciarQuiz();
