const livros = [
  { titulo: "A hora da estrela", autor: "Clarice Lispector", genero: "Drama", capa: "hora-da-estrela", favorito: false, resumo: "Macabéa é uma jovem alagoana que vai morar no Rio de Janeiro e leva uma vida simples, trabalhando como datilógrafa. A história acompanha seus sonhos, encontros e dificuldades, enquanto o narrador também pensa sobre o jeito de contar a vida de alguém." },
  { titulo: "A metamorfose", autor: "Franz Kafka", genero: "Ficção", capa: "a-metamorfose", favorito: false, resumo: "Certo dia, Gregor Samsa acorda e percebe que se transformou em um inseto. Sem poder trabalhar nem levar a vida de antes, ele vê como a situação afeta sua família e a relação entre eles. O livro mistura uma situação fantástica com problemas bem humanos." },
  { titulo: "A revolução dos bichos", autor: "George Orwell", genero: "Clássico", capa: "a-revolucao-dos-bichos", favorito: false, resumo: "Cansados de serem explorados, os animais de uma fazenda expulsam o dono e tentam organizar a própria comunidade. Com o tempo, alguns passam a concentrar o poder e as regras começam a mudar. É uma fábula sobre poder, igualdade e promessas que nem sempre são cumpridas." },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", genero: "Aventura", capa: "capitaes-da-areia", favorito: false, resumo: "Em Salvador, um grupo de meninos que vive nas ruas forma uma espécie de família e enfrenta desafios para sobreviver. Cada personagem tem sua própria história, seus planos e seu jeito de ver o mundo. O livro mostra a amizade entre eles e chama atenção para as dificuldades da infância sem proteção." },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", capa: "dom-casmurro", favorito: false, resumo: "Já adulto, Bento Santiago decide contar as lembranças de sua juventude e do amor por Capitu. Entre namoro, casamento e ciúmes, ele tenta explicar como chegou à vida que tem. Como a história é contada pelo próprio Bentinho, o leitor também precisa pensar se pode confiar em tudo o que ele diz." },
  { titulo: "Grande Sertão: Veredas", autor: "João Guimarães Rosa", genero: "Aventura", capa: "grande-sertao-veredas", favorito: false, resumo: "Riobaldo conta a um visitante passagens de sua vida no sertão, incluindo o tempo em que foi jagunço. No meio das lembranças aparecem amizades, disputas, escolhas difíceis e a dúvida sobre a existência do diabo. A linguagem inventiva de Guimarães Rosa ajuda a construir o ritmo de uma conversa contada de memória." },
  { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", genero: "Memórias", capa: "memorias-postumas", favorito: false, resumo: "Depois de morrer, Brás Cubas resolve narrar sua vida sem a obrigação de parecer melhor do que foi. Com capítulos curtos e comentários irônicos, ele relembra a família, os amores e as ambições que teve. O narrador brinca com o leitor enquanto critica os costumes de sua época." },
  { titulo: "O Alienista", autor: "Machado de Assis", genero: "Clássico", capa: "o-alienista", favorito: false, resumo: "O médico Simão Bacamarte volta à cidade de Itaguaí e decide estudar a mente humana. Para isso, abre a Casa Verde e começa a internar moradores, mas logo fica difícil saber quem está realmente louco. A história usa humor para questionar quem tem o direito de decidir o que é normal." },
  { titulo: "O cortiço", autor: "Aluísio Azevedo", genero: "Drama", capa: "o-cortico", favorito: false, resumo: "O romance acompanha os moradores de um cortiço no Rio de Janeiro e mostra como suas vidas se cruzam. Entre eles estão trabalhadores, famílias e pessoas que tentam melhorar de situação. O ambiente, a pobreza e a busca por dinheiro influenciam as escolhas de cada personagem." },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Aventura", capa: "o-pequeno-principe", favorito: false, resumo: "Um piloto conhece um menino que veio de outro planeta e escuta as histórias de suas viagens. Em cada lugar, o pequeno príncipe encontra adultos com hábitos diferentes e tenta entender o que eles valorizam. A conversa com a raposa ensina a ele sobre amizade, cuidado e responsabilidade." },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", capa: "orgulho-e-preconceito", favorito: false, resumo: "Elizabeth Bennet vive com a família e conhece o reservado Mr. Darcy. Os dois criam opiniões um sobre o outro antes de entenderem suas verdadeiras intenções. Entre visitas, conversas e situações engraçadas, o romance acompanha como orgulho e preconceito podem atrapalhar os relacionamentos." },
  { titulo: "Quarto de Despejo", autor: "Carolina Maria de Jesus", genero: "Memórias", capa: "quarto-de-despejo", favorito: false, resumo: "Neste diário, Carolina Maria de Jesus registra o cotidiano na favela do Canindé, em São Paulo. Ela fala sobre cuidar dos filhos, procurar papel para vender e enfrentar a falta de comida, sem deixar de contar suas ideias e opiniões. É um relato pessoal que ajuda a conhecer a cidade pela perspectiva de quem vive à margem." },
  { titulo: "Vidas Secas", autor: "Graciliano Ramos", genero: "Drama", capa: "vidas-secas", favorito: false, resumo: "Fabiano, Sinhá Vitória, os dois filhos e a cachorra Baleia atravessam o sertão tentando escapar da seca. A família encontra trabalho em uma fazenda, mas continua enfrentando pobreza e incerteza. Cada capítulo acompanha um personagem e mostra seus desejos, pensamentos e dificuldade para se comunicar." },
{ titulo: "A Bolsa Amarela", autor: "Lygia Bojunga", genero: "Aventura", capa: "a-bolsa-amarela", favorito: false, resumo: "Raquel é uma menina que guarda numa bolsa amarela seus desejos e segredos. Com imaginação e humor, ela inventa personagens e vive situações que ajudam a lidar com as expectativas dos adultos." },
{ titulo: "A Ilha do Tesouro", autor: "Robert Louis Stevenson", genero: "Aventura", capa: "a-ilha-do-tesouro", favorito: false, resumo: "Jim Hawkins encontra um mapa que indica o caminho para um tesouro escondido. A viagem de navio reúne piratas, mistérios e decisões arriscadas, transformando a busca em uma grande aventura." },
{ titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", genero: "Aventura", capa: "alice-no-pais-das-maravilhas", favorito: false, resumo: "Ao seguir um coelho apressado, Alice chega a um lugar cheio de criaturas curiosas e situações sem lógica. Em cada encontro, ela tenta entender as regras daquele mundo fantástico." },
{ titulo: "O Diário de Anne Frank", autor: "Anne Frank", genero: "Memórias", capa: "diario-de-anne-frank", favorito: false, resumo: "Durante a Segunda Guerra Mundial, Anne Frank escreve sobre a vida escondida com sua família e outras pessoas. Seu diário registra sentimentos, conflitos e esperanças em um período muito difícil." },
{ titulo: "O Guarani", autor: "José de Alencar", genero: "Aventura", capa: "o-guarani", favorito: false, resumo: "Peri, um indígena da época colonial, torna-se aliado e protetor de Cecília. A narrativa mistura aventura, conflitos e paisagens brasileiras em uma história sobre coragem e lealdade." },
{ titulo: "O Médico e o Monstro", autor: "Robert Louis Stevenson", genero: "Ficção", capa: "o-medico-e-o-monstro", favorito: false, resumo: "O advogado Utterson investiga a ligação entre o respeitado Dr. Jekyll e o misterioso Mr. Hyde. Aos poucos, ele descobre um segredo que questiona os lados diferentes da personalidade humana." },
{ titulo: "O Meu Pé de Laranja Lima", autor: "José Mauro de Vasconcelos", genero: "Drama", capa: "o-meu-pe-de-laranja-lima", favorito: false, resumo: "Zezé é um menino criativo que enfrenta dificuldades em casa e encontra companhia em um pé de laranja lima. A história acompanha suas brincadeiras, descobertas e relações importantes." },
];

