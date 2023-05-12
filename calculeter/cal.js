scr= document.getElementById("scr");
buttons= document.querySelectorAll("button");

for(i of buttons){
    i.addEventListener("click", (e)=>{
        buttonText= e.target.innerText;
        if(buttonText == 'X'){
            buttonText= '*';
            scr.value+= buttonText;
        }
        else if(buttonText == 'C'){
            scr.value= "";
        }
        else if(buttonText == '='){
            scr.value= eval(scr.value);
        }
        else{
            scr.value+= buttonText;
        }
    })
}