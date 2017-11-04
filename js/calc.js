
// create listners for the number and operators
var firstNumber = 0
var secondNumber = 0
var answer = 0

function createNumberAndOperatorListeners(){
  var screen = document.getElementById('screen')

  var numberButtons = document.getElementsByClassName("buttonNum")

  var operatorButtons = document.getElementsByClassName("operator")

  for(i = 0; i < numberButtons.length; i++){
    var numberOfTimesClicked = 0
    numberButtons[i].addEventListener("click",function(){

    screen.innerHTML = this.innerHTML
    numberOfTimesClicked++
    if (numberOfTimesClicked == 1){
      firstNumber = this.innerHTML
    } else if (numberOfTimesClicked == 2) {
      secondNumber = this.innerHTML
      var answer = multiply(firstNumber,secondNumber)
      console.log(answer)
    }


  })}

  for(i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click",function(){
      screen.innerHTML = this.innerHTML
    })

  }
}

function multiply(firstNumber,secondNumber){
   answer = firstNumber * secondNumber

  return answer

}

createNumberAndOperatorListeners()


// this function should only be called once a click has been made
