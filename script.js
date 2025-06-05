let previousvalue="",operation="",currentkey="";
function calculate(key){
      
 if (key === '.') {
        // Get the part of currentkey after the last operator
        const lastNumber = currentkey.split(/[\+\-\*\/]/).pop();

        // If it already contains a dot, block the input
        if (lastNumber.includes('.')) {
            return; // Stop here, don't add another dot
        }
    }

    currentkey += key;
   
    console.log(key);
    document.getElementById("screen").value=`${previousvalue}${operation}${currentkey}`;
    //  previousvalue=currentkey;
}

function addoperator(operator){
    if(currentkey=="")return;
    if(previousvalue!=="") {
        solution();
        console.log("ha");
    }
     document.getElementById("point").disabled=false;
    operation+=operator;
    previousvalue=currentkey;
    currentkey="";

    document.getElementById("screen").value=`${previousvalue}${operation}`;


}


function solution(){
    if(currentkey=="" || previousvalue=="")return;
    let prev=parseFloat(previousvalue);
    let curr=parseFloat(currentkey);
    // console.log(operator);
    let result=0;
    switch (operation) {
        case '+':
            result=prev +curr;
            break;
        case '-':
            result=prev-curr;
            break;
        case '*':
            result=prev*curr;
            break;

        case '/':
            if(curr=="0"){
                return;
            }else{
            result=prev/curr;
            }
            break;
        default:
            break;

            
    }
    currentkey=result.toString(); 
    previousvalue="";
    operation="";
    // let result1=`${result}`;
   document.getElementById("screen").value=currentkey;
}
function clearscreen(){
    document.getElementById("screen").value="";
    currentkey="";
    previousvalue="";
    operation="";
}
function deletelfunction(){
   let newvalue= document.getElementById("screen").value.slice(0,-1);
    document.getElementById("screen").value=newvalue;
}

 function selectOption(element) {
    const btn = document.getElementById("dropdownButton");
    btn.textContent = element.textContent;
    btn.style.backgroundColor=element.textContent;

    var colorName=element.textContent;
    document.getElementById("container").style.backgroundColor=element.textContent;
    Array.from(document.getElementsByClassName("btn")).forEach(element => {
    element.style.backgroundColor = colorName;
       
    
        element.style.color="white";
    
});

    console.log( document.getElementsByClassName(" btn"));
 }
