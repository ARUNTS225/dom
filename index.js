let home = document.createElement('button')
home.innerHTML='1'
home.addEventListener('click',()=>{
    myfunction()
})
document.body.appendChild(home)

function myfunction(){
window.location.href="index.html"
}


let homes = document.createElement('button')
homes.innerHTML='2'
homes.addEventListener('click',()=>{
    myfunctions()
})
document.body.appendChild(homes)

function myfunctions(){
window.location.href="about.html"
}

let homess = document.createElement('button')
homess.innerHTML='3'
homess.addEventListener('click',()=>{
    myfunctionss()
})
document.body.appendChild(homess)

function myfunctionss(){
window.location.href="view.html"
}


let homesss = document.createElement('button')
homesss.innerHTML='4'
homesss.addEventListener('click',()=>{
    myfunctionsss()
})
document.body.appendChild(homesss)

function myfunctionsss(){
window.location.href="help.html"
}



