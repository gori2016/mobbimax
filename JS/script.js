function menuHam() {
  let hamburguer = window.document.getElementById("menuHamburguer");
  hamburguer.style.display = "none"; // Esconde o hambúrguer
  menuFechar.style.display = "inline"; // Exibe o ícone de fechar
  menu.style.display = "block"; // Exibe o menu
}

function saiMenu() {
  let x = window.document.getElementById("menuFechar");
  x.style.display = "none"; // Esconde o ícone de fechar
  menuHamburguer.style.display = "inline"; // Exibe o ícone do hambúrguer
  menu.style.display = "none"; // Esconde o menu
}

function verificarLarguraPagina() {
  const largura = window.innerWidth;

  // Verifica se a largura é maior que 1024px (modo desktop)
  if (largura > 1024) {
    // Esconde o menu hambúrguer no modo desktop
    let hamburguer = window.document.getElementById("menuHamburguer")
    hamburguer.style.display = "none" // Esconde no desktop
    menuFechar.style.display = "none"
    menu.style.display = "block"
  } else {
    // Exibe o menu hambúrguer no modo mobile
    let hamburguer = window.document.getElementById("menuHamburguer");
    hamburguer.style.display = "inline"; // Exibe no mobile
    menuFechar.style.display = "none"
    menu.style.display = "none"
  }
}

// Chama a função ao carregar a página
window.addEventListener('load', verificarLarguraPagina);

// Chama a função quando a janela for redimensionada
window.addEventListener('resize', verificarLarguraPagina);



