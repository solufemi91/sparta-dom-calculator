
// create listners for the number and operators
var firstNumber = 0
var secondNumber = 2
var answer = 0

function createNumberListeners(){
  var screen = document.getElementById('screen')
  var numberButtons = document.getElementsByClassName("buttonNum")

  for(i = 0; i < numberButtons.length; i++){
    var numberOfTimesClicked = 0
    numberButtons[i].addEventListener("click",function(){
    screen.innerHTML = this.innerHTML
    numberOfTimesClicked++
    if (numberOfTimesClicked == 1){
      firstNumber = this.innerHTML
    } else if (numberOfTimesClicked == 2) {
      secondNumber = this.innerHTML
    }

  })}
}

// create seperate numberListners
function createOperatorListeners(){
 var screen = document.getElementById('screen')
 var operatorButtons = document.getElementsByClassName("operator")

  for(i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click",function(){
      screen.innerHTML = this.innerHTML
      if (screen.innerHTML == '*'){
        var test1 = multiply(firstNumber, secondNumber)
        console.log(test1)
      }
      else if (screen.innerHTML == '+') {
        var test2 = add(firstNumber,secondNumber)
        console.log(test2)


      } else if(screen.innerHTML == '-') {
        var test3 = subtraction(firstNumber,secondNumber)
        console.log(test3)
      } else if (screen.innerHTML == '/'){
        var test4 = division(firstNumber, secondNumber)
        console.log(test4)

      }


    })

  }
}


function multiply(firstNumber,secondNumber){
   answer = firstNumber * secondNumber

  return answer

}

function add(firstNumber,secondNumber){
  answer = parseInt(firstNumber) + parseInt(secondNumber)
  return answer
}

function subtraction(firstNumber,secondNumber){
  answer = firstNumber - secondNumber
  return answer
}

function division(firstNumber,secondNumber){
  answer = firstNumber / secondNumber
  return answer
}

createNumberListeners()
createOperatorListeners()


// try and include the multiplication button
