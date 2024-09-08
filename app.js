// Simulação de dados no arquivo dados.js

// Referência ao campo de input e ao botão
let inputPesquisa = document.getElementById("input-Pesquisa"); // Corrigido o ID
let botaoPesquisa = document.getElementById("botao-pesquisa");

// Função para exibir resultados
function exibirResultados(filtrados) {
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = ""; // Limpar resultados anteriores

    // Se houver resultados filtrados, exibi-los
    if (filtrados.length > 0) {
        for (let dado of filtrados) {
            section.innerHTML += `
            <div class="item-resultado">
                <h2><a href="#">${dado.nome}</a></h2>
                <img src="${dado.img}" alt="Foto de ${dado.nome}" class="album">
                <p class="descricao-meta">${dado.descricao}</p>
                <h3>${dado.titulo}</h3>
                <audio controls src="${dado.audio}"></audio>
                <a href="${dado.link}" target="_blank">Ver mais</a>
            </div>
        `;
        }
    } else {
        section.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
}

// Função de busca
function buscarMusica() {
    let termoPesquisa = inputPesquisa.value.trim().toLowerCase();

    // Verificar se o campo de pesquisa está vazio
    if (termoPesquisa === "") {
        alert("Por favor, digite algo no campo de pesquisa!");
        return; // Não faz a busca se o campo estiver vazio
    }

    // Filtrar resultados com base no termo de pesquisa
    let resultadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoPesquisa) ||
        dado.titulo.toLowerCase().includes(termoPesquisa)
    );

    // Exibir os resultados filtrados
    exibirResultados(resultadosFiltrados);
}

// Adicionar evento ao botão de pesquisa
botaoPesquisa.addEventListener("click", buscarMusica);
