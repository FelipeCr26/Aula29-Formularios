const formulario = document.getElementById("form");

//adiciona o evento para manipular o formulário ao botão de cadastro

const btnCadastrar = document.getElementById("btnCadastrar")

const listaPessoas = []


//função que trata o evento onClick do botão cadastrar
function cadastrar(event) {
    event.preventDefault()

    const imputNome = document.getElementById("name")
    const imputEmail = document.getElementById("email")
    const imputSenha = document.getElementById("password")

    const nome = imputNome.value
    const email = imputEmail.value
    const senha = imputSenha.value

    console.log({
        nome: nome,
        email: email,
        senha: senha
    })
}



btnCadastrar.addEventListener('click', cadastrar )


