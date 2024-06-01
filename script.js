let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 1;

const button = document.querySelector(".button");
const inputField = document.querySelector("#guessfield");
const userGuesses = document.querySelector("#tries");
const result = document.querySelector("#result");
const highorlow = document.querySelector("#highorlow");

button.addEventListener("click", function () {
    let userGuess = Number(inputField.value);
    userGuesses.textContent += userGuess + " ";

    if (tries === 10) {
        button.disabled = true;
        inputField.disabled = true;
        result.textContent = "¡Has alcanzado el límite de intentos!";
        result.style.backgroundColor = "red";
        result.style.color = "white";
        
        let resetButton = document.createElement("button");
        resetButton.textContent = "Reiniciar Juego";
        document.body.appendChild(resetButton);
        
        resetButton.addEventListener("click", function () {
            location.reload();
        });
    } else {
        if (userGuess === randomNumber) {
            result.textContent = "¡Felicidades! ¡Lo Adivinaste!";
            result.style.backgroundColor = "green";
            result.style.color = "white";
            button.disabled = true;
            inputField.disabled = true;
        } else {
            result.textContent = "¡Fallaste!";
            result.style.backgroundColor = "red";
            result.style.color = "white";
            
            if (userGuess < randomNumber) {
                highorlow.textContent = "Número ingresado muy bajo";
            } else if (userGuess > randomNumber) {
                highorlow.textContent = "Número ingresado muy alto";
            }
        }
    }
    tries++;
});