
let password = []
let inputValue = ""
let lettersArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
let lettersNumbersArray = Array.from("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
let allCharactersArray = Array.from("!@#$%^&*()_-+={[}]|\:;<,>.?/~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")



document.getElementById("number").addEventListener("keyup", function (event){ //takes in user value from text field
    inputValue = event.target.value 
     })
    
 document.getElementById("generator").addEventListener('click', chooseSelectedArray )
        let selectedArray
        const radioButtons = document.querySelectorAll('input[name="kindOfPassword"]')

    function chooseSelectedArray(){
        for (const radioButton of radioButtons){
            if (radioButton.checked) {
                selectedArray = radioButton.value;

                if (selectedArray === "letters"){
                        selectedArray=lettersArray 
                } else if (selectedArray === "lettersNumbers"){
                        selectedArray=lettersNumbersArray 
                }else {
                      selectedArray = allCharactersArray
                }
                buildPassword(selectedArray)
              }
            }

           
    function buildPassword(selectedArray){
        for (let i = 0; i < (inputValue * 4); i++){         //creates random number for the index value of characters array
        let arrayIndex = Math.floor((Math.random() * selectedArray.length) +1)
        
        password.push(selectedArray[arrayIndex])
        document.getElementById("pw1").innerText = password.slice(0,inputValue).join("")
        document.getElementById("pw2").innerText = password.slice(inputValue,(2*inputValue)).join("")
        document.getElementById("pw3").innerText = password.slice((2*inputValue),(3*inputValue)).join("")
        document.getElementById("pw4").innerText = password.slice((3*inputValue),(4*inputValue)).join("")
        }}


document.getElementById("clearPasswords").addEventListener("click", clearFields)

    function clearFields(){
        location.reload()
    }}



//    document.getElementById("copyPW1").onclick = copyToClipboard("pw1".innerText)
//    console.log(pw1.innerText)
//    document.getElementById("copyPW2").onclick = copyToClipboard(pw2)
//    console.log(pw2.innerText)
//    document.getElementById("copyPW3").onclick = copyToClipboard(pw3)
//    document.getElementById("copyPW4").onclick = copyToClipboard(pw4)
//     
   


    function copyToClipboard(){
        console.log("hi")
        const copyButtons = document.getElementsByClassName('copy') //makes an array of copy button elements 
        const passwordOptions = document.getElementsByClassName('passwordOption')  //makes an array of copy passwords that were created 

    for (let i=0; i<4; i++){
        if(copyButtons[i].clicked){
            console.log("hi yourself")
            passwordOptions[i].select()
            
            navigator.clipboard.writeText(passwordOptions[i].textContent)
            }
    }
}
    
    
 