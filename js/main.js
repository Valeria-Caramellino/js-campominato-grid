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

//due problemi 
//1 ogni volta che clicco sul bottone mi genera una nuova tabella sotto
//come faccio a cambiare la misura del minibox??
//se da 100 diventano 80 non occupa tutta la dimensione del contenitore