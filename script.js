const cl = console.log;
// -------------------------------------------------------------------------------------------------------------

let texto1 = document.querySelector('#l1')
let texto2 = document.querySelector('#l2')
let titulo = document.querySelector('#l3')
let cliente = document.querySelector('#clientes')
const box1 = document.querySelector('#Usuario');
const box2 = document.querySelector('#Telefone');
const botao1 = document.querySelector('#b1');
const botao2 = document.querySelector('#b2');
const botao3 = document.querySelector('#b3');
const botao4 = document.querySelector('#b4');
const fichaNome = [];
const fichaTel = [];

let sorteado = 0
// Usuario.value
// Telefone.value

function Cadastrar(){
	fichaNome.push(Usuario.value)
	fichaTel.push(Telefone.value)
	clientes.innerHTML = clientes.innerHTML + Usuario.value + ' - ' + Telefone.value + '<br>'
	Usuario.value = ''
	Telefone.value = ''
	box1.focus()
}

function Encerrar(){
	box1.classList.add('some')
	box2.classList.add('some')
	botao1.classList.add('some')
	botao3.classList.remove('some')
	texto1.classList.add('some')
	texto2.classList.add('some')
	botao4.classList.remove('some')
	botao2.classList.add('some')
	l3.innerHTML = 'Sorteio de Clientes'
}

function Sortear(){
	sorteado = Math.floor(Math.random() * fichaNome.length)
	texto1.classList.remove('some')
	texto2.classList.remove('some')
	l1.innerHTML = fichaNome[sorteado]
	l2.innerHTML = fichaTel[sorteado]
}

function Voltar (){
	l1.innerHTML = 'Usuário'
	l2.innerHTML = 'Telefone'
	box1.classList.remove('some')
	box2.classList.remove('some')
	botao1.classList.remove('some')
	botao3.classList.add('some')
	texto1.classList.remove('some')
	texto2.classList.remove('some')
	botao4.classList.add('some')
	botao2.classList.remove('some')
	l3.innerHTML = 'Cadastro de Clientes'
}

botao1.addEventListener('click', Cadastrar)
botao2.addEventListener('click', Encerrar)
botao3.addEventListener('click', Sortear)
botao4.addEventListener('click', Voltar)