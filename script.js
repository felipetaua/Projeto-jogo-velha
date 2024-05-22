var jogador = "x";

function jogar(celula) {
    // esse jogar no html esta marcado como "jogar(this)";
    //verificar se a celula está vazia
    if (celula.innerHTML === "") {
        //escreva na celular
        celula.innerHTML = jogador;//até aqui ele coloca x se o campo estiver vazio

        //alternar jogada
        //se jogada for igual a "x"
        if (jogador === "x") {
            jogador = "O";
            celula.style.backgroundColor="#ff5e0085"//cor laranja
        } else { //se jogada for "0", repita x
            jogador = "x";
            celula.style.backgroundColor="#6494ed91"//cor azul
        }
    }
}
//botão de reiniciar
function reiniciar(){
    window.location.reload();
}