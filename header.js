verificarComponentes();

function verificarComponentes() {
    var cabecalhos = document.getElementsByClassName("header");
    if (cabecalhos) {
        criarCabecalho(cabecalhos);
    }
}

function criarCabecalho(cabecalhos) {
    for (const c of cabecalhos) {
        // Estrutura do cabeçalho
        const header = document.createElement("header");
        header.classList.add("cabecalho");

        // Logo
        const logo = document.createElement("div");
        logo.classList.add("logo");
        logo.innerHTML = "<h1>LOGO</h1>";

        // Botão do menu móvel
        const menuButton = document.createElement("button");
        menuButton.classList.add("menu-button");
        menuButton.innerHTML = '<img src="imagens/menu_white_36dp.svg" alt="Menu">';

        // Navegação
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.classList.add("nav-list");
        ul.innerHTML = `
            <li><a href="index.html">Página Inicial</a></li>
            <li><a href="conteudo.html">Conteúdo</a></li>
            <li><a href="sobre.html">Sobre</a></li>
        `;
        nav.appendChild(ul);


         

         //menu movel criado manualmente
         const mobileMenu = document.createElement("div");
         mobileMenu.classList.add("mobile-menu");
         const mobileUl = document.createElement("ul");
         mobileMenu.classList.add("mobile-nav-list");

         //adiciona itens manualmente ao menu movel
         const item1 = document.createElement("li");
         item1.innerHTML = '<a href="index.html">Pagina Inicial</a>';
         mobileUl.appendChild(item1);

         const item2 = document.createElement("li");
         item2.innerHTML = '<a href="index.html">Conteúdo</a>';
         mobileUl.appendChild(item2);

         mobileMenu.appendChild(mobileUl);

         //adiciona evento ao botao do menu
         menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
         });


         

        // Montar o cabeçalho
        header.appendChild(logo);
        header.appendChild(nav);
        header.appendChild(menuButton);
        header.appendChild(mobileMenu);
        

        // Adicionar ao container
        c.appendChild(header);
    }
}
