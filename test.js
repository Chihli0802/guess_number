const list = document.querySelector("#list")


let arr = [];
for(let i = 10; i<=200 ; i+=10){
    arr.push(i);
}


arr.forEach(function(i,index,a){ //參數可以三個 本身,index,list本身
    console.log(i+","+index)
})

let contant ="";

arr.forEach(function(i){
    contant +=`<li>${i}</li>`
})

list.innerHTML =contant;