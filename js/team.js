var employees = JSON.parse(employees);
console.table(employees); // just for testing



// display info from json file
for (var i=0; i<employees.length; i++){
    output = document.getElementById("main").innerHTML += `<div class='staff${i}'><p> ${employees[i].firstName} ${employees[i].lastName}</p> <p>${employees[i].role}</p> <img ${employees[i].image}></div><br> <p>'Quote: ${employees[i].quote}'</p> <br> `
}

