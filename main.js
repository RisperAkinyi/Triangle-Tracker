//Function for evaluating a triangle

function checkSide(){
    var side1 = parseFloat(document.getElementById("input1").value);
    var side2 = parseFloat(document.getElementById("input2").value);
    var side3 = parseFloat(document.getElementById("input3").value);
    
//Function for ensuring that number is inputted for the progrm to work
    if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
        alert("Try again by inputting a number") ;   
    }
////Function for evaluating a NOT triangle
else if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)){
    alert("This triangle cannot be formed");
}
////Function for evaluating an equilateral triangle
else if (side1 === side2 && side2 === side3 && side3 === side1 ){
    alert("yeap! thats definitately an equilateral triangle");
}
////Function for evaluating an isosceless triangle
else if (side1 === side2 || side2 === side3 || side3 === side1 ){
    alert("hooray! thats an isosceles triangle");
}
    


}
