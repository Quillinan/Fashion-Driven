function pegarCitacao() {
  const promise = axios.get('https://api.quotable.io/random');
  promise.then((res) => {
    console.log(res);
    divCitacao.innerHTML = `
          <i>${res.data.content}</i>
          <p>- ${res.data.author}</p>
      `;
  });
  promise.catch((err) => {
    console.log(err);
  });
}

pegarCitacao();

function selectedCollar() {
  // const selected = document.querySelector('')
  console.log('uiui');
}

function selectedModel() {
  // const selected = document.querySelector('')
  console.log('uiui');
}

function selectedTissue() {
  // const selected = document.querySelector('')
  console.log('uiui');
}
