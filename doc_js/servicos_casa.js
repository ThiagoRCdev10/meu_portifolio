function adicionar_tarefa(botao){
    const tarefa = document.createElement("div");
    tarefa.innerHTML = `    
            <div class="tarefa">
                <button class="botao_editar_tarefa"><img src="../imagens/botao_editar_task.png" alt="botão de editar tarefa"></button>
                <button onclick="remover_tarefa(this)" class="botao_excluir_tarefa">X</button>
                <p class="descricao_da_tarefa">limpar portas, janelas e cortina de vidro</p> 
                <div class="pessoas_adicionadas_na_tarefa">
                    <p class="pessoa_adicionada_lista"><img src="../imagens/pessoa.png" alt="imagem de pessoa">pessoa1</p>
                    <p class="pessoa_adicionada_lista"><img src="../imagens/pessoa.png" alt="imagem de pessoa">pessoa2</p>
                </div>
                <div class="selecao_de_pessoa">
                    <select name="pessoa">
                        <option value="pessoa1">pessoa1</option>
                        <option value="pessoa2">pessoa2</option>
                        <option value="pessoa3">pessoa3</option>
                        <option value="pessoa4">pessoa4</option>
                    </select>
                    <button class="botao_adicionar_pessoa"><img src="../imagens/adicionar_pessoa.png" alt="imagem de pessoa"></button>
                </div>
                <button onclick="check_tarefa(this)" class="botao_de_check"><img src="../imagens/check_icone.png" alt="botão de check da tarefa"></button> 
            </div>          
        </div>`;
    
    const card = botao.closest('.card');
    const tarefas = card.querySelector(".tarefas");
    tarefas.appendChild(tarefa);
}

function remover_tarefa(botao){
    const tarefa = botao.closest('.tarefa');
    tarefa.remove();
}

function check_tarefa(botao){
    const tarefa = botao.closest('.tarefa');
    tarefa.classList.toggle('concluida');
}