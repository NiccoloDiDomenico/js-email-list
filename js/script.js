// Elements
const emailListElements = document.getElementById("email-list")
const btnElement = document.querySelector(`.btn`)
console.log(emailListElements, btnElement);


// Logica

// Creo ciclo for impostando 10 iterazioni
for (let i = 0; i < 10; i++) {

    // Utilizzo axios per eseguire una chiamata asincrona nel ciclo
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((response) => {
        const currentMail = response.data.response;
        // console.log(currentMail);
        
        // Inserisco la "currentMail" nell'HTML
        emailListElements.innerHTML += `<li>${currentMail}</li>`;
        // console.log(emailListElements);

        // Al click sul bottone refresha la pagina
        btnElement.addEventListener("click", function() {
            location.reload();
        });
    });  
};

