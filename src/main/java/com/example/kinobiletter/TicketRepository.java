package com.example.kinobiletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {
    @Autowired
    private JdbcTemplate db;

    public void saveTicket(Ticket ticket){
        String sql = "INSERT INTO Ticket(fname,lname,adress,phone,email,antallBiletter,selectMovie) VALUES(?,?,?,?,?,?,?)";
        db.update(sql, ticket.getFname(),ticket.getLname(),ticket.getAdress(),ticket.getPhone(),ticket.getEmail(),ticket.getAntallBiletter(),ticket.getSelectMovie());
    }
    public List<Ticket> getTickets(){
        String sql = "SELECT * FROM Ticket ORDER BY lname";
        List<Ticket> allTickets = db.query(sql,new BeanPropertyRowMapper<>(Ticket.class));
        return allTickets;
    }
    public void deleteTickets(){
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }

}
