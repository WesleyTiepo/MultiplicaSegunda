// ==========================================================
// PEGANDO OS ELEMENTOS DO HTML
// ==========================================================

// Procura no HTML o elemento que possui id="modal".
// Esse elemento representa toda a janela modal.
const modal = document.getElementById("modal");


// Procura o título que existe dentro do modal.
const modalTitle = document.getElementById("modal-title");


// Procura o parágrafo que existe dentro do modal.
const modalText = document.getElementById("modal-text");


// Procura o botão X responsável por fechar o modal.
const closeBtn = document.getElementById("close-btn");


// Procura TODOS os elementos que possuem a classe "btn-modal".
// Nesse projeto existem dois botões "Saiba mais".
const botoesModal = document.querySelectorAll(".btn-modal");



// ==========================================================
// PRIMEIRO BOTÃO "SAIBA MAIS"
// ==========================================================

// Selecionamos o primeiro botão da lista.
// [0] significa "primeiro elemento".
botoesModal[0].addEventListener("click", function() {

    // Altera o título que será exibido dentro do modal.
    modalTitle.textContent =
        "Mito 1: Correr é realmente a melhor opção?";


    // Altera o texto exibido dentro do modal.
    modalText.textContent =
        "Em uma situação desconhecida, correr sem observar o ambiente pode aumentar a confusão. O ideal seria analisar a situação, procurar informações e buscar um local seguro.";


    // Faz o modal aparecer.
    // O valor "flex" também mantém a janela centralizada,
    // conforme definido no nosso CSS.
    modal.style.display = "flex";

});



// ==========================================================
// SEGUNDO BOTÃO "SAIBA MAIS"
// ==========================================================

// [1] significa "segundo elemento".
botoesModal[1].addEventListener("click", function() {

    // Altera o título do modal.
    modalTitle.textContent =
        "Mito 2: Matemática seria inútil?";


    // Altera o conteúdo do modal.
    modalText.textContent =
        "Na verdade, a Matemática poderia ser muito útil. Poderíamos calcular distâncias, velocidades, tempo de deslocamento e até analisar possíveis trajetórias de uma nave alienígena.";


    // Faz o modal aparecer.
    modal.style.display = "flex";

});



// ==========================================================
// BOTÃO X PARA FECHAR O MODAL
// ==========================================================

// Quando o usuário clicar no X...
closeBtn.addEventListener("click", function() {

    // O modal deixa de aparecer na página.
    modal.style.display = "none";

});