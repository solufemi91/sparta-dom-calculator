
// create listners for the number and operators




function createNumberAndOperatorListeners(){
  var screen = document.getElementById('screen')

  var numberButtons = document.getElementsByClassName("buttonNum")

  var operatorButtons = document.getElementsByClassName("operator")

  for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click",function(){

    screen.innerHTML = this.innerHTML

  })}

  for(i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click",function(){
      screen.innerHTML = this.innerHTML
    })

  }
}

createNumberAndOperatorListeners()

// record the first and second click from number class

function recordFirstAndSecondClick(){
  // i want code that will count how many times a button from the nunber button class is clicked
}
