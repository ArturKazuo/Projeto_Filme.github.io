const API_KEY = '9445eb9a20214f6cc1532e996795af8c';

function footerScreen(){
    document.getElementById("footer").style.bottom = "0px";
    document.getElementById ('btnPesquisa').onclick = function remFS(){
        document.getElementById("footer").style.bottom = "initial";
    }
}

window.onload = footerScreen;

function exibeFilmes () {

    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];
        let data = new Date (filme.release_date);

        texto = texto + `
            <div class="box-noticia">
                <img src="https://image.tmdb.org/t/p/w185/${filme.poster_path}" class="img">
                <div>
                    <span class="titulo"><strong>${filme.title}</strong></span><br>
                    <span>id:</span><span id="idFilme">${filme.id}</span><br>
                    <span class="creditos">${data.toLocaleDateString ()} - 
                        ${filme.vote_average}</span><br>
                    <span class="text">
                    ${filme.overview} <a id="leiaMaisBtn" href="filme.html#${filme.id}">Leia mais ...</a>
                    </span>
                </div>
            </div>            
        `;

    };

    divTela.innerHTML = texto;

}



function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pt-br`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);

/****************************************************************************/