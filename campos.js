var listElement = document.querySelector('#app ol');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var campos = JSON.parse(localStorage.getItem('list_campos')) || [];

function renderCampos() {
  listElement.innerHTML = '';
  
  for ( campo of campos) {
    var campoElement = document.createElement('li');
    var campoText = document.createTextNode(campo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = campos.indexOf(campo);
    linkElement.setAttribute('onclick', 'deleteCampo(' + pos + ')')

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    
    campoElement.appendChild(campoText);
    campoElement.appendChild(linkElement);

    listElement.appendChild(campoElement);

  }
};

renderCampos();

function addCampo() {
  var campoText = inputElement.value;
  
  campos.push(campoText);
  inputElement.value='';
  renderCampos();
  saveStorage();
}
buttonElement.onclick = addCampo;

function deleteCampo(pos) {
    campos.splice(pos, 1);
    renderCampos();
    saveStorage();
};

function saveStorage() {
    localStorage.setItem('list_campos', JSON.stringify(campos));
}