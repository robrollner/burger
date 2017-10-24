CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    burger_id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255),
	devoured BOOLEAN DEFAULT FALSE,
    burger_made TIMESTAMP NULL,
	PRIMARY KEY (burger_id)
);