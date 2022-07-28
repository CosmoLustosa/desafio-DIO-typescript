
let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal = 0;
limparSaldo();

//campoSaldo.innerHTML = 0

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}

botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});