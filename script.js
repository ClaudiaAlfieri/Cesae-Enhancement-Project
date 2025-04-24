//Adicionar o Boostrap
const bootstrapCSS = document.createElement("link");
bootstrapCSS.rel = "stylesheet";
bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
bootstrapCSS.integrity = "sha384-rbsA2VBKQBYdVmgpVeAwQmLmHjUay3QcvMa3E8lFsdm9A5z7U78KxRk8tBT1EdzG";
bootstrapCSS.crossOrigin = "anonymous";
document.head.appendChild(bootstrapCSS);

// Adicionar o JavaScript do Bootstrap 
const bootstrapJS = document.createElement("script");
bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
bootstrapJS.integrity = "sha384-7h/j7NfWtK2YD2LezO0sZBBEd1YgLa8OJeF3hxRAEqiq92U80/6+L5SLfKm7I4l2";
bootstrapJS.crossOrigin = "anonymous";
document.body.appendChild(bootstrapJS);

/* ***************************************************************************************************** */

/* Missão 1: Correção de Bugs Urgente!  */

// Correções e melhorias na seção "Sobre Nós":

document.addEventListener("DOMContentLoaded", function() {
    const sobre = document.getElementById("sobre");
    const listaCursos = sobre.querySelector("ul");
    
    // Adicionar novos cursos
    const novosCursos = ["Comunicação Digital", "Formação de formadores"];
    novosCursos.forEach(curso => {
        let li = document.createElement("li");
        li.textContent = curso;
        listaCursos.appendChild(li);
    });

    // Configurar classes e estilos para combinar com outras seções
    sobre.style.cssText = `
        width: 82%;
        max-width: 90%;
        margin: 40px auto;
        padding: 40px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f9f9f9;
    `;

    // Configurar classes para elementos internos
    const sobreH2 = sobre.querySelector("h2");
    if (sobreH2) {
        sobreH2.className = 'text-center mb-4';
    }

    const paragrafos = sobre.querySelectorAll("p");
    paragrafos.forEach(p => {
        p.className = 'mb-4 mx-4';
        p.style.textAlign = 'justify';
    });

    if (listaCursos) {
        listaCursos.className = 'mb-4 mx-4';
    }

    const carrosselImg = sobre.querySelector(".img-carrousel");
    if (carrosselImg) {
        carrosselImg.className = 'img-fluid rounded mb-4';
        carrosselImg.style.borderRadius = '15px';
    }

    // Ajuste responsivo
    function ajustarResponsividade() {
        sobre.style.width = window.innerWidth <= 768 ? '95%' : '82%';
    }

    window.addEventListener('resize', ajustarResponsividade);
    ajustarResponsividade();
});

/* ***************************************************************************************************** */

// Correções e melhorias na seção "Cursos":


