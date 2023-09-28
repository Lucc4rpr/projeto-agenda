const form = document.getElementById('form-atividade');

const contatos = [];
const telefones = [];

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('num-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já existe`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');

        corpoTabela.innerHTML = linhas;
}
