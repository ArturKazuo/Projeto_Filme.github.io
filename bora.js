/* Início */

const API_KEY = '9445eb9a20214f6cc1532e996795af8c';

var somaI = 0;

var texto = '';

var textoCarousel = '';

var textoCTP = '';

var j = 0;

var somaJ = 0;

var carouselFunction = 0;

/*******************************************************************************************************************************************/

function executaTop_rated(){

    function exibeTopRated(){

        let divTela = document.getElementById('melhores');
        let dados = JSON.parse (this.responseText);
        for (j=somaJ; j<somaJ+3; j++) {
            let filmeJ = dados.results[j];

            textoCTP = textoCTP + `
            <div class="col-6 col-md-4 box-populares">
                <a href="filme.html#${filmeJ.id}"><img src="https://image.tmdb.org/t/p/w200/${filmeJ.poster_path}" class="img"></a>
                <p class="titulo"><strong>${filmeJ.title}</strong>
                <br>Nota: ${filmeJ.vote_average}
                </p>
            </div>            
            `;

        };

        somaJ = j;

        divTela.innerHTML = textoCTP;
    }

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeTopRated;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-br`);
    xhr.send ();

}

/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/

/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/


function exibeFilmes () {

    event.preventDefault();

    let divTela = document.getElementById('populares');
    let dados = JSON.parse (this.responseText);
    for (i=somaI; i<somaI+3; i++) {
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-6 col-md-4 box-populares">
            <a href="filme.html#${filme.id}"><img src="https://image.tmdb.org/t/p/w200/${filme.poster_path}" class="img"></a>
            <p class="titulo"><strong>${filme.title}</strong></p>
        </div>            
        `;

    };

    somaI = i;

    divTela.innerHTML = texto;
}

function executaPopulares () {

    event.preventDefault();

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-br`);
    xhr.send ();
}

document.getElementById ('maisPopbtn').onclick = () => {
    alert("fenofeni")
}
document.getElementById('maisMelhoresBtn').onclick = executaTop_rated;

/****************************************************************************/