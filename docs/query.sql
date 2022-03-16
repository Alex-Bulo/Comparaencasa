CREATE DATABASE ceca_db;

CREATE TABLE ceca_db.cars (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`car_name` VARCHAR(50) NOT NULL,
	`car_plate` VARCHAR(10) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
 );
INSERT INTO ceca_db.cars( car_name, car_plate)
VALUES 
('Toyota Etios', 'AE 142 BZ'),
('Toyota Yaris', 'AH 423 FF'),
('Toyota Corolla', 'BA 703 AZ'),
('Fiat Cronos', 'AT 128 EL'),
('Fiat Punto', 'CR 802 HT'),
('Renault Kwid', 'BK 020 CC'),
('Renault Duster', 'CA 279 LU');