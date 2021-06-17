const API_KEY = '9445eb9a20214f6cc1532e996795af8c';

/******************************************* Leia Mais *******************************************/

function exibeFilmeID () {

    let divTelaID = document.getElementById('divID');
    texto = '';

    let dadosID = JSON.parse (this.responseText);
    let data = new Date (dadosID.release_date);

    texto =`
    <div class="col-12 divIDBackdrop">
        <img src="https://image.tmdb.org/t/p/original${dadosID.backdrop_path}">
    </div>
    <div class="col-12 divIDTexto">
        <h3>
            ${dadosID.title}
        </h3>
        <div class="ratingsNstuff">
            <div>
                <p>Data de lançamento: ${data}</p>
            </div>
            <div>
                <p>Duração: ${dadosID.runtime} mins</p>
            </div>
            <div>
                <p>Avalição: ${dadosID.vote_average}</p>
            </div>
        </div>
        <div>
            <p>
                ${dadosID.tagline}
                <br>
                <br>
                ${dadosID.overview}
            </p>
        </div>
    </div>
    `;

    divTelaID.innerHTML = texto;

}


function executaLeia () {
    let idFilme = location.href.split('#')[1]

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmeID;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/${idFilme}?api_key=${API_KEY}&language=pt-br`);
    xhr.send ();
}

window.onload = executaLeia;

/*************************************** Fim Leia Mais **************************************************/
