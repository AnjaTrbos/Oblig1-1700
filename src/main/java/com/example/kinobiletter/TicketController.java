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
    public void returnTicket(Ticket inTicket) {
        rep.saveTicket(inTicket);
    }
    @GetMapping("/getTicket")
    public List<Ticket> getTickets(){
        return rep.getTickets();
    }
    @GetMapping("/deleteTicket")
    public void deleteTickets(){
        rep.deleteTickets();
    }
}



