function adicionarItem(){
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value
    var quantidade = document.getElementById("quantidade").value

    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos")
        return
    }
    
    // criar uma linha na tabela com 3 celulas
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0)
    var celulaValor = novaLinha.insertCell(1)
    var celulaQuantidade = novaLinha.insertCell(2)

    //atribuir as células os valores digitados.
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade

    //limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"});
    XLSX.writeFile(wb, nomeArquivo);
}

function removerItem(){
    var nomeParaRemover = document.getElementById("nomeRemover").value
    if(!nomeParaRemover){
        alert("Digite um nome")
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var linhas = tabela.getElementsByTagName("tr");

    for(var i = 0; i < linhas.length; i++){
        // obtendo a primeira celula (td) da linha atual
        var celulaNome = linhas[i].getElementsByTagName("td")[0];
        
        //vericando se a celula nome existe e se o conteudo eh igual ao que quer
        if(celulaNome && celulaNome.innerHTML === nomeParaRemover){
            tabela.deleteRow(i)
            document.getElementsByTagName("nomeRemover").value = ""
            return;
        }
        alert("Digite um nome existente na tabela")
    }
}