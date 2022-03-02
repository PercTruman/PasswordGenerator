const characters = []
const password = []
const inputValue = " "
const lettersArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
const lettersNumbersArray = Array.from("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
const allCharactersArray = Array.from("!@#$%^&*()_-+={[}]|\:;'<,>.?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")


document.getElementById("number").addEventListener("keyup", function (event){ //takes in user value from text field
    inputValue = event.target.value 
    })


   if (document.getElementById("letters").checked)//checks to see which radio button was checked
        {
            characters = lettersArray
        } else if (document.getElementById("lettersNumbers").checked){
            characters = lettersArray
        } else {
            characters = allCharactersArray
        }

   document.getElementById("generator").addEventListener("click", buildPassword(characters)) //creates 4 passwords from clicked button

    function buildPassword(){
        for (let i = 0; i < (inputValue * 4); i++){
        let arrayIndex = Math.floor((Math.random() * characters.length) +1)
        password.push(characters[arrayIndex])
        document.getElementById("pw1").innerText = password.slice(0, inputValue).join(" ")
        document.getElementById("pw2").innerText = password.slice(inputValue, (2*inputValue) ).join(" ")
        document.getElementById("pw3").innerText = password.slice((2*inputValue), (3*inputValue)).join(" ")
        document.getElementById("pw4").innerText = password.slice((3*inputValue), (4*inputValue)).join(" ")
        }}


document.getElementById("clearPasswords").addEventListener("click", clearFields)

    function clearFields(){
        document.getElementById("pw1").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw2").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw3").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw4").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("number").value = ''
        location.reload()
       }
    
   
   


