const result = document.getElementById('result');
const buttons = document.querySelectorAll('.button');
const numeros = document.querySelectorAll('.number');

numeros.forEach(botao => {
    botao.addEventListener('click', () => {
        result.value = result.value + botao.textContent;
    });
});

let primeiroNumero = '0';
let operacao = '';

const botaoClear = document.querySelector('.clear');

botaoClear.addEventListener('click', () => {
    result.value = '';
    primeiroNumero = '0';
    operacao = '';
});

const botaoBackspace = document.querySelector('.backspace');

botaoBackspace.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});  

const botaovirgula = document.querySelector('.virgula');

botaovirgula.addEventListener('click', () => {
    if (result.value === '')   {
        result.value = '0.';
    } else if (!result.value.includes('.')) {
        result.value = result.value + '.';
    }
});

const BotaoPercent = document.querySelector('.percent');

BotaoPercent.addEventListener('click', () => {
    if (result.value === '') return;

    const numeroAtual = Number(result.value.replace(',', '.'));
    const resultado =Math.round((numeroAtual / 100) * 1e10) / 1e10;

    result.value = String(resultado).replace('.', ',');
});

const botaoSoma = document.querySelector('.addition');

botaoSoma.addEventListener('click', () => {
    if (result.value === '') return;

    primeiroNumero = Number (result.value.replace(',', '.'));
    operacao = '+';
    result.value = '';
});

const botaoIgual = document.querySelector('.equals');

botaoIgual.addEventListener('click', () => {
  if (operacao === '' || result.value === '') return;

  const segundoNumero = Number(result.value.replace(',', '.'));
  let resultado = 0;

  if (operacao === '+') {
    resultado = primeiroNumero + segundoNumero;
  } else if (operacao === '-') {
    resultado = primeiroNumero - segundoNumero;
  } else if (operacao === '*') {
    resultado = primeiroNumero * segundoNumero;
  } else if (operacao === '/') {
    if (segundoNumero === 0) {
      result.value = 'Erro';
      operacao = '';
      return;
    }
    resultado = primeiroNumero / segundoNumero;
  }

  resultado = Math.round(resultado * 1e10) / 1e10;
  result.value = String(resultado).replace('.', ',');
  operacao = '';
  primeiroNumero = 0;
});

const botaoSubtracao = document.querySelector('.subtraction');

botaoSubtracao.addEventListener('click', () => {
  if (result.value === '') return;

  primeiroNumero = Number(result.value.replace(',', '.'));
  operacao = '-';
  result.value = '';
});

const botaoMultiplicacao = document.querySelector('.multiplication');

botaoMultiplicacao.addEventListener('click', () => {
  if (result.value === '') return;

  primeiroNumero = Number(result.value.replace(',', '.'));
  operacao = '*';
  result.value = '';
});

const botaoDivisao = document.querySelector('.division');

botaoDivisao.addEventListener('click', () => {
  if (result.value === '') return;

  primeiroNumero = Number(result.value.replace(',', '.'));
  operacao = '/';
  result.value = '';
});

let resultadoNaTela = false;

document.addEventListener('click', (evento) => {
  const botao = evento.target;

  if (botao.classList.contains('equals') && operacao !== '' && result.value !== '') {
    resultadoNaTela = true;
  }

  if (resultadoNaTela && (botao.classList.contains('number') || botao.classList.contains('virgula'))) {
    result.value = '';
    resultadoNaTela = false;
  }

  if (botao.classList.contains('clear') || botao.classList.contains('addition') ||
      botao.classList.contains('subtraction') || botao.classList.contains('multiplication') ||
      botao.classList.contains('division')) {
    resultadoNaTela = false;
  }
}, true);

