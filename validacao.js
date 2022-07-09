var validForm = () => {

    var nome = document.querySelector("#nome");  //capturando o input nome
    var sobrenome = document.querySelector("#sobrenome"); //capturando o input sobrenome
    var idade = document.querySelector("#idade"); //capturando o input idade

    //Verificando se o input nome está vazio
    if(nome.value == ""){
        alert("Digite um nome"); //alertando ao usuário que há algo errado
        nome.focus(); //retorna o foco para o campo em questão
        return false; //foçando um retorno falso, isso fará o formulário não enviar
    }

    //Verificando se o input sobrenome está vazio
    if(sobrenome.value == ""){
        alert("Digite um sobrenome"); //alertando ao usuário que há algo errado
        sobrenome.focus(); //retorna o foco para o campo em questão
        return false; //foçando um retorno falso, isso fará o formulário não enviar
    }
    //Verificando se o input idade está vazio
    if(idade.value == ""){
        alert("Digite uma idade"); //alertando ao usuário que há algo errado
        idade.focus(); //retorna o foco para o campo em questão
        return false; //foçando um retorno falso, isso fará o formulário não enviar
    }
   
    //Verificando se o input idade é menor que 18 anos
    if(idade.value < 18){
        alert("Você precisa ter mais de 18 anos para se cadastrar"); //alertando ao usuário que há algo errado
        idade.focus(); //retorna o foco para o campo em questão
        return false; //foçando um retorno falso, isso fará o formulário não enviar
    }


    alert("Todos os dados são válidos")
}