document.addEventListener("DOMContentLoaded", function () {
    const cursosSection = document.getElementById("cursos");

    if (cursosSection) {
        // Adiciona uma classe de container responsivo do Bootstrap
        cursosSection.classList.add("container", "py-4");
        
        // Adiciona os estilos para combinar com as outras seções
        cursosSection.style.cssText = "width: 82%;max-width: 90%; margin: 40px auto; padding: 40px; border-radius: 10px; overflow: hidden; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f9f9f9;";

        // Centraliza o título
        const cursosH2 = cursosSection.querySelector("h2");
        if (cursosH2) {
            cursosH2.style.textAlign = "center";
            cursosH2.style.paddingBottom = "20px";
        }

        const row = cursosSection.querySelector(".row");
        if (row) {
            // Define colunas responsivas para diferentes tamanhos de tela
            row.classList.add("row", "g-4", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4");
            // Ajusta o width do row para ocupar todo o espaço disponível
            row.style.width = "100%";
        }
    }

    // Seleciona todos os cards da seção cursos
    const cards = document.querySelectorAll("#cursos .card");

    cards.forEach(card => {
        card.style.marginBottom = "20px";
        card.style.transition = "transform 0.3s ease-in-out";
        card.style.borderRadius = "15px";
        card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        card.style.textAlign = "center";

        const img = card.querySelector("img");
        if (img) {
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "15px 15px 0 0";
        }

        // Efeito de hover ao passar o rato
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});

/* ***************************************************************************************************** */

//Melhorar a aparência do site:

// Incluir o logo do Cesae na navbar
   
const navbar = document.querySelector(".navbar");
const logo = document.createElement("img");
logo.src = "imagens/logo_cesae.png"; 
logo.alt = "Logo Cesae";
logo.style.height = "80px"; 
logo.style.marginRight = "10px"; 

// Seleciona o link do Cesae e trocar pelo logo
const navbarBrand = document.querySelector(".navbar-brand");
navbarBrand.replaceWith(logo);


//Corrigindo o Menu Hamburguer na versão Mobile da página

document.addEventListener('DOMContentLoaded', function() {
    // Remova os scripts do Bootstrap existentes
    document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('bootstrap')) {
            script.remove();
        }
    });

    // Remove os links CSS do Bootstrap existentes
    document.querySelectorAll('link').forEach(link => {
        if (link.href.includes('bootstrap')) {
            link.remove();
        }
    });

    // Adiciona o CSS do Bootstrap 4.5.2
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    // Adiciona os scripts na ordem correta
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Carregua os scripts em sequência
    loadScript('https://code.jquery.com/jquery-3.5.1.min.js')
        .then(() => loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'))
        .then(() => loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'))
        .then(() => {
            // Configura o comportamento do menu
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            if (navbarToggler && navbarCollapse) {
                // Remove os event listeners existentes
                navbarToggler.replaceWith(navbarToggler.cloneNode(true));
                
                // Adiciona o novo event listener
                document.querySelector('.navbar-toggler').addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    navbarCollapse.classList.toggle('show');
                });

                // Fecha o menu ao clicar em um link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', function() {
                        navbarCollapse.classList.remove('show');
                    });
                });

                // Fecha o menu ao clicar fora dele
                document.addEventListener('click', function(e) {
                    if (!navbarToggler.contains(e.target) && 
                        !navbarCollapse.contains(e.target) && 
                        navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                });
            }
        })
        .catch(error => console.error('Erro ao carregar scripts:', error));
});

/* ***************************************************************************************************** */

/* Melhorando a Nav-bar */

//Adiciona os novos itens (Localização, Tempo  e Quiz) a Nav-bar
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a lista de navegação
    const navList = document.querySelector('.navbar-nav');

    // Define todas as seções que devem ter botões
    const allSections = [
        { text: 'Sobre Nós', href: '#sobre' },
        { text: 'Cursos', href: '#cursos' },
        { text: 'Localização', href: '#map-container' },
        { text: 'Tempo', href: '#weather-container' },
        { text: 'Quiz', href: '#quiz-container' },
        { text: 'Contato', href: '#contato' }
    ];

    // Limpa os itens existentes na navbar
    navList.innerHTML = '';

    // Adiciona os botões estilizados
    allSections.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item mx-1'; // Adiciona margem entre os botões
        
        const a = document.createElement('a');
        a.className = 'nav-link btn';
        a.href = item.href;
        a.textContent = item.text;
        
        // Aplica os estilos do botão
        a.style.cssText = `
            background: linear-gradient(135deg, #392563, #E00D7C);
            color: white;
            font-weight:bold;
            border-radius: 5px;
            padding: 8px 15px;
            transition: all 0.3s ease;
            border: none;
            text-decoration: none;
        `;

        // Efeito hover
        a.addEventListener('mouseover', function() {
            this.style.opacity = '0.9';
            this.style.transform = 'scale(1.05)';
        });

        a.addEventListener('mouseout', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        // Adiciona evento de clique para rolagem da página
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fecha o menu mobile se estiver aberto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
        
        li.appendChild(a);
        navList.appendChild(li);
    });

    // Atualiza o estado ativo dos botões na navegação
    function updateActiveState() {
        const scrollPosition = window.scrollY + 100;

        allSections.forEach(({ href }) => {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                const navLink = document.querySelector(`a.nav-link[href="#${sectionId}"]`);
                if (navLink) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        navLink.style.opacity = '0.9';
                        navLink.style.transform = 'scale(1.05)';
                    } else {
                        navLink.style.opacity = '1';
                        navLink.style.transform = 'scale(1)';
                    }
                }
            }
        });
    }

    // Adiciona evento de scroll para atualizar estado ativo
    window.addEventListener('scroll', updateActiveState);
    updateActiveState();

    // Ajusta o estilo da navbar para acomodar os botões
    const navbar = document.querySelector('.navbar');
    navbar.style.padding = '1rem';
    
    // Ajusta o estilo para telas menores
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    function handleMobileLayout(e) {
        if (e.matches) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.style.margin = '5px 0';
            });
        } else {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.style.margin = '0 5px';
            });
        }
    }
 
});

