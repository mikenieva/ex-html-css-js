// VARIABLES

const firstName = "mike"

// SELECCIÓN DEL HTML PARA MANEJO LÓGICO
// DOM

// 1. SELECCIÓN
const headerArea = document.querySelector("#main-header")
const generateChangeButton = document.querySelector("#generate-change-button")

console.log("generateChangeButton:", generateChangeButton)

// 2. MANIPULACIÓN (OPCIÓN A)
// headerArea.innerHTML = `
//     <div>
//         <h1>Mike Nieva</h1>
//     </div>
// `

// 2. MANIPULACIÓN (OPCIÓN B)

generateChangeButton.addEventListener("click", function () {
  headerArea.innerHTML = `
        <div>
            <h1>Mike Nieva</h1>
        </div>
    `
})
