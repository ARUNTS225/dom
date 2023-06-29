let calculator = document.createElement("div")
calculator.innerHTML="Calculator"
calculator.setAttribute('class','calc')
document.body.appendChild(calculator)

let calbox = document.createElement("h1")
calbox.setAttribute('class','calb')
document.body.appendChild(calbox)

let input = document.createElement("input")
input.setAttribute('type','text readonly')
input.setAttribute('id','display')
calbox.appendChild(input)

let setone = document.createElement("div")
calbox.appendChild(setone)


let btn1 = document.createElement("button")
btn1.innerHTML="1"
btn1.addEventListener('click',()=>{
    appendNumber(1)
})
setone.appendChild(btn1)

let btn2 = document.createElement("button")
btn2.innerHTML="2"
btn2.addEventListener('click',()=>{
    appendNumber(2)
})
setone.appendChild(btn2)

let btn3 = document.createElement("button")
btn3.innerHTML="3"
btn3.addEventListener('click',()=>{
    appendNumber(3)
})
setone.appendChild(btn3)

let btnplus = document.createElement("button")
btnplus.innerHTML="+"
btnplus.addEventListener('click',()=>{
    setOperator('+')
})
setone.appendChild(btnplus)

let settwo = document.createElement("div")
calbox.appendChild(settwo)

let btn4 = document.createElement("button")
btn4.innerHTML="4"
btn4.addEventListener('click',()=>{
    appendNumber(4)
})
settwo.appendChild(btn4)

let btn5 = document.createElement("button")
btn5.innerHTML="5"
btn5.addEventListener('click',()=>{
    appendNumber(5)
})
settwo.appendChild(btn5)

let btn6 = document.createElement("button")
btn6.innerHTML="6"
btn6.addEventListener('click',()=>{
    appendNumber(6)
})
settwo.appendChild(btn6)


let btnminus = document.createElement("button")
btnminus.innerHTML="-"
btnminus.addEventListener('click',()=>{
    setOperator('-')
})
settwo.appendChild( btnminus)


let setthree = document.createElement("div")
calbox.appendChild(setthree)

let btn7 = document.createElement("button")
btn7.innerHTML="7"
btn7.addEventListener('click',()=>{
    appendNumber(7)
})
setthree.appendChild(btn7)

let btn8 = document.createElement("button")
btn8.innerHTML="8"
btn8.addEventListener('click',()=>{
    appendNumber(8)
})
setthree.appendChild(btn8)

let btn9 = document.createElement("button")
btn9.innerHTML="9"
btn9.addEventListener('click',()=>{
    appendNumber(9)
})
setthree.appendChild(btn9)


let btnmul = document.createElement("button")
btnmul.innerHTML="*"
btnmul.addEventListener('click',()=>{
    setOperator('*')
})
setthree.appendChild(btnmul)


let setfour = document.createElement("div")
calbox.appendChild(setfour)

let btna = document.createElement("button")
btna.innerHTML="0"
btna.addEventListener('click',()=>{
    appendNumber(0)
})
setfour.appendChild(btna)

let btnb = document.createElement("button")
btnb.innerHTML="AC"
btnb.addEventListener('click',()=>{
    clearDisplay() 
})
setfour.appendChild(btnb)

let btnc = document.createElement("button")
btnc.innerHTML="/"
btnc.addEventListener('click',()=>{
    setOperator('/')
})
setfour.appendChild(btnc)


let btneql = document.createElement("button")
btneql.innerHTML="="
btneql.addEventListener('click',()=>{
    calculateResult() 
        
})
setfour.appendChild(btneql)



let operator = null;
let operand1 = null;
let operand2 = null;

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
  }
  console.log(display.value)

  function setOperator(op) {
    operator = op;
    operand1 = Number(document.getElementById('display').value);
    display.value = operator
  }


  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    operator = null;
    operand1 = null;
    operand2 = null;
  }

  function calculateResult() {
    operand2 = Number(document.getElementById('display').value);
    const display = document.getElementById('display');
  
    if (operator === '+') {
      display.value = operand1 + operand2;
    } else if (operator === '-') {
      display.value = operand1 - operand2;
    } else if (operator === '*') {
      display.value = operand1 * operand2;
    } else if (operator === '/') {
      display.value = operand1 / operand2;
    }
  
    operator = null;
    operand1 = null;
    operand2 = null;
  }


