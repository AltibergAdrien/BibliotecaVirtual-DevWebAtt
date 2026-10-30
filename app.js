document.addEventListener("DOMContentLoaded", () => {
  const campoPesquisa = document.getElementById("pesquisa-livro");
  const cartoesLivros = document.querySelectorAll(".cartao-livro");

  campoPesquisa.addEventListener("input", () => {
    const termoPesquisa = campoPesquisa.value.toLocaleLowerCase();

    cartoesLivros.forEach((cartao) => {
      const tituloLivro = cartao.textContent.toLocaleLowerCase();
      const corresponde = tituloLivro.includes(termoPesquisa);
      cartao.hidden = !corresponde;
    });
  });
});

const nomeUsuario = document.getElementById("nome-usuario");
const tituloObra = document.getElementById("titulo-obra");
const formulario = document.getElementById("formulario-sugestao");
const mensagem = document.getElementById("mensagem-erro-titulo");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = tituloObra.value.trim();

  if (titulo.length < 3) {

    mensagem.textContent = "O título da obra deve ter pelo menos 3 caracteres.";
    mensagem.classList.remove("mensagem-sucesso"); 
    tituloObra.focus();
  } else {
    mensagem.textContent = "Sugestão enviada com sucesso!";
    mensagem.classList.add("mensagem-sucesso");
    formulario.reset();
  }
});
