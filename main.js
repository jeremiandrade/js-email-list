console.log('hello');


// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


// creo 10 email da postman e lo collego a js
//creo e lo unisco ad un nodo del DOM
//lo ciclo tramite forEach


const emailJavaScript = 'https://flynn.boolean.careers/exercises/api/random/mail'
const olList = document.getElementById('list')

fetch(emailJavaScript)
.then(response => response.json())
.then(data=> {
    console.log(data);
    
})

for (let i = 0;  i < 10; i++) {
  fetch(emailJavaScript)
        .then(response => response.json())
        .then(data=> {   
         const li = document.createElement('li');
            li.innerHTML += data.response  
             olList.append(li)
             console.log(olList.innerHTML);
                
        })
    
}



