


let Welcome_el = document.getElementById("welcome-el");


let Greetings = "Welcome Back "

Welcome_el.innerText = Greetings 

Welcome_el.innerText+= "👋"



let SaveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)
console.log(SaveEl)

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;

}

function save(){

    let countstr = count + " - "
    SaveEl.textContent += countstr
    console.log(count)
    countEl.textContext = 0
    count = 0
}