/* ***************************************************************************************************** */

/* Missão 2: De Volta ao Topo!  */

// Cria o botão 
const voltarTopoBtn = document.createElement('button');
voltarTopoBtn.id = 'voltarTopo';
voltarTopoBtn.textContent = 'Voltar ao Topo';
document.body.appendChild(voltarTopoBtn);

voltarTopoBtn.style.cssText = " position:fixed; bottom:20px; right:20px; padding: 10px 20px; background-color: #007bff; color: white;font-size: 16px; border:none; border-radius: 5px; display: none; cursor:pointer; transition: opacity 0.3 ease-in-out;";


// Adiciona o evento de rolagem da página
window.addEventListener('scroll', function() {
    // Verifica se a página foi rolada para baixo
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        voltarTopoBtn.style.display = 'block'; // Mostra o botão
    } else {
        voltarTopoBtn.style.display = 'none'; // Esconde o botão quando estiver no topo
    }
});

// Adiciona o evento de clique no botão "Voltar ao Topo"
voltarTopoBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});

/* ***************************************************************************************************** */

/* Missão 3: Formulário de Contato Turbinado!  */
/* Desafio:: Ninja do AJAX  */

document.getElementById("formulario-contato").addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let contato = document.getElementById('contatoFormulario');
    let regiao = document.getElementById('regiao');
    let mensagem = document.getElementById('mensagem');

    // Limpa mensagens de erro anteriores
    document.querySelectorAll('.error-message').forEach(erro => erro.remove());
    document.querySelectorAll('.success-message').forEach(sucesso => sucesso.remove());

    let valido = true;

    function exibirErro(campoId, mensagemErro) {
        let campo = document.getElementById(campoId);
        let erro = document.createElement('div');
        erro.classList.add('error-message');
        erro.textContent = mensagemErro;
        erro.style.cssText = "color: red; font-size: 12px; margin-top: 5px;";
        campo.parentNode.appendChild(erro);
    }

    // Verifica se os campos estão preenchidos corretamente
    //Nome = string
    if (nome.value.trim() === '') {
        exibirErro('nome', 'Por favor, informe seu nome.');
        valido = false;
    }

    //Email = digitos + @ + digitos
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
        exibirErro('email', 'Por favor, informe um email válido.');
        valido = false;
    }

    //Contato = 9 ou 12 digitos
    let contatoRegex = /^\d{9,12}$/;
    let contatoLimpo = contato.value.replace(/\D/g, ''); // Remove não dígitos
    if (contatoLimpo === '' || !contatoRegex.test(contatoLimpo)) {
        exibirErro('contatoFormulario', 'Por favor, informe um número de contato válido.');
        valido = false;
    }

    //Região = escolha da região
    if (regiao.value.trim() === '') {
        exibirErro('regiao', 'Por favor, selecione sua escola.');
        valido = false;
    }

    //Mensagem = string

    if (mensagem.value.trim() === '') {
        exibirErro('mensagem', 'Por favor, escreva uma mensagem.');
        valido = false;
    }

    if (valido) {
        let botao = document.querySelector("#formulario-contato button");
        botao.disabled = true; // Desabilita o botão enquanto "envia"

        let mensagemEnviando = document.createElement('div');
        mensagemEnviando.classList.add('sending-message');
        mensagemEnviando.textContent = "Enviando...";
        mensagemEnviando.style.cssText = "color: blue; font-size: 14px; margin-top: 10px;";
        document.getElementById("formulario-contato").appendChild(mensagemEnviando);

        // Simula um tempo de envio (2 segundos)
        setTimeout(() => {
            mensagemEnviando.remove();

            let mensagemSucesso = document.createElement('div');
            mensagemSucesso.classList.add('success-message');
            mensagemSucesso.textContent = "Formulário enviado com sucesso!";
            mensagemSucesso.style.cssText = "color: green; font-size: 14px; margin-top: 10px;";
            document.getElementById("formulario-contato").appendChild(mensagemSucesso);

            document.getElementById("formulario-contato").reset(); // Limpa o formulário

            botao.disabled = false; // Habilita o botão novamente

            setTimeout(() => mensagemSucesso.remove(), 5000); // Remove a mensagem após 5s
        }, 2000);
    }
});

