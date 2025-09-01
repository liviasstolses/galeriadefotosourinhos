const imagens = [
  'imagem1.jpg',
  'imagem2.jpg',
  'imagem3.jpg',
  'imagem4.jpg',
  'imagem5.jpg'
];

let indiceAtual = 0;

function atualizarImagem() {
  const img = document.getElementById('imagem-atual');
  if (img) {
    img.src = imagens[indiceAtual];
  }
}

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function imagemAnterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

function selecionarImagem(indice) {
  indiceAtual = indice;
  atualizarImagem();
}

document.getElementById('next').addEventListener('click', proximaImagem);
document.getElementById('prev').addEventListener('click', imagemAnterior);

atualizarImagem();

