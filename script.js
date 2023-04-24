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

function selectedCollar(collar) {
  const selected = document.querySelector('.collars');
  const collar_selected = selected.querySelector('.selected');
  const collar_check = selected.querySelector('.selected');

  if (collar_selected !== null && collar_check !== null) {
    collar_selected.classList.add('unselected');
    collar_selected.classList.remove('selected');
  }

  collar.classList.remove('unselected');
  collar.classList.add('selected');
}

function selectedTissue(tissue) {
  const selected = document.querySelector('.tissues');
  const tissue_selected = selected.querySelector('.selected');
  const tissue_check = selected.querySelector('.selected');

  if (tissue_selected !== null && tissue_check !== null) {
    tissue_selected.classList.add('unselected');
    tissue_selected.classList.remove('selected');
  }

  tissue.classList.remove('unselected');
  tissue.classList.add('selected');
}

function inputLink(input) {
  console.log(input);
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

getShirts();
console.log(user);
