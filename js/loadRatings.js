const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhIRBxIOExAQEREVFxYVDRcVExIVGBIWFhUSFRUYHSggGh0lGxcVLTEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ4PEjEZFRkrKysrLTctLSsrKzctNysrLSsrNy0tKysrKy0rLSsrKysrKysrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADUQAQABAgMDCQcEAwEAAAAAAAABAgMEBRESITETQVFhcYGhscEUIjI0kdHwQlKS4SRy8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqiiblWlETMg8vsRrOkcV2jLKqvjmmPGWjh8NTh6fcjf088mjMtZdXX8WlPbx+kJ4yr91U/xaQmqzpyqOaqf4o68rqj4KontjRqhowbuErtfHTOnTG+EDpVTE4Gm9GtO6rp6e2DUxij3dtTZr0uRv/N8PCgAAAAAAAAAAAAAAAAAA3MDh+Qsxr8U75+zHw9O3iKY6aodClABFAAAAAAQYzDxiLWnPHCWFMaTpPGHSMjNbWxfiqP1ecfkLBRAVAAAAAAAAAAAAAAAAFnL41xlPf5S3GHlvzlPf5S3EpABFAAAAAAFLNaNrC6/tmPt6rqtmM/4dWvV5wDDAaQAAAAAAAAAAAAAAABZy75ynv8pbjCwE6Yynt9JbqVQBAAAAAAAYmZVTOLmJmdI07t0Ntg46dcZV2+iwQAKgAAAAAAAAAAAAAAACfBRPtNMxE7qo5m8hwdGxhqYp6In6pkqgCAAAAAAAwMXExiatqJjWqebrb6pmdG1hJmeMaTH1WDFAVAAAAAAAAAAAAAAAAG5l9e3hKerd9Flm5Pc3VUz2+k+jSZqgAAAAAAAClm1ezhtP3THhv+y6yc2ubV6KY/THjKwUAFQAAAAAAAAAAAAAAABJh702LsVU/wDYbeFv+0WdqI047tWA08nubqqZ7fSfQo0gGVAAAAAAQYvEez2tdNd+nFh3bk3LkzVxmWhnFe+mmOufSPVmtRAAAAAAAAAAAAAAAAAABNhL3IYiJnhwnsQgOlidY3CllVya7GlX6Z0hdZUAAAABWzGuaMJOzz6R9QZWMu8tiZmOHCOyEANIAAAAAAAAAAAAAAAAAAAA2MpjTDT11T5RC6rZfTsYOnr1n6zqssqAAAAK2YxtYOru84WUeIp27FURz0zHgDngGkAAAAAAAAAAAAAAAAAAHqinbriKeMzoUUzXVpREzLVwGC5Gdq78XkC7TGzTERzQ+gyoAAAAADn8Vb5LEVR1+E8ETbx2E9op1p3VRw6+qWPctzaq0uRMS1EeAAAAAAAAAAAAAAB9iNqdKd8r2Hy2a997dHRz/wBAo007c6URMz1L+Hyyat9+dI6I4tGzZps06W4iPOe9ImmI7VmmzTpbiISAigAAAAAAADzctxcp0riJh6AZmIyznsT3T6Sz7lubdWlyJiXRvFy3F2nS5ETC6mOdGjiMs034ee6fSVCuiaKtK4mJ61HkAAAAAAH2N87gfFvC4Gq9vq92nxnshbwWA2I2r++ejmj+19NENjD02I/847+ee9MCKAAAAAAAAAAAAAAAAI71mm9TpciJ/OlIAyMVl8299r3o8Y+6i6VTxmBi/GtG6rwntXUYw9VUzRVMVRpMPKgAA0sqw2vv1933Z1MbVURHGZ0dFbo5O3EU8IjQo9AMqAAAAAAAAAAAAAAAAAAAAAAo5nh9u3t08aePXDIdLMaxvc9ft8leqp6J8OZYiMBRLhfmaP8AanzdACUgAigAAAAAAAAAAAAAAAAAAAAADEzL5yru8oBYKoCsv//Z';

var ratings='';

function leDados () {
  let strDados = localStorage.getItem('db');
  let objRatings = {};

  if (strDados) {
      objRatings = JSON.parse (strDados);
  }
  else {
    objRatings = {
      avals:[{
        nome: "Lucas de Oliveira Ferreira",
        titulo: "Ilha do Medo",
        nota: "5",
        descrip: "Filme de suspense e mistério ambientado nos anos 50, mostrando dois policiais que vao para um hospício para criminosos em uma ilha isolada para investigar o desaparecimento de uma paciente. Entretanto, descobrem um plano sinistro ocorrendo atrás das cortinas na instituição. Quanto menos se sabe sobre a história nesse filme melhor, já que contém diversas reviravoltas e surpresas. O longa contém diversos simbolismos e prestar atenção nos detalhes revela outras camadas na trama. Direção impecável "
      },
      {
        nome: "Lucas Henrique",
        titulo: "Resgate",
        nota: "3",
        descrip: "ação generica, o principal foi contratado por uma facção para resgatar o filho do chefe da quadrilha de um grupo rival no oriente médio"
      },
      {
        nome: "Rosamaria",
        titulo: "Meu Pai",
        nota: "4",
        descrip: "Filme interessante, pois aborda a doença de Alzheimer sobre a perspectiva do doente. Isso torna a narrativa confusa para o telespectador, que só entende o que realmente está acontecendo no final do filme.  "
      }]
    };
  }

  return objRatings;
}

