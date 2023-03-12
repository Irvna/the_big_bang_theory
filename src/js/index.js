/*
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
	- passo 1 - dar um jeito de pegar o elemento HTML dos botões
	- passo 2 - dar um jeito de identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão selecionado anterior
	- passo 4 - marcar o botão clicado como se estivesse selecionada
	- passo 5 - esconder a imagem anterior
	- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//pega um elemento do HTMl;
const botoesCarrossel = document.querySelectorAll('.button');
const listaImgs = document.querySelectorAll('.img');

//identificar clique no botão;
//aqui ele vai fazer um loop pelos codigos (forEach = para cada);
botoesCarrossel.forEach((button, indice) => {

	//para cada clique no button ele vai fazer algo;
	button.addEventListener('click', () => {
		//desmarcar o botão, querySelector (marcar 1 coisa);
		desativarBotaoSelecionado();

		//marcar o botão que deseja;
		button.classList.add('selecionado');

		//esconder imagem do fundo;
		escondeImgAtiva();

		//fazer a imagem aparecer conforme o botao;
		novaImg(indice);
	})
})


function novaImg(indice) {
	listaImgs[indice].classList.add('ativa');
}

function escondeImgAtiva() {
	const imgAtiva = document.querySelector('.ativa');
	imgAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector('.selecionado');
	botaoSelecionado.classList.remove('selecionado');
}



