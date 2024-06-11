let CPF = document.querySelector('#CPF')
let labelCPF = document.querySelector('#labelCPF')
let validCPF = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
let validconfirmsenha = false

CPF.addEventListener('keyup', ()=>{
      let cleanedCPF = CPF.value.replace(/\D/g, '');
      if(CPF.value.length <=6){
        labelCPF.setAttribute('style', 'color: red')
        labelCPF.innerHTML = '<strong>CPF *Insira no mìnimo 6 caracteres!</strong>'
        CPF.setAttribute('style', 'border-color: red')
        validCPF = false

      } else {
        labelCPF.setAttribute('style', 'color: green')
        labelCPF.innerHTML = '<strong>CPF</strong>'
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

confirmsenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmsenha.value){
      labelconfirmsenha.setAttribute('style', 'color: red')
      labelconfirmsenha.innerHTML = '<strong>Confirmar senha *As senhas não conferem!</strong>'
      senha.setAttribute('style', 'border-color: red')
      validconfirmsenha = false

    } else {
      labelconfirmsenha.setAttribute('style', 'color: green')
      labelconfirmsenha.innerHTML = '<strong>Confirmar Senha</strong>'
      confirmsenha.setAttribute('style', 'border-color: green')
      validconfirmsenha = true

    }
})

function Cadastrar (){
    if (validCPF && validsenha && validconfirmsenha ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        // Verifica se o CPF já está cadastrado
        if (listaUser.some(user => user.CPFCad === CPF.value)) {
          alert('CPF já cadastrado!');
          return;
      }

      listaUser.push({
          CPFCad: CPF.value,
          senhaCad: senha.value
      });
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.location.href = '/codigo-fonte/tela_inicial.html'

    } else {
        alert('Necessário preencher todos os campos corretamente.')
    }
}

function Deletar(CPF) {
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  let updatedList = listaUser.filter(user => user.CPFCad !== CPF);

  if (updatedList.length == listaUser.length) {
      alert('Usuário não encontrado!');
      return;
  }

  localStorage.setItem('listaUser', JSON.stringify(updatedList));
  alert('Usuário deletado com sucesso!');
}

function AtualizarSenhaByCPF(CPF, novaSenha) {
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  let usuarioIndex = listaUser.findIndex(usuario => usuario.CPFCad == CPF);

  if (usuarioIndex !== -1) {
      listaUser[usuarioIndex].senhaCad = novaSenha;
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
      alert('Senha atualizada com sucesso!');
  } else {
      alert('Usuário não encontrado!');
  }
}
