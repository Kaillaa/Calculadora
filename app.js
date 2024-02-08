const inNumero = document.querySelector('#inNumero');
let outTabuada = document.getElementById('outTabuada');
const btnMostrar = document.querySelector('#btnMostrar');

btnMostrar.addEventListener('click', () => {
    let numero = Number(inNumero.value);

    if (numero === 0 || isNaN(numero)) {
        alert('Digite um número válido');
        inNumero.focus();
        return;
    }

    let respostaColuna1 = '';
    let respostaColuna2 = '';
    for (let i = 1; i <= 10; i++) {
        const resultado = `${numero} x ${i} = ${numero * i} <br>`;
        if (i <= 5) {
            respostaColuna1 += resultado;
        } else {
            respostaColuna2 += resultado;
        }
    }

    outTabuada.innerHTML = `<div class="coluna">${respostaColuna1}</div><div class="coluna">${respostaColuna2}</div>`;
});
