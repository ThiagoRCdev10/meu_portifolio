function inserir(elemento){
    const display_calculadora = document.getElementById("display_calculadora")
    if(display_calculadora.innerText.length == 9){
        document.getElementById("display_calculadora").innerText = "LIMITE EXCEDIDO";
    }else if(display_calculadora.innerText == "LIMITE EXCEDIDO"){
        document.getElementById("display_calculadora").innerText = "LIMITE EXCEDIDO";
    }
    else{
        document.getElementById("display_calculadora").innerText += elemento;   
    }
}

function zero(){
    inserir("0");
}

function um(){
    inserir("1");
}

function dois(){
    inserir("2");
}

function tres(){
    inserir("3");
}

function quatro(){
    inserir("4");
}

function cinco(){
    inserir("5");
}

function seis(){
    inserir("6");
}

function sete(){
    inserir("7");
}

function oito(){
    inserir("8");
}

function nove(){
    inserir("9");
}

function multiplicacao(){
    inserir("*");
}

function divisao(){
    inserir("/");
}

function menos(){
    inserir("-");
}

function mais(){
    inserir("+");
}

function del(){
    const display = document.getElementById("display_calculadora");
    string_sem_ultimo_caracter = display.innerText.slice(0, -1); // remove o último caractere
    display.innerText = string_sem_ultimo_caracter;
}

function clear_display(){
    const display = document.getElementById("display_calculadora");
    display.innerText = "";
}

function igual() {
  const display = document.getElementById("display_calculadora");
  const parser = new exprEval.Parser(); 
  const result = parser.evaluate(display.innerText);
  display.innerText = result;
}

