const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const number = document.getElementById('number')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmpassword')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const cpfValue = cpf.value.trim()
    const numberValue = number.value.trim()
    const passwordValue = password.value.trim()
    const confirmpasswordValue = confirmpassword.value.trim()

    if(usernameValue === ''){
        // mostrar o erro
        // adicionar a classe error
        errorValidation(username, 'Preencha esse campo')
    } 

    else {
        // adicionar a classe de succcess
        successValidation(username)
    }  

    if(cpfValue === ''){
        errorValidation(cpf, 'Preencha esse campo')
    }
    else{
        successValidation(cpf)
    }

    if(numberValue === ''){
        errorValidation(number, 'Preencha esse campo')
    }
    else{
        successValidation(number)
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

    if(confirmpasswordValue === ''){
        errorValidation(confirmpassword , 'Preencha esse campo')
    }
    else if (passwordValue !== confirmpasswordValue){
        errorValidation(confirmpassword, 'Senha não é a mesma ')
    }
    else{
        successValidation(confirmpassword)
    } 
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}