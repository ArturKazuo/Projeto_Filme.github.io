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

    document.getElementById('maisMelhoresBtn').onclick = executaTop_rated;
    document.getElementById ('maisPopbtn').onclick = executaPopulares;
}

/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************/

function executaCarouselInteiro(){

    carouselFunction++;

    function exibeFilmesCarousel () {

        let divTela = document.getElementById('carousel-inner');
        let dados = JSON.parse (this.responseText);

        for (i=0; i<6; i++) {

            let filmeC = dados.results[i];

            if(i == 0)
            {
                textoCarousel=`
                <div class="carousel-item active">
                    <div class="row carousel_grid">
                        <div class="col-12 col-xl-4">
                            <div class="carouselImg">
                            <a href="filme.html#${filmeC.id}"><img src="https://image.tmdb.org/t/p/w342/${filmeC.poster_path}"></a>                            </div>
                        </div>

                        <div class="col-12 col-xl-8 carouselText">
                            <div class="texto_principal">
                                <a href="filme.html#${filmeC.id}"><h1>${filmeC.title}</h1></a>
                                <p>
                                    <strong>Sinopse:</strong>${filmeC.overview}
                                    <br><strong>Estreia:</strong>${filmeC.release_date}
                                    <br><strong>Avaliação:</strong>${filmeC.vote_average}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            else
            {
                textoCarousel = textoCarousel + `
                <div class="carousel-item">
                    <div class="row carousel_grid">
                        <div class="col-12 col-xl-4">
                            <div class="carouselImg">
                            <a href="filme.html#${filmeC.id}"><img src="https://image.tmdb.org/t/p/w342/${filmeC.poster_path}"></a>                            </div>
                        </div>

                        <div class="col-12 col-xl-8 carouselText">
                            <div class="texto_principal">
                                <a href="filme.html#${filmeC.id}"><h1>${filmeC.title}</h1></a>
                                <p>
                                    <strong>Sinopse:</strong>${filmeC.overview}
                                    <br><strong>Estreia:</strong>${filmeC.release_date}
                                    <br><strong>Avaliação:</strong>${filmeC.vote_average}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }

        };
        divTela.innerHTML = textoCarousel;

        executaTop_rated();
    }

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmesCarousel;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-br`);
    xhr.send ();

}

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

    if(carouselFunction == 0)
    {
        executaCarouselInteiro();
    }
    

}

function executaPopulares () {
    console.log("em destaque todo");

    event.preventDefault();

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-br`);
    xhr.send ();
}

window.onload = () => {
    executaPopulares();
    imprimeDados();
} 

/****************************************************************************/