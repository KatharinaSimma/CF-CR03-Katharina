// I wrote my function as tightly as possible
/* I assume I will only use the data from the form field for this specific 
function so I did not declare variable outside of the function.*/

// Function creating Output
function insurance(){
// part #1  picks up values and calculates accordingly
    if (document.getElementById("country").value == "Austria"){
        insurance = Number(document.getElementById("horses").value)*100/Number(document.getElementById("age").value)+50;
    } else if (document.getElementById("country").value == "Hungary"){
        insurance = Number(document.getElementById("horses").value)*120/Number(document.getElementById("age").value)+100;
    } else if (document.getElementById("country").value == "Greece"){
        insurance = Number(document.getElementById("horses").value)*150/(Number(document.getElementById("age").value)+3)+50;
    }
// part #2 tests user input and throws an error message if need be
    insuranceOffer = insurance.toFixed(2);
        if (isNaN(insuranceOffer) == true || document.getElementById("yourName").value != true){
            document.getElementById("result").innerHTML = "Please fill in all fields correctly to get a quote!"
        } else {
            document.getElementById("result").innerHTML = document.getElementById("yourName").value + ", your insurance costs " +  insuranceOffer +  "€! "}
}

// Call Function as by event
document.getElementById("button").addEventListener("click",insurance,false);
