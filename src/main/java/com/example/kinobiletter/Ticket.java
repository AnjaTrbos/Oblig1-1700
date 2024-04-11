package com.example.kinobiletter;

public class Ticket {
    private String selectMovie;
    private String antallBiletter;
    private String fname;
    private String lname;
    private String adress;
    private String phone;
    private String email;

    public Ticket(String selectMovie, String antallBiletter, String fname,
                  String lname, String adress, String phone, String email) {
        this.selectMovie = selectMovie;
        this.antallBiletter = antallBiletter;
        this.fname = fname;
        this.lname = lname;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
    }
    public Ticket (){}

    public String getSelectMovie() {
        return selectMovie;
    }

    public void setSelectMovie(String selectMovie) {
        this.selectMovie = selectMovie;
    }

    public String getAntallBiletter() {
        return antallBiletter;
    }

    public void setAntallBiletter(String antallBiletter) {
        this.antallBiletter = antallBiletter;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

