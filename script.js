let modelSelected = '';
let neckSelected = '';
let materialSelected = '';
let author = '';
let newAuthor = true;

function createUser() {
  if (checkUser() == null) {
    let user = prompt('Qual é o seu nome?');
    localStorage.setItem('username', user);
  }
}

function checkUser() {
  let userCheck = localStorage.getItem('username');
  if (userCheck == 'null') {
    return null;
  } else {
    return userCheck;
  }
}

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

function getLastOrders() {
  const lastOrderCards = document.querySelector('.last-order-cards');
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
  );
  promise.then((res) => {
    for (i = 0; i <= 9; i++) {
      let owner = res.data[i].owner;
      let image = res.data[i].image;
      lastOrderCards.innerHTML += ` <div id="${i}" class="last-order-card" onclick="repeatLastOrder(this)">
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

function postShirt(data) {
  const promise = axios.post(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts',
    data
  );
  promise.then(confirmRequest);
  promise.catch(informError);
}

function sendRequest() {
  if (enabledButton() == true) {
    const data = {
      model: modelSelected,
      neck: neckSelected,
      material: materialSelected,
      image: input,
      owner: checkUser(),
      author: checkUser(),
    };
    postShirt(data);
  }
}

function confirmRequest(res) {
  if (res.status === 201) {
    alert('Encomenda feita com sucesso');
    window.location.reload();
  }
}

function informError(err) {
  if (err.status === 422) {
    alert('Ops, não conseguimos processar sua encomenda');
  }
}

function repeatLastOrder(card) {
  let id = card.getAttribute('id');
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
  );
  promise.then((res) => {
    const data = {
      model: res.data[id].model,
      neck: res.data[id].neck,
      material: res.data[id].material,
      image: res.data[id].image,
      owner: res.data[id].owner,
      author: checkUser(),
    };
    if (
      confirm(` Confirmar o pedido:\n 
    modelo: ${res.data[id].model}\n 
    gola: ${res.data[id].neck}\n
    tecido: ${res.data[id].material}\n
    criador: ${res.data[id].owner}`) == true
    ) {
      postShirt(data);
    }
  });
}

// For Test
function clearUser() {
  // localStorage.setItem('username', null);
  console.log('função de teste que limpa o user do cache');
}

getLastOrders();
