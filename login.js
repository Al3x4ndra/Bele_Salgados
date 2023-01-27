const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === ''){
        // mostrar o erro
        // adicionar a classe error
        errorValidation(username, 'Preencha esse campo')
    } 

    else {
        // adicionar a classe de succcess
        successValidation(username)
    }  

    if(numberValue === ''){
        errorValidation(password, 'Preencha esse campo')
    }
    else if (passwordValue.length < 8){
        errorValidation(password, 'A senha deve ter + de 8 caracteres')   
    }
    else {
        successValidation(password)
    }
}