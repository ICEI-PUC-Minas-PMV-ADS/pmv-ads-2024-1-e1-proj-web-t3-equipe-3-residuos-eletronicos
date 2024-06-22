let CPF = document.querySelector('#CPF')
let labelCPF = document.querySelector('#labelCPF')
let validCPF = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

CPF.addEventListener('keyup', ()=>{
      let cleanedCPF = CPF.value.replace(/\D/g, '');
      if(CPF.value.length <=6){
        labelCPF.setAttribute('style', 'color: red')
        labelCPF.innerHTML = '<strong>CRM *Insira no mìnimo 6 caracteres!</strong>'
        CPF.setAttribute('style', 'border-color: red')
        validCPF = false

      } else {
        labelCPF.setAttribute('style', 'color: green')
        labelCPF.innerHTML = '<strong>CRM</strong>'
        CPF.setAttribute('style', 'border-color: green')
        validCPF = true

      }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <=6){
      labelsenha.setAttribute('style', 'color: red')
      labelsenha.innerHTML = '<strong>senha *Insira no mìnimo 6 caracteres!</strong>'
      senha.setAttribute('style', 'border-color: red')
      validsenha = false

    } else {
      labelsenha.setAttribute('style', 'color: green')
      labelsenha.innerHTML = '<strong>senha</strong>'
      senha.setAttribute('style', 'border-color: green')
      validsenha = true

    }
})

function acessar (){

  event.preventDefault()
  
    if (validCPF && validsenha ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            CPFCad: CPF.value,
            senhaCad: senha.value

        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.location.href = 'tela_inicial.html'

    } else {
        alert('Necessário preencher todos os campos corretamente.')
    }

}

if(CPF.value == userValid.CPF && senha.value == userValid.senha){
  window.location.href = 'tela_inicial.html'
  
  let token = Math.random().toString(16).substring(2)
  localStorage.setItem('token', token)

  localStorage.setItem('userLogado', JSON.stringify(userValid))

} else {
  labelCPF.setAttribute('style', 'color:red')
  CPF.setAttribute('style', 'border-color: red')
  labelsenha.setAttribute('style', 'color:red')
  senha.setAttribute('style', 'border-color:red')
  alert('Usuário ou senha incorretos!')
  CPF.focus()
}
