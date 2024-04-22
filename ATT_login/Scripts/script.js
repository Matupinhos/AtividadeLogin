/* Definir um login */
var usuario = {
    nome: 'lorenzo',
    senha: 'abc'
}
/* Fazer uma função para pegar os dados que a pessoa botar e ver se é igual ao login */
function pegarDados() {
    /* Pegar os dados que a possoa digitou */
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    var user = document.querySelector('.usuario')

    /* Fazer um IF para ver se o nome e a senha que a pessoa botar é igual ao login */
    if ((usuario.nome == nome) && (usuario.senha == senha)) { /*Se for igual o usuario vai ser direcionado para página2 */ 
        window.location.href = "pagina2.html"
    } else { /* Se não for vai mostrar um alert e botar em branco os inputs*/
        var nome = document.getElementById('nome').value = ""
        var senha = document.getElementById('senha').value = ""
        alert("Login Incorreto!")
    }
    
}
/* Agora fazer uma função para mostrar o login no pagina2 */
function mostrarResultado() {
    document.getElementById('nomeR').innerHTML = "Nome = " + usuario.nome;
    document.getElementById('senhaR').innerHTML = "Senha = " + usuario.senha;
}