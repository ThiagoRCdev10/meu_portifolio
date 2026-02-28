function adicionar(){

    const texto = document.getElementById("item_cadastro").value;

    if(texto==""){
        alert("Digite um item para adicionar à lista!");
        return;
    }
    
    const divFilha = document.createElement("div");
    divFilha.innerHTML = `    
    <div class="item">
        <p class="descricao_item">${texto}</p>
        <div class="botoes">
            <button class="btn_check" onclick="check(this)"><img src="imagens/check_icone.png" alt="check icone"></button>
            <button class="btn_remover" onclick="remover(this)"><img src="imagens/remover_icone.png" alt="remover icone"></button>
        </div>
    </div>`;
    const pai = document.getElementById("container");
    pai.appendChild(divFilha);
}

function remover(btn_remover){
    // encontra o ancestral mais próximo com a classe .item
    const item = btn_remover.closest(".item");
    item.remove();
}


function check(btn_check){
    const item = btn_check.closest(".item");
    const descricao_do_item = item.querySelector(".descricao_item");
    
    if(descricao_do_item.style.textDecoration == "line-through"){
        descricao_do_item.style.textDecoration = "none";
    }else{
        descricao_do_item.style.textDecoration = "line-through";
    }
}
