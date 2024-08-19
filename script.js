function enviarCadastro() {

var cadastroCinema = new Object();

var myJSON = JSON.stringify(cadastroCinema)

cadastroCinema.nomeCompleto = document.getElementById('nomeCompleto').value;
cadastroCinema.genero = document.getElementById('genero').value;
cadastroCinema.nome = document.getElementById('nome').value;
cadastroCinema.cpf = document.getElementById('cpf').value;
cadastroCinema.nascimento = document.getElementById('nascimento').value;
cadastroCinema.email = document.getElementById('email').value;
cadastroCinema.telefone = document.getElementById('telefone').value;
cadastroCinema.estado = document.getElementById('estado').value;
cadastroCinema.cidade = document.getElementById('cidade').value;
cadastroCinema.senha = document.getElementById('senha').value;
cadastroCinema.senha2 = document.getElementById('senha2').value;

console.log(myJSON)
console.log(cadastroCinema.valueOf())
}

