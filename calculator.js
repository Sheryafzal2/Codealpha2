const display=document.getElementById('display');
const buttons=document.querySelectorAll('.buttons button');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.innerText;
        happy(value);
    })
})
function happy(value){
    if(value==="C"){
        display.value="";
    }
    else if(value==="="){
        calculate();
    }
    else{
        display.value +=value;
    }
}
function calculate(){
         try{
            let expression =display.value.replace(/÷/g,"/");
            display.value=eval(expression);
         } catch {
            display.value="error";
         }
}