var usuario = {
    nome: 'lorenzo',
    senha: 'abc'
}
function pegarDados() {
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    var user = document.querySelector('.usuario')

    if ((usuario.nome == nome) && (usuario.senha == senha)) {
        window.location.pathname = "/pagina2.html"
        user.innerHTML = usuario.nome
    } else {
        alert("Login Incorreto")
    }
    
}