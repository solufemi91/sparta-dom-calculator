
// create listners for the number and operators
var firstNumber = 0
var secondNumber = 0
var answer = 0
var operatorChosen = 0

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
      operatorChosen = this.innerHTML

    })

  }
}

function createEqualsSignListener(){
  var screen = document.getElementById('screen')
  var equals = document.getElementById('equals')
  equals.addEventListener("click",function(){
    screen.innerHTML =this.innerHTML
    if(operatorChosen == "*"){
    answer = multiply(firstNumber, secondNumber)
    screen.innerHTML = answer
  } else if(operatorChosen == "/"){
    answer = division(firstNumber,secondNumber)
    screen.innerHTML = answer
  } else if(operatorChosen == "+"){
    answer = add(firstNumber,secondNumber)
    screen.innerHTML = answer
  } else{
    answer = subtraction(firstNumber,secondNumber)
    screen.innerHTML = answer
  }
  })
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

function clearButtonListener(){
  var screen = document.getElementById('screen')
  var buttonClear = document.getElementById('buttonClear')
  buttonClear.addEventListener("click",function(){
  screen.innerHTML = "Sparta Calculator"
  })
}



createNumberListeners()
createOperatorListeners()
createEqualsSignListener()
clearButtonListener()
