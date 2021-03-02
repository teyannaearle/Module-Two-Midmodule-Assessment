// SMART Goal: Within 20 minutes, I want to insert a label and a form in my first div 
//             in my HTML file and verify that all of my code still works. If it doesn't, 
//             refactor so that it does. 

// SMART Goal: Within 5 minutes, I will change my object name in my code to something more clear.

// SMART Goal: Within 30 minutes, I will add to my JS so that the user can see the average, min and  
//             max sum.

// STRETCH GOAL: I will brainstorm how I can handle ivalid input first so that I can return 
//          from the click handler early instead of placing most of my core logic in 
//          an if statement.


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
    const rollHistory = {}
    const button = document.getElementById("button")
    const error = document.getElementById("error") 
    const list = document.querySelector("ul")

    let diceDisplay = document.getElementById("dice-para")
    let sum = document.getElementById("sum-para")
    

    let average = document.getElementById("avg")
    let minimum = document.getElementById("min")
    let maximum = document.getElementById("max")
    
    let minAmount = Infinity
    let maxAmount = -Infinity
    let sumAll = 0
    let count = 0

    button.addEventListener("click" , (event) => {
        event.preventDefault()
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
            sumAll += sumAmount
            sum.innerText = `Sum = ${sumAmount}`
            
            rollHistory[count] = `${diceDisplay.innerHTML} = ${sumAmount}`

            sumAmount < minAmount ? minAmount = sumAmount : minAmount = minAmount
            sumAmount > maxAmount ? maxAmount = sumAmount : maxAmount = maxAmount

            average.textContent = `Average Sum = ${sumAll / count}`
            minimum.textContent = `Minimum Sum = ${minAmount}`
            maximum.textContent = `Maximum Sum = ${maxAmount}`
        
          

            if (count >= 2) {
                let newListItem = document.createElement("li")
                newListItem.textContent = rollHistory[count - 1]
                list.appendChild(newListItem)

            }

        } else {
           error.textContent = "Please enter a number greater than 0"
        }


        

    })


   





}