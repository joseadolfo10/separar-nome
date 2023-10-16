function separarNomeSobrenome() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var nomeArray = nomeCompleto.split(' ');

    if (nomeArray.length >= 2) {
        document.getElementById('nome').value = nomeArray[0];
        document.getElementById('sobrenome').value = nomeArray.slice(1).join(' ');
    } else {
        alert('Por favor, insira um nome completo válido com pelo menos nome e sobrenome.');
    }
}
