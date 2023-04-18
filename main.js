const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const min = document.querySelector("#minNum");
const max = document.querySelector("#maxNum");
const bomb = 44;

const change = document.querySelector("#changeText");


btn.addEventListener("click",function(){
    
    const num = parseInt(input.value) //轉成數字
    let minV = min.innerText;
    let maxV = max.innerText;
    if(num==bomb){
        change.innerText = "恭喜答對"

    } else if(num>minV && num<bomb){
        min.innerText = num;

    }else if(num<maxV && num>bomb){
        max.innerText = num;
        console.log(num);
    }
    

    input.value = null;
});