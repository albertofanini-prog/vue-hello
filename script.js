console.log('Hello Vue JS!');

//Stampare a schermo un messaggio all'interno di un h1 utilizzando i data
//Aggiungere alla pagina un'immagine, presa anch'essa da un data

const main = new Vue({
    el: '#main',
    data: {
        input:'Scrivi qui il tuo messaggio',
        message:'',
        imgUrl:'Vue_Logo.png',
    },
});

console.log(main);