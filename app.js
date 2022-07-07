function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { infos: [ 
                        {login : "", nome: "Pedro Henrique", 
                        genero :"Masculino", 
                        localizacao :"Brasil", 
                        email : "aaaa@gmail.com", 
                        telefone: "31-98795-5587", 
                        datanasc : "00/00/0000"}, 
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirInfos (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo conta
    let strcampoLogin = document.getElementById ('campoLogin').value;
    let strcampoNome = document.getElementById ('campoNome').value;
    let strcampoGenero = document.getElementById ('campoGenero').value;
    let strcampoLocalizacao = document.getElementById ('Localizacao').value;
    let strcampoEmail = document.getElementById ('Email').value;
    let strTelefone = document.getElementById ('campoTelefone').value;
    let strDatanasc = document.getElementById ('campoDatanasc').value;
    let novoContato = {
        nome: strNome,
        sexo : strSobrenome,
        Localizacao : strLocalizacao,
        Email : strEmail,
        telefone : strTelefone,
        datanasc : strDatanasc

    };
    objDados.infos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.infos[i].login} - ${objDados.infos[i].nome} - ${objDados.infos[i].genero} - ${objDados.infos[i].localizacao} - ${objDados.infos[i].email} - ${objDados.infos[i].telefone} - ${objDados.infos[i].datanasc}</p>`
    }

    tela.innerHTML = strHtml;
}

function saveDataToLocalStorage() {
    const login = document.querySelector("#login").value;
    localStorage.setItem("db", login);
    console.log(login);
    const nome = document.querySelector("#nome").value;
    localStorage.setItem("db", nome);
    console.log(nome);
    const genero = document.querySelector("#genero").value;
    localStorage.setItem("db", genero);
    console.log(genero);
    const localizacao = document.querySelector("#localizacao").value;
    localStorage.setItem("db", localizacao);
    console.log(localizacao);
    const email = document.querySelector("#email").value;
    localStorage.setItem("db", email);
    console.log(email);
    const telefone = document.querySelector("#telefone").value;
    localStorage.setItem("db", telefone);
    console.log(telefone);
    const datanasc = document.querySelector("#datanasc").value;
    localStorage.setItem("db", datanasc);
    console.log(datanasc);
  }

  function showLocalStorageData() {
    alert("O valor guardado é: " + localStorage.getItem("editprofile"));
  }


// Configura os botões
document.getElementById ('btnEditar').addEventListener ('click', leDados);
document.getElementById ('btnSalvar').addEventListener ('click', saveDataToLocalStorage);

