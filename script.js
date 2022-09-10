//Modelo de fire base ***Realtime Database***
var usuario = 'hilton';
var mensagem = 'ola mundo';
aweit atualizar();

const firebaseConfig = {
  apiKey: "AIzaSyC0T39y0jVVPyKx5Fkc4IWBEJ5vsVlnJIQ",
  authDomain: "teste-firebase-db0af.firebaseapp.com",
  databaseURL: "https://teste-firebase-db0af-default-rtdb.firebaseio.com",
  projectId: "teste-firebase-db0af",
  storageBucket: "teste-firebase-db0af.appspot.com",
  messagingSenderId: "735577787078",
  appId: "1:735577787078:web:ca0edd55f705b46e1865c7",
  measurementId: "G-ZHWSMREN0R"
};

//inicializa o banco de dados
firebase.initializeApp(firebaseConfig);

//obtem a referencia do banco de dados
let bdRef = firebase.database().ref();

//Obtem a referencia dos dados
let dadosRef = bdRef.child('chat');


//obtem lista do firebase
function atualizar(){
  var caixa = document.getElementById('caixas_de_mensagens');
  
  caixa.innerHTML = '';
  
dadosRef.on("child_added", snap => {

  //obtem dados da base
  let pessoa = snap.val();

  var caixa = document.getElementById('caixas_de_mensagens');
  
  caixa.innerHTML += `<div id="m"><p>${pessoa.usuario}:</p><p>${pessoa.mensagem}</p></div>`
  

});}


//Envia novos dados
function enviar(usuario,mensagem){

  //O indice e o valor
  let valores = {usuario: usuario,mensagem: mensagem}

  //cria um id para esse valor
  let id = firebase.database().ref().child('chat').push().key;

  //monta um tipo de JSON
  let up = {};
  up['/chat/' + id] = valores;
 
  //A variavel envio recebe o destino de envio
  let envio = firebase.database().ref();

  //Envia
  envio.update(up);
  atualizar();
  
 
  
}

function inicio(){
  usuario = prompt('Qual seu nome?');
  if(usuario == '' || usuario == undefined ){usuario = prompt('Qual seu nome?')};
  
}
inicio()
atualizar()
function enviar_mensagem(){
  var mensagem = window.document.getElementById('tex').value;
  enviar(usuario,mensagem);
  

  
}
