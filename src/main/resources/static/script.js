// Function to add a ticket buyer
function addBuyers() {
    // Get ticket data from form fields
    const ticket = {
        fname: $("#fname").val(),
        lname: $("#lname").val(),
        phone: $("#phone").val(),
        adress: $("#adress").val(),
        email: $("#email").val(),
        antallBiletter: $("#antallBiletter").val(),
        selectMovie: $("#selectMovie").val(),
    };

    // Send the ticket data to the server using jQuery AJAX POST request
    $.post("/saveTicket", ticket, function () {
        // After successful addition, retrieve and display updated ticket information
        getTickets();
    });
}

// Function to retrieve ticket information from the server
function getTickets(){
    $.get("/getTicket", function (data) {
        // Format and display ticket information
        formatData(data);
    });
    // Clear form fields after retrieving ticket information
    $("#fname").val('');
    $("#lname").val('');
    $("#phone").val('');
    $("#adress").val('');
    $("#email").val('');
    $("#antallBiletter").val('');
    $("#selectMovie").val('');
}

// Function to format ticket data into HTML table format
function formatData(tickets) {
    let ut = "<table class='table table-striped table-bordered'><thead><tr>" +
        "<th scope='col'>Name</th><th scope='col'>Last Name</th><th scope='col'>Address</th><th scope='col'>Phone</th><th scope='col'>Email</th><th scope='col'>Tickets</th><th scope='col'>Movie</th>" +
        "</tr></thead><tbody>";
    for (const ticket of tickets) {
        ut += "<tr><td>" + ticket.fname + "</td><td>" + ticket.lname + "</td>" +
            "<td>" + ticket.phone + "</td><td>" + ticket.adress + "</td><td>" + ticket.email + "</td>" +
            "<td>" + ticket.antallBiletter + "</td><td>" + ticket.selectMovie + "</td></tr>";
    }
    ut += "</tbody></table>";
    // Display formatted ticket information in the ticketInfoContainer element
    $("#ticketInfoContainer").html(ut);
}

// Function to delete all tickets
function deleteTickets() {
    // Send a request to the server to delete all tickets
    $.get( "/deleteTicket", function() {
        // After successful deletion, retrieve and display updated ticket information
        getTickets();
    });
}

// Function to validate movie selection
function validateSelection() {
    const movie = $("#selectMovie").val();
    if (movie === "") {
        // Display error message if no movie is selected
        $("#feilSelection").html("Choose a movie");
        return false;
    } else {
        // Clear error message if a movie is selected
        $("#feilSelection").html(" ");
        return true;
    }
}

//function to validate number of tickets
function validateAntall(antallBilleter) {
    const regex = /^[1-9]*$/;// Regex to ensure that the input contains only digits (1-9)
    const ok = regex.test(antallBilleter);
    if (!ok) {
        $("#feilAntall").html( "Please put the number of tickets as number from 1 to 9");
        return false;
    } else {
        $("#feilAntall").html( " ");
        return true;
    }
}
// function to validate name
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