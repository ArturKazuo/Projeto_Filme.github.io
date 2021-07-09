/* variaveis */

var buttonsAA = '';
var textoAA = '';

/**************************************************************************************************/

/* resto */

function getPostedAval(){

    console.log("getPostedAval")

    var textoR = document.getElementById('text-center').innerHTML;

    let i=0;

    let divTelaR = document.getElementById('text-center');

    while(i!=localStorage.length)
    {
      i++;
    }
    i--;

    let post = JSON.parse(localStorage.getItem(`${i}`));
    let nome = post[0];
    let titulo = post[1];
    let nota = post[2];
    let descrip = post[3];

    for(let j=0;j<nota;j++){
        ratings+=`<i class="fas fa-star"></i>`;
    }

    textoR +=`<div class="col-sm-6 col-md-4">																		
                <div class="testimonial-box">
                <img src="${image}" class="img-responsive" alt="" width="90">
                <div id="ratings-icons" class="ratings-icons">
                    ${ratings}
                </div>
                <h4>${nome}</h4>
                <p>
                    <strong>Filme: </strong>${titulo}
                    <br><strong>Avaliação: </strong>${descrip}
                </p>									 							
                
                </div>					
            </div>`

    divTelaR.innerHTML = textoR;

}

function postAval(){

    console.log("ratings posted");

    let i=0;

    let nomeR = document.getElementById('nome').value;
    let tituloR = document.getElementById('titulo').value;
    let notaR = document.getElementById('nota').value;
    let descripR = document.getElementById('descrip').value;

    let data = {
        nome: nomeR, 
        titulo: tituloR, 
        nota: notaR,
        descrip: descripR
    },
                
    
    while(i!=localStorage.length)
    {
      i++;
    }

    console.log(i);

    let dataJSON = JSON.stringify(data);

    localStorage.setItem(`${i}`, dataJSON);

    getPostedAval();

}


function appearAval(){
    let divTelaAA = document.getElementById('AppearAval');
    let divTelaBtnAA = document.getElementById('buttonsAA');

    textoAA = ` <input class="inputFields" id="nome" type="text" placeholder="Seu nome">
    <input class="inputFields" id="titulo" type="text" placeholder="Título do filme">
    <input class="inputFields" id="nota" name="nota" list="notaL" placeholder="Nota">
    <datalist class="inputFields" id="notaL">
      <option value="1">Estrela</option>
      <option value="2">Estrelas</option>
      <option value="3">Estrelas</option>
      <option value="4">Estrelas</option>
      <option value="5">Estrelas</option>
    </datalist>
    <textarea class="inputFields" name="descrip" id="descrip" cols="30" rows="10" placeholder="Texto"></textarea>`;

    buttonsAA = `<button onclick="cancelAval()" id="cancelAval" type="button" class="btn btn-primary btnCancel">Cancelar</button>
    <button onclick="postAval()" id="postarAval" type="button" class="btn btn-primary">Postar</button>`;

    divTelaAA.innerHTML = textoAA;
    divTelaBtnAA.innerHTML = buttonsAA;
}

function cancelAval(){
    console.log("foi o cancelamento")
    let divTelaAA = document.getElementById('AppearAval');
    let divTelaBtnAA = document.getElementById('buttonsAA');
    textoAA='';
    buttonsAA='';
    divTelaAA.innerHTML = textoAA;
    divTelaBtnAA.innerHTML = buttonsAA;
}

document.getElementById('escreverAval').onclick = appearAval;
document.getElementById('cancelAval').onclick = cancelAval;