// Melhorar a aparência do formulário de contato

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario-contato");
    
    // Cria containers para as colunas
    const formLeft = document.createElement("div");
    formLeft.style.cssText = "display: flex; flex-direction: column; flex: 1;";

    const formRight = document.createElement("div");
    formRight.style.cssText = "display: flex; flex-direction: column; flex: 1;";

    // Seleciona os campos a serem movidos
    const camposEsquerda = [
        document.getElementById("nome").parentNode,
        document.getElementById("email").parentNode,
        document.getElementById("contatoFormulario").parentNode,
        document.getElementById("regiao").parentNode
    ];

    const campoMensagem = document.getElementById("mensagem").parentNode;
    const botaoEnviar = document.querySelector("#formulario-contato button");

    // Adiciona os campos na coluna da esquerda
    camposEsquerda.forEach(campo => formLeft.appendChild(campo));

    // Adiciona a mensagem e o botão na coluna da direita
    formRight.appendChild(campoMensagem);
    formRight.appendChild(botaoEnviar);

    // Insere os novos containers dentro do formulário
    form.insertBefore(formLeft, form.firstChild);
    form.insertBefore(formRight, formLeft.nextSibling);

    // Estiliza o formulário
    form.style.cssText = "display: flex; gap: 20px; align-items: flex-start; width: 100%; max-width: 100%; padding: 20px 30px; border-radius: 10px; overflow: hidden; background-color: #f9f9f9;";
    
    contato.style.cssText = "width: 82%; max-width: 90%; height:550px; margin: 40px auto; padding:30px; border-radius: 10px; overflow:hidden; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); display:flex; flex-direction:column; align-itens:right; justify-content: center; background-color:#f9f9f9;";

    document.getElementById("mensagem").style.cssText = "height: 220px; resize: vertical;";
    botaoEnviar.style.cssText = "width: auto; align-self: flex-end; padding: 8px 16px; font-size: 14px; margin-top: 10px;";
});

/* ***************************************************************************************************** */

/* Desafio: Mestre dos Modais */

