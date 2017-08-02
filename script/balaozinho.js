let regioesAnotadas = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');

regioesAnotadas.forEach(raEl => {

  raEl.addEventListener('mouseenter', e => {
    let regiaoAnotadaEl = e.currentTarget;
    balaozinhoEl.innerHTML = '<h2>' + regiaoAnotadaEl.dataset.titulo + '</h2>';
    balaozinhoEl.innerHTML += '<p>' + regiaoAnotadaEl.dataset.conteudo + '</p>';
  });

  raEl.addEventListener('mouseleave', e => {
    balaozinhoEl.innerHTML = '';
  });

  raEl.addEventListener('mousemove', e => {
    balaozinhoEl.style.left = e.pageX + 'px';
    balaozinhoEl.style.top = e.pageY + 'px';
  });
});

let inputs = document.querySelectorAll('.controles input');
inputs.forEach(inputEl => {

  inputEl.addEventListener('keyup', e => {
    atualizaRegiao(regioesAnotadas[0]);
  });

  inputEl.addEventListener('change', e => {
    atualizaRegiao(regioesAnotadas[0]);
  });
});

function atualizaRegiao(marcacaoEl) {
  let x = document.querySelector('#balao-x').value;
  let y = document.querySelector('#balao-y').value;
  let largura = document.querySelector('#balao-largura').value;
  let altura = document.querySelector('#balao-altura').value;

  marcacaoEl.style.left = x + 'px';
  marcacaoEl.style.top = y + 'px';
  marcacaoEl.style.width = largura + 'px';
  marcacaoEl.style.height = altura + 'px';
}