
let password = []
let inputValue = " "
let lettersArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
let lettersNumbersArray = Array.from("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")
let allCharactersArray = Array.from("!@#$%^&*()_-+={[}]|\:;'<,>.?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz")



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
        document.getElementById("pw1").innerText = password.slice(0, inputValue).join(" ")
        document.getElementById("pw2").innerText = password.slice(inputValue, (2*inputValue) ).join(" ")
        document.getElementById("pw3").innerText = password.slice((2*inputValue), (3*inputValue)).join(" ")
        document.getElementById("pw4").innerText = password.slice((3*inputValue), (4*inputValue)).join(" ")
        }}


document.getElementById("clearPasswords").addEventListener("click", clearFields)

    function clearFields(){
        location.reload()
    }}

    // WORK ON THIS TOMORROW

    // const copyButtons = document.querySelectorAll('[class="copy"]')
    // for (const copyButton of copyButtons){
    //     copyButton.addEventListener("click", copyToClipboard)
    // }

    // function copyToClipboard() {
       
    //      let content = document.getElementById("pw1");
        
    //     content.select();
    //     document.execCommand('copy');
    
    //     alert("Copied!");
    // }