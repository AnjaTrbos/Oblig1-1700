package com.example.kinobiletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketRepository rep;

    @PostMapping("/saveTicket")
    public void saveTicket(Ticket ticket) {
        rep.saveTicket(ticket);
    }
    @GetMapping("/getTicket")
    public List<Ticket> getAllTickets(){
        return rep.getAllTickets();
    }
    @GetMapping("/getOneTicket")
    public Ticket getOneTicket(int id){
        return rep.getOneTicket(id);
    }
    @PostMapping("/updateTicket")
    public void updateTicket(Ticket ticket) {
        rep.updateTicket(ticket);
    }

    @GetMapping ("/deleteOneTicket")
    public void deleteOneTicket(int id){
        rep.deleteOneTicket(id);
    }
    @GetMapping ("/deleteTickets")
    public void deleteTickets(){
        rep.deleteTickets();
    }

}