document.addEventListener('DOMContentLoaded', function() {
    // Configuração dos modais de cada curso
    const cursosInfo = {
        'Software Developer': {
            duracao: '12 meses',
            modalidade: 'Presencial',
            descricao: 'Aprenda a desenvolver aplicações web e mobile usando as tecnologias mais modernas do mercado.',
            conteudo: [
                'Fundamentos de Programação',
                'Orientação a Objetos',
                'Desenvolvimento Web',
                'Banco de Dados',
                'DevOps Básico'
            ]
        },
        'Web Developer': {
            duracao: '9 meses',
            modalidade: 'Presencial / Híbrido',
            descricao: 'Torne-se um desenvolvedor web completo, dominando front-end e back-end.',
            conteudo: [
                'HTML5 e CSS3',
                'JavaScript',
                'React.js',
                'Node.js',
                'Banco de Dados'
            ]
        },
        'Front-End Developer': {
            duracao: '6 meses',
            modalidade: 'Presencial / Online',
            descricao: 'Especialize-se em criar interfaces modernas e responsivas.',
            conteudo: [
                'HTML5 Semântico',
                'CSS3 Avançado',
                'JavaScript Moderno',
                'React.js',
                'UI/UX Básico'
            ]
        },
        'Girls Can Code!': {
            duracao: '6 meses',
            modalidade: 'Presencial',
            descricao: 'Programa especial para mulheres iniciarem na programação.',
            conteudo: [
                'Lógica de Programação',
                'Desenvolvimento Web Básico',
                'Banco de Dados',
                'Projeto Prático',
                'Mentoria de Carreira'
            ]
        }
    };

    // Cria containers para os modais
    const modalsContainer = document.createElement('div');
    document.body.appendChild(modalsContainer);

    // Função para criar ID  para o modal
    function createSafeId(title) {
        return 'modal-' + title.toLowerCase()
            .replace(/[^a-z0-9]/g, '-') // substitui caracteres especiais por hífen
            .replace(/-+/g, '-') // remove hífens múltiplos
            .replace(/^-|-$/g, ''); // remove hífens no início e fim
    }

    // Encontra todos os cards de cursos
    const cards = document.querySelectorAll('#cursos .card');
    
    cards.forEach((card, index) => {
        const titulo = card.querySelector('.card-title').textContent.trim();
        const cursoInfo = cursosInfo[titulo];
        
        if (!cursoInfo) return;

        // Cria ID para o modal
        const modalId = createSafeId(titulo);

        // Cria um modal para cada curso
        const modalHTML = `
            <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${titulo}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <strong>Duração:</strong> ${cursoInfo.duracao}
                                </div>
                                <div class="col-md-6">
                                    <strong>Modalidade:</strong> ${cursoInfo.modalidade}
                                </div>
                            </div>
                            <div class="mb-3">
                                <strong>Descrição:</strong>
                                <p>${cursoInfo.descricao}</p>
                            </div>
                            <div>
                                <strong>Conteúdo do Curso:</strong>
                                <ul class="mt-2">
                                    ${cursoInfo.conteudo.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <a href="#contato" class="btn btn-primary" data-dismiss="modal">Inscreva-se</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modalsContainer.insertAdjacentHTML('beforeend', modalHTML);

        // Configura o botão "Saiba Mais" para abrir o modal
        const btnSaibaMais = card.querySelector('.btn-primary');
        if (btnSaibaMais) {
            btnSaibaMais.setAttribute('data-toggle', 'modal');
            btnSaibaMais.setAttribute('data-target', `#${modalId}`);
        }
    });

    // Adiciona estilos 
    const styles = document.createElement('style');
    styles.textContent = `
    .modal-content { border-radius: 10px; border: none;}
    .modal-header { background-color: #f8f9fa;border-radius: 10px 10px 0 0;}
    .modal-body {padding: 1.5rem;}
    .modal-footer {background-color: #f8f9fa;border-radius: 0 0 10px 10px;}
    .modal-body ul {list-style-type: none;padding-left: 0;}
    .modal-body ul li {padding: 0.5rem 0;border-bottom: 1px solid #eee;}
    .modal-body ul li:last-child {border-bottom: none;}
`;
    document.head.appendChild(styles);

    //Fecha o modal ao clicar no botão de inscrição
    document.querySelectorAll('.modal .btn-primary[href="#contato"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            $(this).closest('.modal').modal('hide');
            setTimeout(() => {
                document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
            }, 150);
        });
    });
});

/* ***************************************************************************************************** */

/* Desafio: Rei do Quiz */

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;

// Cria o container para o Quiz

document.addEventListener("DOMContentLoaded", function () {
    const newQuizContainer = document.createElement("div");
    newQuizContainer.id = "quiz-container";

    const tituloQuiz = document.createElement("h2");
    tituloQuiz.innerText = "Quiz - Cesae";

    const descricaoQuiz = document.createElement("p");
    descricaoQuiz.innerText = "Teste se você é fera em Front-End";

    const quiz = document.createElement("div");
    quiz.id = "quiz";

    newQuizContainer.appendChild(tituloQuiz);
    newQuizContainer.appendChild(descricaoQuiz);
    newQuizContainer.appendChild(quiz);

    // Coloca o container do Quiz depois do container do tempo

    const weatherContainer = document.querySelector("#weather-container");
    if (weatherContainer && weatherContainer.parentNode) {
        weatherContainer.parentNode.insertBefore(newQuizContainer, weatherContainer.nextSibling);
    }

    // Adiciona estilo ao quiz

    newQuizContainer.style.cssText = `
        width: 82%;
        max-width: 90%;
        margin: 40px auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
    `;

    quiz.style.cssText = `
        width: 90%;
        padding: 20px;
        border-radius: 10px;
        background: linear-gradient(135deg, #392563, #E00D7C);
        text-align: center;
    `;

    tituloQuiz.style.textAlign = "center";
    descricaoQuiz.style.textAlign = "center";

    iniciarQuiz();
});

