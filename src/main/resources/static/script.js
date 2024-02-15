// Array to store buyer information
const buyersList = [];

// Function to handle movie selection
function chooseMovie() {
    alert("Movie chosen: " + document.getElementById("selectMovie").value);
}

// Function to add buyers
function addBuyers() {
    // Retrieving input values
    let name = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let adress = document.getElementById("adress").value;
    let email = document.getElementById("email").value; // Note: Fix this line
    let movie = document.getElementById("selectMovie").value;
    let strin1 = document.getElementById("antallBiletter").value;

    // Validation
    if (!validateName(name)) {
        return;
    }
    if (!validateLastName(lname)) {
        return;
    }
    if (!validatePhone(phone)) {
        return;
    }
    if (!validateAdress(adress)) {
        return;
    }
    if (!validateEmail(email)) {
        return;
    }

    //validation for antall
    // I used an alert here just so the user doesnt waste time on other inputs if this one is not correct
    let num1 = Number(strin1);

    if (isNaN(num1) || num1 <= 0) {
        alert("Invalid number of tickets. Please enter a valid number.");
        return;
    }

    // Creating a person object
    //i know its not the best name for it but i couldnt come up with anything else
    let person = {
        name: name,
        lastname: lname,
        phone: phone,
        address: adress,
        email: email,
        numTickets: num1,
        movie: movie
    };

    // Adding the person object to the buyersList array
    buyersList.push(person);

    // Call visPersonRegister function after adding buyers
    visPersonRegister();

    // Clear input fields
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("email").value = "";
    document.getElementById("antallBiletter").value = "";
    document.getElementById("selectMovie").value = "";
}

// Function to validate first name
function validateName(fname) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fname);
    if (!ok) {
        $("#feilNavn").html("The name Must consist of 2 to 20 letters");
        return false;
    } else {
        $("#feilNavn").html("");
        return true;
    }
}

// Function to validate last name
function validateLastName(lname) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(lname);
    if (!ok) {
        $("#feilEtternavn").html("The name Must consist of 2 to 20 letters");
        return false;
    } else {
        $("#feilEtternavn").html("");
        return true;
    }
}

// Function to validate phone number
function validatePhone(phone) {
    const regexp = /^[0-9+\s()-]{8,20}$/;
    const ok = regexp.test(phone);
    if (!ok) {
        $("#feilTelefon").html("Invalid phone number. Please enter a valid phone number.");
        return false;
    } else {
        $("#feilTelefon").html("");
        return true;
    }
}

// Function to validate address
function validateAdress(address) {
    const regexp = /^[a-zA-Z0-9æøåÆØÅ. \-]{2,50}$/;
    const ok = regexp.test(address);
    if (!ok) {
        $("#feilAdresse").html("Invalid address. Please enter a valid address.");
        return false;
    } else {
        $("#feilAdresse").html("");
        return true;
    }
}

// Function to validate email
function validateEmail(email) {
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ok = regexp.test(email);
    if (!ok) {
        $("#feilEmail").html("Invalid Email. Please enter a valid email.");
        return false;
    } else {
        $("#feilEmail").html("");
        return true;
    }
}

// Function to display buyer information
function visPersonRegister() {
    let container = document.getElementById("buyerInfoContainer");
    let tableHtml = "<table><tr>" +
        "<th>Name</th><th>Last Name</th><th>Address</th><th>Phone</th><th>Email</th><th>Tickets</th><th>Movie</th>" +
        "</tr>";

    for (let person of buyersList) {
        tableHtml += "<tr>" +
            "<td>" + person.name + "</td>" +
            "<td>" + person.lastname + "</td>" +
            "<td>" + person.address + "</td>" +
            "<td>" + person.phone + "</td>" +
            "<td>" + person.email + "</td>" +
            "<td>" + person.numTickets + "</td>" +
            "<td>" + person.movie + "</td>" +
            "</tr>";
    }

    tableHtml += "</table>";
    container.innerHTML = tableHtml;
}

// Function to delete all buyers
function deletePeople() {
    while (buyersList.length > 0) {
        buyersList.pop();
    }

    // Update the displayed buyer information
    visPersonRegister();
}
