document.addEventListener("DOMContentLoaded" , diceRoller)

function diceRoller(){

    const dice = {
        1: '&#9856' ,
        2: '&#9857' , 
        3: '&#9858' ,
        4: '&#9859' , 
        5: '&#9860' , 
        6: '&#9861'  
      }
    const object = {}
    const button = document.getElementById("button")
    const error = document.getElementById("error") 
    let diceDisplay = document.getElementById("dice-para")
    let sum = document.getElementById("sum-para")
    const list = document.querySelector("ul")
    let count = 0

    button.addEventListener("click" , () => {
        const inp = document.getElementById("input").value
        const input = Number(inp)
        

        if (input > 0) {
            error.textContent = ""
            diceDisplay.innerHTML = ""
            let sumAmount = 0
            
            for (let i = 0; i < input ; i++){ 
               let x = Math.ceil(Math.random()*6)
               diceDisplay.innerHTML += dice[x]
               sumAmount += x
            }

            count += 1
            sum.innerText = `Sum = ${sumAmount}`
            object[count] = `${diceDisplay.innerHTML} = ${sumAmount}`
            console.log(object)
          

            if (count >= 2) {
                let newListItem = document.createElement("li")
                newListItem.textContent = object[count - 1]
                list.appendChild(newListItem)
            }

        } else {
           error.textContent = "Please enter a number greater than 0"
        }
    })








}