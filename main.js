const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const min = document.querySelector("#minNum");
const max = document.querySelector("#maxNum");
let bomb = Math.floor(Math.random()*100)+1;
console.log(bomb);
const change = document.querySelector("#changeText");
const line = document.querySelector("#line");
const refresh = document.querySelector("#refreshbtn");
const text = document.querySelector("textArea");

btn.addEventListener("click",function(){
    const num = parseInt(input.value); //轉成數字
    let minV = parseInt(min.innerText);
    let maxV =parseInt(max.innerText);
   
    if(num===bomb){
        change.innerText = "恭喜答對"
        min.innerText = null;
        max.innerText =null;
        line.innerText = num

    } else if(num>minV && num<bomb){
        min.innerText = num;

    }else if(num<maxV && num>bomb){
        max.innerText = num;
    }

    input.value = null;
});



refresh.addEventListener("click",function(){
    window.location.reload();
})