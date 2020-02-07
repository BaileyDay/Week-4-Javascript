'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let inputarr = []
let method = ""
let equalsval = false


numbers.forEach(function(numbers, e){
  numbers.addEventListener("click", function(e){
    if(input.innerHTML.includes(".") && numbers.innerHTML === "."){
      input.innerHTML = input.innerHTML
    }
    else if(equalsval === true){
      input.innerHTML = ""
      input.innerHTML += numbers.innerHTML
      equalsval = false
    }
    else{
    input.innerHTML += numbers.innerHTML
    }
    
  })
  
})

operators.forEach(function(operators, e){
  operators.addEventListener("click", function(e){
    if (inputarr.length > 1){
      input.innerHTML = ""
    }
    else if (input.innerHTML !== ""){
      inputarr.push(parseFloat(input.innerHTML))
      input.innerHTML = " "
      
    }
    method = operators.innerHTML
  })
})

clear.addEventListener("click", function(){
  input.innerHTML = ""
  inputarr = []
  method = ""
})

result.addEventListener("click", function(){
  inputarr.push(parseFloat(input.innerHTML))
  if(method === "+"){
    input.innerHTML = inputarr.reduce((a, b) => a + b, 0)
    inputarr = []
  }
  if(method === "-"){
    input.innerHTML = inputarr[0] - inputarr[1]
    inputarr = []
    
  }
  if(method === "*"){
    input.innerHTML = inputarr[0] * inputarr[1]
    inputarr = []
  }
  if(method === "/"){
    input.innerHTML = inputarr[0] / inputarr[1]
    inputarr = []
  }
  equalsval = true

})