// Perguntas para o Quiz

const perguntas = [
    {
        pergunta: "Qual tag HTML é utilizada para criar links?",
        alternativas: [
            { texto: "<link>", correta: false },
            { texto: "<href>", correta: false },
            { texto: "<a>", correta: true },
            { texto: "<url>", correta: false }
        ]
    },
    {
        pergunta: "Em CSS, qual propriedade é usada para alterar a cor do texto?",
        alternativas: [
            { texto: "text-color", correta: false },
            { texto: "font-color", correta: false },
            { texto: "color", correta: true },
            { texto: "text-style", correta: false }
        ]
    },
    {
        pergunta: "Qual é a principal função do HTML em uma página web?",
        alternativas: [
            { texto: "Definir a estrutura da página", correta: true },
            { texto: "Estilizar a página", correta: false },
            { texto: "Tornar a página interativa", correta: false },
            { texto: "Alterar a cor da página", correta: false }
        ]
    },
    {
        pergunta: "O que o CSS permite que você faça em uma página web?",
        alternativas: [
            { texto: "Organizar e manipular dados", correta: false },
            { texto: "Adicionar estilos visuais e layout", correta: true },
            { texto: "Criar a estrutura da página", correta: false },
            { texto: "Modificar a estrutura da página", correta: false }
        ]
    },
    {
        pergunta: "Qual é a principal função do JavaScript em uma página web?",
        alternativas: [
            { texto: "Definir a estrutura da página", correta: false },
            { texto: "Adicionar interatividade à página", correta: true },
            { texto: "Estilizar a página", correta: false },
            { texto: "Alterar o layout da página", correta: false }
        ]
    },
    {
        pergunta: "Qual é a maneira correta de comentar em JavaScript?",
        alternativas: [
            { texto: "<!-- comentário -->", correta: false },
            { texto: "// comentário", correta: true },
            { texto: "# comentário", correta: false },
            { texto: "<-- comentário -->", correta: false }
        ]
    },
    {
        pergunta: "Qual seletor CSS seleciona todos os elementos de uma página?",
        alternativas: [
            { texto: "#", correta: false },
            { texto: ".", correta: false },
            { texto: ">", correta: false },
            { texto: "*", correta: true }
        ]
    },
    {
        pergunta: "Qual atributo HTML é usado para definir estilos inline?",
        alternativas: [
            { texto: "css", correta: false },
            { texto: "styles", correta: false },
            { texto: "style", correta: true },
            { texto: "format", correta: false }
        ]
    },
    {
        pergunta: "Como se declara uma variável em JavaScript usando let?",
        alternativas: [
            { texto: "variable x = 5;", correta: false },
            { texto: "let = x = 5;", correta: false },
            { texto: "let x = 5;", correta: true },
            { texto: "x = 5;", correta: false }
        ]
    },
    {
        pergunta: "Qual propriedade CSS é usada para controlar a transparência de um elemento?",
        alternativas: [
            { texto: "opacity", correta: true },
            { texto: "transparency", correta: false },
            { texto: "visibility", correta: false },
            { texto: "filter", correta: false }
        ]
    }
    
];

// Inicia o Quiz

function iniciarQuiz() {
    const quizContainer = document.getElementById("quiz");
    if (!quizContainer) {
        console.error("Erro: A div #quiz não foi encontrada!");
        return;
    }

    quizContainer.innerHTML = `
        <div id="pergunta-container"></div>
    `;

    mostrarPergunta(perguntaAtual);
}

// Mostra as perguntas

function mostrarPergunta(indice) {
    const perguntaContainer = document.getElementById("pergunta-container");
    if (!perguntaContainer) {
        console.error("Erro: A div #pergunta-container não foi encontrada!");
        return;
    }

    const pergunta = perguntas[indice];
    perguntaContainer.innerHTML = `
        <p style="font-size: 18px; font-weight: bold;color:white; text-align:center;">${pergunta.pergunta}</p>
        <div id="opcoes" style="display: flex; flex-direction: column; align-items: center;"></div>
    `;

    const opcoes = document.getElementById("opcoes");

    // Adiciona estilo para as perguntas

    pergunta.alternativas.forEach((alt, index) => {
        const botao = document.createElement("button");
        botao.textContent = alt.texto;
        botao.style.cssText = `
            width: 80%;
            margin: 5px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            border-radius:8px;
            border:none;
        `;
        botao.onclick = function () {
            responderQuiz(alt.correta, botao);
        };

        opcoes.appendChild(botao);
    });
}