const $ = (seletor) => document.querySelector(seletor);
const chave = "cantinho-da-leitura-livros";
const chaveTema = "cantinho-da-leitura-tema";
const estantes = $("#genre-shelves");
const favoritos = $("#favorites-list");
const mensagem = $("#add-message");
let ordenacao = "";
const paineisAbertos = new Set();

try {
  const salvos = JSON.parse(localStorage.getItem(chave));
  if (salvos !== null) {
    if (!Array.isArray(salvos)) throw new Error("Dados inválidos");
    const atualizados = salvos.map((salvo) => {
      const original = livros.find((livro) => livro.titulo.toLowerCase() === salvo.titulo.toLowerCase());
      return original && !salvo.capa ? { ...salvo, capa: original.capa } : salvo;
    });
    const novidades = livros.filter((livro) =>
      !salvos.some((salvo) => salvo.titulo.toLowerCase() === livro.titulo.toLowerCase())
    );
    livros.splice(0, livros.length, ...atualizados, ...novidades);
  }
} catch (erro) {
  console.error("Erro ao carregar os livros.", erro);
  mensagem.textContent = "Não foi possível carregar os livros salvos.";
}

try {
  const temaSalvo = localStorage.getItem(chaveTema);
  if (["classic", "fresh", "night"].includes(temaSalvo)) aplicarTema(temaSalvo);
} catch (erro) {
  console.error("Não foi possível carregar o tema salvo.", erro);
}

