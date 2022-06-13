function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { lista: [ 
                        {tarefa: "Dentista", data: "09/06"}, 
                        {tarefa: "Trabalho TIAW", data: "26/05"}, 
                        {tarefa: "Prática Investigativa", data: "04/06"} 
                    ]}
    }

    return objDados;
}


function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}


function incluirTarefa () {
    //Ler os dados do localStorage
    let objDados = leDados ();

    //Incluir uma nova tarefa
    let strTarefa = document.getElementById ('campoTarefa').value;
    let strTelefone = document.getElementById ('campoData').value;
    let novaTarefa = {
        tarefa: strTarefa,
        data: strTelefone 
    };
    objDados.lista.push (novaTarefa);

    //Salvar os dados no localStorage novamente
    salvaDados (objDados);

    //Atualiza os dados da tela
    imprimeDados ();
}


function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i = 0; i< objDados.lista.length; i++) {
        strHtml += `<p>${objDados.lista[i].tarefa} - ${objDados.lista[i].data}</p>`
    }

    tela.innerHTML = strHtml;

}


//Configura os botões:
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirTarefa').addEventListener ('click', incluirTarefa);