function salvaDados (dados) {
  localStorage.setItem ('db', JSON.stringify (dados));
}

function imprimeDados () {

  console.log("foi imprime dados");

  let tela = document.getElementById('text-center');
  let textoRatings = '';
  let objRatings = leDados ();

  for(i=0;i<objRatings.avals.length; i++){
    let nome = objRatings.avals[i].nome;
    let titulo = objRatings.avals[i].titulo;
    let nota = objRatings.avals[i].nota;
    let descrip = objRatings.avals[i].descrip;

    for(let j=0;j<nota;j++){
      ratings+=`<i class="fas fa-star"></i>`;
    }
    
    textoRatings += `<div class="col-sm-6 col-md-4">																		
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
                </div>`;

    ratings='';

  }

  tela.innerHTML = textoRatings;
}

function incluirContato (){
  // Ler os dados do localStorage
  let objRatings = leDados();

  // Incluir um novo contato
  let nomeR = document.getElementById('nome').value;
  let tituloR = document.getElementById('titulo').value;
  let notaR = document.getElementById('nota').value;
  let descripR = document.getElementById('descrip').value;
  let novoPost = {
      nome: nomeR,
      titulo: tituloR,
      nota: notaR,
      descrip: descripR
  };
  objRatings.avals.push (novoPost);

  // Salvar os dados no localStorage novamente
  salvaDados (objRatings);

  // Atualiza os dados da tela
  imprimeDados ();
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
  <button onclick="incluirContato()" id="postarAval" type="button" class="btn btn-primary">Postar</button>`;

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
/*document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);*/















    /*var i=0;
    var j=0;
    var textoRL=`<div class="col-sm-6 col-md-4">																		
                      <div class="testimonial-box">							
                        <img src="imgs/pk final.png" class="img-responsive" alt="" width="90">
                        <div class="ratings-icons">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <h4>Lucas De Oliveira Ferreira</h4>
                        <p>
                          <strong>Filme: </strong>Ilha do Medo
                          <br><strong>Avaliação: </strong>Filme de suspense e mistério ambientado nos anos 50, mostrando dois policiais que vao para um hospício para criminosos em uma ilha isolada para investigar o desaparecimento de uma paciente. Entretanto, descobrem um plano sinistro ocorrendo atrás das cortinas na instituição. Quanto menos se sabe sobre a história nesse filme melhor, já que contém diversas reviravoltas e surpresas. O longa contém diversos simbolismos e prestar atenção nos detalhes revela outras camadas na trama. Direção impecável 
                          5/5
                        </p>								 							
                        
                      </div>					
                    </div> 						
                    
                    <div class="col-sm-6 col-md-4">																		
                      <div class="testimonial-box">							
                        <img src="imgs/lucao final.png" class="img-responsive" alt="" width="90">
                        <div class="ratings-icons">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas"></i>
                          <i class="fas"></i>
                        </div>
                        <h4>Lucas Henrique</h4>
                        <p>
                          <strong>Filme: </strong>Resgate
                        <br><strong>Avaliação: </strong>ação generica, o principal foi contratado por uma facção para resgatar o filho do chefe da quadrilha de um grupo rival no oriente médio
                        </p>									 							
                        
                      </div>					
                    </div>							
                    
                    <div class="col-sm-6 col-md-4">																		
                      <div class="testimonial-box">
                        <img src="imgs/mumis final.png" class="img-responsive" alt="" width="90">
                        <div class="ratings-icons">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas"></i>
                        </div>
                        <h4>Rosamaria</h4>
                        <p>
                          <strong>Filme: </strong>Meu Pai
                          <br><strong>Avaliação: </strong>Filme interessante, pois aborda a doença de Alzheimer sobre a perspectiva do doente. Isso torna a narrativa confusa para o telespectador, que só entende o que realmente está acontecendo no final do filme.  
                        </p>									 							
                        
                      </div>					
                    </div>`;

    function printPosts(){

      console.log("printPosts");

      let divTelaR = document.getElementById('text-center');
      let InsideDivTela = document.getElementById('ratings-icons');

      for(i=0;i<localStorage.length; i++){
        let post = JSON.parse(localStorage.getItem(`${i}`));
        let nome = post[0];
        let titulo = post[1];
        let nota = post[2];
        let descrip = post[3];

        for(let j=0;j<nota;j++){
          ratings+=`<i class="fas fa-star"></i>`;
        }
        
        textoRL += `<div class="col-sm-6 col-md-4">																		
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
                    </div>`;

        ratings='';

      }

      divTelaR.innerHTML = textoRL;
    }*/
