let characters = []
let password = []
let inputValue = " "
const lettersArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
const lettersNumbersArray = Array.from("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
const allCharactersArray = Array.from("!@#$%^&*()_-+={[}]|\:;'<,>.?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
let selectedButton


document.getElementById("number").addEventListener("keyup", function (event){ //takes in user value from text field
    inputValue = event.target.value 
    
     })
     const letters = document.getElementById("letters")
     const lettersNumbers = document.getElementById("lettersNumbers")
     const lettersNumbersCharacters = document.getElementById("lettersNumbersCharacters")


     document.getElementById("generator").addEventListener("click", chooseSelectedArray)

    function chooseSelectedArray(){
        if (letters.value === "letters") {     //checks to see which radio button was checked 
            console.log("shit")                    
             buildPassword(lettersArray)
                 
             } else if (lettersNumbers.value === "lettersNumbers"){
                 console.log("bye")
                buildPassword(lettersNumbersArray)
                
             } else if (lettersNumbersCharacters.value === "lettersNumbersCharacters"){
                buildPassword(allCharactersArray)
         }

 






    function buildPassword(characters){
        
        for (let i = 0; i < (inputValue * 4); i++){
        let arrayIndex = Math.floor((Math.random() * characters.length) +1)//creates random number for the index value of characters array
        
        password.push(characters[arrayIndex])
        document.getElementById("pw1").innerText = password.slice(0, inputValue).join(" ")
        document.getElementById("pw2").innerText = password.slice(inputValue, (2*inputValue) ).join(" ")
        document.getElementById("pw3").innerText = password.slice((2*inputValue), (3*inputValue)).join(" ")
        document.getElementById("pw4").innerText = password.slice((3*inputValue), (4*inputValue)).join(" ")
        }}


document.getElementById("clearPasswords").addEventListener("click", clearFields)

    function clearFields(){
        // document.getElementById("pw1").innerText = "✳️ ✳️ ✳️ "
        // document.getElementById("pw2").innerText = "✳️ ✳️ ✳️ "
        // document.getElementById("pw3").innerText = "✳️ ✳️ ✳️ "
        // document.getElementById("pw4").innerText = "✳️ ✳️ ✳️ "
        // document.getElementById("number").value = ''
        location.reload()
    }}