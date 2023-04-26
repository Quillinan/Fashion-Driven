const user = prompt('Qual é o seu nome?');
let modelSelected = '';
let neckSelected = '';
let materialSelected = '';
let author = '';
let newAuthor = true;

function selectedModel(model) {
  const selected = document.querySelector('.models');
  const model_selected = selected.querySelector('.selected');
  const model_check = selected.querySelector('.selected');
  modelSelected = model.getAttribute('value');

  if (model_selected !== null && model_check !== null) {
    model_selected.classList.add('unselected');
    model_selected.classList.remove('selected');
  }

  model.classList.remove('unselected');
  model.classList.add('selected');
}

function selectedNeck(neck) {
  const selected = document.querySelector('.necks');
  const neck_selected = selected.querySelector('.selected');
  const neck_check = selected.querySelector('.selected');
  neckSelected = neck.getAttribute('value');

  if (neck_selected !== null && neck_check !== null) {
    neck_selected.classList.add('unselected');
    neck_selected.classList.remove('selected');
  }

  neck.classList.remove('unselected');
  neck.classList.add('selected');
}

function selectedMaterial(material) {
  const selected = document.querySelector('.materials');
  const material_selected = selected.querySelector('.selected');
  const material_check = selected.querySelector('.selected');
  materialSelected = material.getAttribute('value');

  if (material_selected !== null && material_check !== null) {
    material_selected.classList.add('unselected');
    material_selected.classList.remove('selected');
  }

  material.classList.remove('unselected');
  material.classList.add('selected');
}

function getShirts() {
  const lastOrderCards = document.querySelector('.last-order-cards');
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
  );
  promise.then((res) => {
    for (i = 0; i <= 9; i++) {
      let owner = res.data[i].owner;
      let image = res.data[i].image;
      lastOrderCards.innerHTML += ` <div class="last-order-card">
      <div class="last-order-card-img">
        <img src="${image}" />
      </div>
      <div class="last-order-card-text">
        <p class="text-owner">Criador :&nbsp;</p>
        <p>${owner}</p>
      </div>
    </div>`;
    }
  });
}

function inputCheck() {
  input = document.querySelector('input').value;
  if (input !== '') {
    return true;
  }
  return false;
}

function enabledButton() {
  const selections = document.querySelectorAll('.selected');
  const counter = selections.length;
  const enable = document.querySelector('button');
  inputCheck();

  if (counter === 3 && inputCheck() == true) {
    enable.classList.add('enable');
    return true;
  }
  enable.classList.remove('enable');
  return false;
}

function checkAutor() {
  if (newAuthor === true) {
    author = user;
  }
}

function post(data) {
  const promise = axios.post(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts',
    data
  );
  promise.then(confirm);
  promise.catch(informError);
}

function sendRequest() {
  if (enabledButton() == true) {
    checkAutor();
    const data = {
      model: modelSelected,
      neck: neckSelected,
      material: materialSelected,
      image: input,
      owner: user,
      author: author,
    };
    post(data);
  } else {
    console.log('Não pode');
  }
}

function confirm(res) {
  if (res.status === 201) {
    alert('Encomenda feita com sucesso');
  }
}

function informError(err) {
  if (err.status === 422) {
    alert('Ops, não conseguimos processar sua encomenda');
  }
}

getShirts();
