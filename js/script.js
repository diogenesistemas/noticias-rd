const API_KEY = "7c70dbf3441a4bb588bfd143be47243f"
let config = {
    method: "GET"
}

let boardNoticias = document.querySelector('#boardNoticias');
let btnCarregar = document.querySelector('#carregar');


function mostrarNaTela(listaNoticias) {

    listaNoticias.forEach(noticia => {

        let titulo = noticia.title.substring(0, 100);;
        let descricao = noticia.description.substring(0, 100);
        let conteudo = noticia.content;
        let imagem = noticia.urlToImage;
        let url = noticia.url;


        let novaNoticia = `
    <div class="col-md-4">                
    <img class="card-img" src="${imagem}" alt="${titulo}" title="${titulo}">
        <h3 class="text-center">${titulo}</h3>
        <div class="card-body text-justify">
            ${descricao}
        </div>
        <a href="${url}" class="btn btn-primary">Ver Notícia Completa</a>
    </div>
</div>
    `
        boardNoticias.insertAdjacentHTML('beforeend', novaNoticia);
    });
}


btnCarregar.onclick = () => {

    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            //a resposta chega um boddy e precisa extrair o jason e retorna outra promessa
            return resposta.json()
        })
        .then((json) => {
            mostrarNaTela(json.articles);

        });

}





