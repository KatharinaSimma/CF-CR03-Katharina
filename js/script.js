
// First Safe Input
/*var yourName = document.getElementById("yourName").value;
console.log(yourName);
console.log(typeof document.getElementById("yourName").value);

//var age = Number(document.getElementById("age").value);
//console.log(age);
console.log(typeof age);

var country = document.getElementById("country").value;
console.log(country);
console.log(typeof country);

var horses = Number(document.getElementById("horses").value);
console.log(horses);
console.log(typeof horses);*/

//var yourName = "Kathi"
//var age = 33
//var country = "Greece"
//var horses = 172

// Function creating Output
function insurance(){
    if (document.getElementById("country").value == "Austria"){
        insurance = Number(document.getElementById("horses").value)*100/Number(document.getElementById("age").value)+50;
    } else if (document.getElementById("country").value == "Hungary"){
        insurance = Number(document.getElementById("horses").value)*120/Number(document.getElementById("age").value)+100;
    } else if (document.getElementById("country").value == "Greece"){
        insurance = Number(document.getElementById("horses").value)*150/(Number(document.getElementById("age").value)+3)+50;
    }
    insuranceOffer = insurance.toFixed(2);
    
    document.getElementById("result").innerHTML = document.getElementById("yourName").value + ", your insurance costs " +  insuranceOffer +  "€! "
}

// Call Function by Event
document.getElementById("button").addEventListener("click",insurance,false);