// Adiciona estilo para o botão da alternativa escolhida

function responderQuiz(correta, botao) {
    // Atualiza a cor do botão
    if (correta) {
        botao.style.backgroundColor = "#28a745"; // Verde para resposta correta
        acertos++; // Incrementa os acertos
    } else {
        botao.style.backgroundColor = "#dc3545"; // Vermelho para resposta errada
        erros++; // Incrementa os erros
    }

    // Desabilitar todos os botões após a escolha
    const botoes = document.querySelectorAll("#opcoes button");
    botoes.forEach(btn => btn.disabled = true);

    // Aguardar 1 segundo antes de avançar para a próxima pergunta
    setTimeout(() => {
        perguntaAtual++;  // Avança para a próxima pergunta
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta(perguntaAtual); // Exibe a próxima pergunta
        } else {
            mostrarBotaoReiniciar(); // Exibe a pontuação final e botão de reiniciar
        }
    }, 1000);
}

// Estilo do botão para reiniciar o Quiz

function mostrarBotaoReiniciar() {
    const perguntaContainer = document.getElementById("pergunta-container");
    perguntaContainer.innerHTML = `
        <p style="font-size: 18px; font-weight: bold; text-align:center;">🎉 Quiz finalizado! 🎉</p>
        <p style="font-size: 16px; text-align:center;">✅ Acertos: <strong>${acertos}</strong> | ❌ Erros: <strong>${erros}</strong></p>
        <button 
            style="width: 80%; margin: 5px; padding: 10px; font-size: 16px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 5px;"
            onclick="reiniciarQuiz()"
        >
            🔄 Reiniciar Quiz
        </button>
    `;
}

// Botão para reiniciar o Quiz 

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
    mostrarPergunta(perguntaAtual);
}

/* ***************************************************************************************************** */

/* Desafio: Lorde do Carrossel */

document.addEventListener("DOMContentLoaded", function() {
    // Definir as imagens que serão exibidas no carrossel
    const imagens = [
        "imagens/banner1.png", 
        "imagens/banner2.png", 
        "imagens/banner3.png", 
        "imagens/banner3.png"
    ];
    
    let indexImagemAtual = 0;

    // Criar a div do carrossel e adicionar na seção "Sobre Nós"
    const carrosselDiv = document.createElement("div");
    carrosselDiv.classList.add("carrossel-container", "my-3");

    // Cria as imagens 
    const imagemElement = document.createElement("img");
    imagemElement.src = imagens[indexImagemAtual];
    imagemElement.classList.add("img-carrousel");
    imagemElement.classList.add("rounded");

    carrosselDiv.appendChild(imagemElement);

    // Adiciona o carrossel antes do texto na seção "Sobre Nós"
    const sobreSection = document.getElementById("sobre");
    sobreSection.insertBefore(carrosselDiv, sobreSection.firstChild);

    // Função para alterar a imagem do carrossel
    function mudarImagem() {
        imagemElement.src = imagens[indexImagemAtual];
    }

    // Mudança automática de imagem a cada 2 segundos e volta para a 1a quando chega na 3a
    setInterval(function() {
        indexImagemAtual = (indexImagemAtual + 1) % imagens.length;
        mudarImagem();
    }, 2000);

    //Style Carroussel

const carrossel = document.querySelector(".carrossel-container")

carrossel.style.cssText = 'background-colo: red;_text-align: center; margin-bottom: 30px; width:100%';

const carrosselImg = document.querySelector(".img-carrousel")

carrosselImg.style.cssText = "width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;";

});

/* ***************************************************************************************************** */

/* Desafio: Imperador das APIs */

/* Google Maps */


// Seleciona a seção do formulário pelo ID ou classe
const secaoFormulario = document.querySelector("section#contato"); 