function salvar() {
  try {
    localStorage.setItem(chave, JSON.stringify(livros));
    return true;
  } catch (erro) {
    console.error("Erro ao salvar os livros.", erro);
    mensagem.textContent = "Não foi possível salvar as alterações.";
    return false;
  }
}

function aplicarTema(tema) {
  document.body.classList.remove("theme-classic", "theme-fresh", "theme-night");
  document.body.classList.add("theme-" + tema);
  document.querySelectorAll(".theme-button").forEach((botao) => {
    const ativo = botao.dataset.theme === tema;
    botao.classList.toggle("is-active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

function atualizarCapa(img) {
  img.onerror = () => {
    const aviso = document.createElement("span");
    aviso.className = "cover-unavailable";
    aviso.textContent = "Capa indisponível";
    img.replaceWith(aviso);
  };
}

function criarCartao(livro) {
  const cartao = $("#book-card-template").content.firstElementChild.cloneNode(true);
  const capaModelo = $("#capa-" + livro.capa);
  const indice = livros.indexOf(livro);
  cartao.dataset.indice = indice;
  const painel = cartao.querySelector(".book-panel");
  painel.open = paineisAbertos.has(indice);
  painel.ontoggle = () => painel.open ? paineisAbertos.add(indice) : paineisAbertos.delete(indice);
  const capa = cartao.querySelector(".book-cover");
  if (capaModelo) capa.replaceWith(capaModelo.content.firstElementChild.cloneNode(true));
  else capa.textContent = livro.titulo[0];

  if (livro.imagem) {
    const imagem = document.createElement("img");
    imagem.src = livro.imagem;
    imagem.alt = "Capa de " + livro.titulo;
    cartao.querySelector(".book-cover").appendChild(imagem);
  }
  cartao.querySelectorAll(".book-cover img").forEach(atualizarCapa);

  cartao.querySelector(".book-card-title").textContent = livro.titulo;
  cartao.querySelector(".book-card-author").textContent = "por " + livro.autor;
  cartao.querySelector(".book-genre").textContent = livro.genero;
  cartao.querySelector(".book-panel p").textContent = livro.resumo;

  const avaliacao = cartao.querySelector(".book-rating");
  for (let nota = 1; nota <= 5; nota++) {
    const estrela = document.createElement("button");
    estrela.className = "rating-star";
    estrela.type = "button";
    estrela.dataset.nota = nota;
    estrela.textContent = nota <= (livro.avaliacao || 0) ? "★" : "☆";
    estrela.setAttribute("aria-label", nota + " de 5 estrelas");
    estrela.setAttribute("aria-pressed", String(livro.avaliacao === nota));
    avaliacao.appendChild(estrela);
  }
  const textoNota = document.createElement("span");
  textoNota.className = "rating-label";
  textoNota.textContent = livro.avaliacao ? livro.avaliacao + "/5" : "Avalie";
  avaliacao.appendChild(textoNota);

  if (livro.url) {
    const link = cartao.querySelector(".book-link");
    link.href = livro.url;
    link.hidden = false;
  }
  const favorito = cartao.querySelector(".favorite-button");
  favorito.dataset.favorito = "true";
  favorito.textContent = livro.favorito ? "♥ Favorito" : "♡ Favoritar";
  favorito.setAttribute("aria-pressed", String(livro.favorito));
  return cartao;
}

function mostrarLivros() {
  const busca = $("#search-input").value.toLowerCase();
  const autor = $("#author-filter").value.trim().toLowerCase();
  const genero = $("#genre-filter").value;
  const nota = Number($("#rating-filter").value);
  const encontrados = livros.filter((livro) =>
    (livro.titulo + " " + livro.autor).toLowerCase().includes(busca) &&
    livro.autor.toLowerCase().includes(autor) &&
    (!genero || livro.genero === genero) &&
    (!nota || (livro.avaliacao || 0) >= nota)
  );

  if (ordenacao === "az") encontrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
  if (ordenacao === "recentes") encontrados.sort((a, b) => (b.adicionadoEm || 0) - (a.adicionadoEm || 0));
  if (ordenacao === "nota") encontrados.sort((a, b) => (b.avaliacao || 0) - (a.avaliacao || 0));
  estantes.replaceChildren();
  [...new Set(encontrados.map((livro) => livro.genero))].forEach((genero) => {
    const prateleira = $("#genre-shelf-template").content.firstElementChild.cloneNode(true);
    const livrosDoGenero = encontrados.filter((livro) => livro.genero === genero);
    prateleira.querySelector(".genre-shelf-title").textContent = genero;
    prateleira.querySelector(".book-grid").replaceChildren(
      ...livrosDoGenero.map((livro) => criarCartao(livro)),
    );
    estantes.appendChild(prateleira);
  });
  const meusFavoritos = livros.filter((livro) => livro.favorito);
  favoritos.replaceChildren(...meusFavoritos.map((livro) => criarCartao(livro)));
  $("#favorites-count").textContent = meusFavoritos.length + (meusFavoritos.length === 1 ? " livro" : " livros");
  $("#favorites-empty").hidden = meusFavoritos.length > 0;
  $("#total-count").textContent = livros.length;
  $("#result-message").textContent = encontrados.length + " livros encontrados";
  $("#empty-state").hidden = encontrados.length > 0;
}

function contarLivros() {
  const letra = $("#letter-input").value.toLowerCase();
  $("#letter-count").textContent = letra ? livros.filter((livro) => livro.titulo.toLowerCase().startsWith(letra)).length : 0;
}

function atualizarBotoes() {
  $("#sort-button").setAttribute("aria-pressed", String(ordenacao === "az"));
  $("#recent-button").setAttribute("aria-pressed", String(ordenacao === "recentes"));
  $("#rating-sort-button").setAttribute("aria-pressed", String(ordenacao === "nota"));
  $("#sort-label").textContent = ordenacao === "az" ? "Ordem original" : "Ordenar A–Z";
  $("#recent-button").textContent = ordenacao === "recentes" ? "Mais recentes" : "Novos primeiro";
}

$("#enter-site").onclick = () => {
  $("#intro-screen").hidden = true;
  $("#login-screen").hidden = false;
  $("#login-screen input").focus();
};
$("#back-home").onclick = () => {
  $("#login-screen").hidden = true;
  $("#intro-screen").hidden = false;
};
$("#demo-login-form").onsubmit = (evento) => {
  evento.preventDefault();
  $("#login-screen").hidden = true;
  document.body.classList.remove("intro-open");
  $("#site-header").focus();
};
$("#search-input").oninput = mostrarLivros;
$("#author-filter").oninput = mostrarLivros;
$("#genre-filter").onchange = mostrarLivros;
$("#rating-filter").onchange = mostrarLivros;
$("#letter-input").oninput = contarLivros;

function alternarOrdenacao(tipo) {
  ordenacao = ordenacao === tipo ? "" : tipo;
  atualizarBotoes();
  mostrarLivros();
}
$("#sort-button").onclick = () => alternarOrdenacao("az");
$("#recent-button").onclick = () => alternarOrdenacao("recentes");
$("#rating-sort-button").onclick = () => alternarOrdenacao("nota");
$("#clear-filters").onclick = () => {
  $("#search-input").value = $("#author-filter").value = $("#genre-filter").value = "";
  $("#rating-filter").value = $("#letter-input").value = "";
  $("#letter-count").textContent = "0";
  ordenacao = "";
  atualizarBotoes();
  mostrarLivros();
};

document.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".favorite-button, .rating-star");
  if (!botao) return;
  const cartao = botao.closest(".book-card");
  const indice = Number(cartao.dataset.indice);
  const livro = livros[indice];
  paineisAbertos.add(indice);
  if (botao.matches(".favorite-button")) livro.favorito = !livro.favorito;
  else livro.avaliacao = Number(botao.dataset.nota);
  salvar();
  mostrarLivros();
});

$("#add-book-form").onsubmit = function (evento) {
  evento.preventDefault();
  const titulo = $("#new-title").value.trim();
  if (livros.some((livro) => livro.titulo.toLowerCase() === titulo.toLowerCase())) {
    mensagem.textContent = "Esse título já está no catálogo. Escolha outro livro.";
    return;
  }
  livros.push({
    titulo, autor: $("#new-author").value.trim(), genero: $("#new-genre").value,
    resumo: $("#new-summary").value.trim(), url: $("#new-url").value.trim(),
    imagem: $("#new-cover-url").value.trim(), capa: "", favorito: false,
    avaliacao: 0, adicionadoEm: Date.now(),
  });
  const salvou = salvar();
  this.reset();
  if (salvou) mensagem.textContent = "Livro adicionado ao catálogo!";
  mostrarLivros();
  contarLivros();
};

document.querySelectorAll(".theme-button").forEach((botao) => {
  botao.onclick = () => {
    aplicarTema(botao.dataset.theme);
    try {
      localStorage.setItem(chaveTema, botao.dataset.theme);
    } catch (erro) {
      console.error("Não foi possível salvar o tema.", erro);
    }
  };
});

function marcarSecao(id) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.dataset.section === id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.onclick = () => marcarSecao(link.dataset.section);
});
marcarSecao("catalogo");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => marcarSecao(entry.target.id));
  }, { rootMargin: "-20% 0px -65% 0px" });
  ["catalogo", "favoritos", "sobre"].forEach((id) => observer.observe($("#" + id)));
}

window.addEventListener("scroll", () => {
  $("#back-to-top").hidden = window.scrollY < 300;
});
$("#back-to-top").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

mostrarLivros();
contarLivros();
