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
        String sql = "INSERT INTO Ticket(fname,lname,adress,phone,email,antallBiletter,selectMovie) VALUES(?,?,?,?,?,?,?);";
        db.update(sql, ticket.getFname(),ticket.getLname(),ticket.getAdress(),ticket.getPhone(),ticket.getEmail(),ticket.getAntallBiletter(),ticket.getSelectMovie());
    }
    public List<Ticket> getAllTickets(){
        String sql = "SELECT * FROM Ticket ORDER BY lname";
        List<Ticket> allTickets = db.query(sql,new BeanPropertyRowMapper<>(Ticket.class));
        return allTickets;
    }
    public Ticket getOneTicket(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Ticket WHERE id=?";
        Ticket oneTicket = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Ticket.class));
        return oneTicket;
    }
    public void updateTicket(Ticket ticket) {
        String sql = "UPDATE Ticket SET fname=?, lname=?, phone=?, email=?, adress=?, antallBiletter=?, selectMovie=? WHERE id=?";
        db.update(sql, ticket.getFname(), ticket.getLname(), ticket.getPhone(), ticket.getEmail(), ticket.getAdress(), ticket.getAntallBiletter(), ticket.getSelectMovie(), ticket.getId());
    }

    public void deleteOneTicket(int id) {
        String sql = "DELETE FROM Ticket WHERE id=?;";
        db.update(sql,id);
    }
    public void deleteTickets(){
        String sql = "DELETE FROM Ticket;";
        db.update(sql);
    }


}

