const characters = []
const password = []
const inputValue = " "
const allCapsArray = []
const allLowerCaseArray = []



function generateAllCapsArray(){
    for (let i = 65; i < 91; i++){
         return allCapsArray.push(String.fromCharCode(i))
         }
}

function generateAllLowercaseArray(){
    for (let i = 97; i < 123; i++){
         return allLowerCaseArray.push(String.fromCharCode(i))
        }
}


generateAllCapsArray()
generateAllLowercaseArray()
// document.getElementById("number").addEventListener("keyup", function (event){
//     inputValue = event.target.value 
//     })


   



// // if (document.getElementById("letters").checked)
// //         {
// //             generateLetterArray()
// //         } else if (document.getElementById("lettersNumbers").checked){
// //             generateLetterNumberArray()
// //         } else {
// //             generateFullArray()

// //         }

   

// // function generateLetterArray(){
// //     for (let i = 64; i < 123; i++){
// //         let letterArray =characters.filter(checkForLetters) 
// //         function checkForLetters(){
// //             for (let letter of Letters){
// //                 if(letter[])
// //             }
// //         }
// //         characters.push(String.fromCharCode(i))
// //         console.log(characters)
// //     }}

// //     function generateLetterNumberArray(){
// //         for (let i = 47; i < 123; i++){
// //             if (i<58 || i > 65 || i > 96) 
// //             characters.push(String.fromCharCode(i))
// //         }}

    

// document.getElementById("generator").addEventListener("click", buildPassword(characters))

//     function buildPassword(){
//         for (let i = 0; i < (inputValue * 4); i++){
//         let arrayIndex = Math.floor((Math.random() * characters.length) +1)
//         password.push(characters[arrayIndex])
//         document.getElementById("pw1").innerText = password.slice(0, inputValue).join(" ")
//         document.getElementById("pw2").innerText = password.slice(inputValue, (2*inputValue) ).join(" ")
//         document.getElementById("pw3").innerText = password.slice((2*inputValue), (3*inputValue)).join(" ")
//         document.getElementById("pw4").innerText = password.slice((3*inputValue), (4*inputValue)).join(" ")
//         }}


// document.getElementById("clearPasswords").addEventListener("click", clearFields)

//     function clearFields(){
//         document.getElementById("pw1").innerText = "✳️ ✳️ ✳️ "
//         document.getElementById("pw2").innerText = "✳️ ✳️ ✳️ "
//         document.getElementById("pw3").innerText = "✳️ ✳️ ✳️ "
//         document.getElementById("pw4").innerText = "✳️ ✳️ ✳️ "
//         document.getElementById("number").value = ''
//         location.reload()
//        }
    
//    generateLetterArray()    
   


