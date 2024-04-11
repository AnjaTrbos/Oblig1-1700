CREATE TABLE Ticket (
                        id INTEGER AUTO_INCREMENT NOT NULL,
                        fname VARCHAR(225) NOT NULL ,
                        lname VARCHAR(225) NOT NULL ,
                        adress VARCHAR(225) NOT NULL ,
                        phone VARCHAR(225) NOT NULL ,
                        email VARCHAR(225) NOT NULL ,
                        antallBiletter INTEGER NOT NULL ,
                        selectMovie VARCHAR(225) NOT NULL ,
                        PRIMARY KEY (id)
);