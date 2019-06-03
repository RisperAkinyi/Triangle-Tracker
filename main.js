//Function for evaluating a triangle

function checkSide(){
    var side1 = parseFloat(document.getElementById("input1").value);
    var side2 = parseFloat(document.getElementById("input2").value);
    var side3 = parseFloat(document.getElementById("input3").value);
    
//Function for ensuring that number is inputted for the progrm to work
    if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
        alert("Try again by inputting a number") ;   
    }


}