if (secaoFormulario) {
    // Criar a nova div do mapa
    const mapaContainer = document.createElement("div");
    mapaContainer.id = "map-container";    

    // Criar título acima do mapa
    const tituloMapa = document.createElement("h2");
    tituloMapa.innerText = "Nossa Localização";

    tituloMapa.style.cssText = "color: #333; font-size: 2rem; font-weight:500; text-align: center; margin: 10px; padding:10px";

    // Criar descrição
    const descricaoMapa = document.createElement("p");
    descricaoMapa.innerText = "Rua Ciríaco Cardoso 186, 4150-212 Porto.";

    descricaoMapa.style.cssText = 'font-size: 20px; margin-bottom: 10px; color:#666;text-align:center';
   
    // Criar a div do mapa dentro do container
    const mapDiv = document.createElement("div");
    mapDiv.id = "map";

    // Adicionar os elementos na div container
    mapaContainer.appendChild(tituloMapa);
    mapaContainer.appendChild(descricaoMapa);
    mapaContainer.appendChild(mapDiv);

    // Inserir a div do mapa **depois** da seção do formulário
    secaoFormulario.parentNode.insertBefore(mapaContainer, secaoFormulario.nextSibling);
}

//Incluir o mapa segundo o passo-a-passo do Google

  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "",
    v: "weekly",
   
  });

  // Inicializar e inserir o mapa
let map;

async function initMap() {
  // Localização Cesae
  const position = { lat: 41.15851178468337, lng: -8.65026727497872};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // O mapa mostrando o Cesae
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // Marcador
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Cesae",
  });

 const mapContainer = document.querySelector("#map-container")

 mapContainer.style.cssText = 'width:82%; max-width:90%; height:500px; margin:20px auto; padding:30px; border-radious: 10px; overflow:hidden; box-shadow:0px 4px 10px rgba(0,0,0,0.1); display: flex; flex-direction:column; align-itens:center; justify-content:center; background-color:#f9f9f9 ';

 }

initMap();

/* ***************************************************************************************************** */

/* Desafio: Imperador das APIs */

/* Open Weather Map Forecast */


const mapaContainer = document.querySelector("#map-container"); 

if (mapaContainer) {
    // Criar a nova div do tempo
    const weatherContainer = document.createElement("div");
    weatherContainer.id = "weather-container";    

    // Criar título acima do tempo
    const tituloWeather = document.createElement("h2");
    tituloWeather.innerText = "Tempo";

    // Criar descrição
    const descricaoWeather = document.createElement("p");
    descricaoWeather.innerText = "Como está o tempo hoje";

    // Criar a div do tempo dentro do container
    const mapTempo = document.createElement("div");
    mapTempo.id = "tempo";

    // Adicionar os elementos na div container do tempo
    weatherContainer.appendChild(tituloWeather);
    weatherContainer.appendChild(descricaoWeather);
    weatherContainer.appendChild(mapTempo);

    // Inserir a div do tempo **depois** do mapaContainer
    mapaContainer.parentNode.insertBefore(weatherContainer, mapaContainer.nextSibling);

    //Estilo do container do tempo

    weatherContainer.style.cssText = "width:82%; max-width:90%; height:350px; margin:40px auto; padding:20px 0 0 0 ;border-radius:10px; overflow-hidden; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); display:flex; flex-direction:column; align-itens:center; justify-content: center; background-color: #f9f9f9;"; 

    mapTempo.style.cssText = "width: 90%; height: 60%; margin: 20px 20px; padding:30px; border-radius: 10px; overflow:hidden;background-color:#ccc; align-self: center;";

    tituloWeather.style.cssText = "margin-bottom:0px; text-align: center;";
   
    descricaoWeather.style.cssText = "text-align: center; padding-top:10px;"
    
}

document.addEventListener("DOMContentLoaded", getWeather);

//Configuração da API do tempo

async function getWeather() {
    const API_KEY = "";
    const CITY_NAME = "Porto";
    const COUNTRY_CODE = "PT";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME},${COUNTRY_CODE}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

//Mostra o container do tempo

function displayWeather(data) {
    const weatherElement = document.getElementById("tempo");
    const { main, weather, name, sys } = data;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherElement.innerHTML = `
        <h2>${name}, ${sys.country}</h2>
        <div class="weather-info">
            <p>Temperatura: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Condição: <img src="${iconUrl}" alt="Weather Icon"> </p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", getWeather);

/* ***************************************************************************************************** */
