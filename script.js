// const user = prompt('Qual é o seu nome?');

function selectedModel(model) {
  const selected = document.querySelector('.models');
  const model_selected = selected.querySelector('.selected');
  const model_check = selected.querySelector('.selected');

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

  if (material_selected !== null && material_check !== null) {
    material_selected.classList.add('unselected');
    material_selected.classList.remove('selected');
  }

  material.classList.remove('unselected');
  material.classList.add('selected');
}

function inputLink(input) {
  console.log(input);
}

function sendRequest() {
  if (enabledButton() == true) {
    console.log('Enviando dados...');
  } else {
    console.log('Não pode');
  }
}

function getShirts() {
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
  );
  promise.then((res) => {
    console.log(res);
  });
  promise.catch((err) => {
    console.log(err);
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
  inputCheck();

  if (counter === 3 && inputCheck() == true) {
    const enable = document.querySelector('button');
    enable.classList.add('enable');
    return true;
  }
  return false;
}

getShirts();
