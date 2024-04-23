
$(function (){
// get ticktet to the form using ticket id
    const id = window.location.search.substring(1);
    const url = "/getOneTicket?"+id;
    $.get(url,function(ticket){
        $("#id").val(ticket.id);
        $("#fname").val(ticket.fname);
        $("#lname").val(ticket.lname);
        $("#email").val(ticket.email);
        $("#antallBiletter").val(ticket.antallBiletter);
        $("#selectMovie").val(ticket.selectMovie);
        $("#phone").val(ticket.phone);
        $("#adress").val(ticket.adress);
    });
})
function updateTicket() {
    const ticket = {
        id : $("#id").val(),
        fname : $("#fname").val(),
        lname: $("#lname").val(),
        phone: $("#phone").val(),
        adress: $("#adress").val(),
        email: $("#email").val(),
        antallBiletter: $("#antallBiletter").val(),
        selectMovie: $("#selectMovie").val()
    };
    $.post("/updateTicket", ticket, function(){
        // Reset the input fields after successful update
        $("#id").val('');
        $("#fname").val('');
        $("#lname").val('');
        $("#phone").val('');
        $("#adress").val('');
        $("#email").val('');
        $("#antallBiletter").val('');
        $("#selectMovie").val('');

        // Redirect to the index page
        window.location.href = 'index.html';
    });
}
