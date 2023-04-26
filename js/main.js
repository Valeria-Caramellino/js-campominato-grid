console.log("ciao");
//creo una costante per indicare il mio contenitore
const contentitore = document.getElementById("container");

//creo una funzione per generare le caselle con all'interno il numero
function GeneraCaselleNumerate (numeroDaGenerare){

    for (let i = 1; i <= numeroDaGenerare; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("miniBox100");
    newBox.innerText = `${i}`;
    contentitore.append(newBox);
    newBox.addEventListener("click", function() {
        console.log(i);
        this.classList.toggle("bgNuovo");
    });
    }
}
//creo collegamento con il pulsante
const buttonPlay = document.getElementById("play");

//genero evento per il pulsante richiamando la funzione

buttonPlay.addEventListener("click", function(){
    GeneraCaselleNumerate(100);

})

