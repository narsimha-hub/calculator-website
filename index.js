const display=document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}
function ClearDisplay(){
    display.value= "";
}
function deleteLast() {
    // let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate(){
try{
    display.value=eval(display.value);
}
catch (error){
    display.value="Invalid Expression";
}

}