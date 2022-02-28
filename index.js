const characters = []
const password = []
let inputValue = " "



document.getElementById("number").addEventListener("keyup", function (event){
    inputValue = event.target.value 
    })

generateArray()

    function generateArray(){
    for (let i = 32; i < 127; i++){
    characters.push(String.fromCharCode(i))
    }}

document.getElementById("generator").addEventListener("click", buildPassword)

    function buildPassword(){
        for (let i = 0; i < (inputValue * 4); i++){
        let arrayIndex = Math.floor((Math.random() * 95) +1)
        password.push(characters[arrayIndex])
        document.getElementById("pw1").innerText = password.slice(0, inputValue).join(" ")
        document.getElementById("pw2").innerText = password.slice(inputValue, (2*inputValue -1) ).join(" ")
        document.getElementById("pw3").innerText = password.slice((2*inputValue -1), (3*inputValue -1)).join(" ")
        document.getElementById("pw4").innerText = password.slice((3*inputValue -1), (4*inputValue -1)).join(" ")
        
        
    }}


document.getElementById("clearPasswords").addEventListener("click", clearFields)

    function clearFields(){
        document.getElementById("pw1").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw2").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw3").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("pw4").innerText = "✳️ ✳️ ✳️ "
        document.getElementById("number").value = '';
       }
    
        
   



