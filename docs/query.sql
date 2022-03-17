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

CREATE TABLE ceca_db.users (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`VARCHAR(50) NOT NULL,
	`mail` VARCHAR(50) NOT NULL UNIQUE,
	`password` VARCHAR(100) NOT NULL,
    `photo` VARCHAR(100) NOT NULL default 'photo1.png',
    `id_car` INT(10) UNSIGNED NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`id_car`) REFERENCES ceca_db.cars(`id`)
);

INSERT INTO ceca_db.users( name, mail, password, photo, id_car)
VALUES 
('Alejandro Bullorini', 'alejandro@user.com', 'holamundo', 'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2019/11/15/libra-seguros-telefono.png', 2),
('Foo Bar', 'Foo@user.com', 'bar', 'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2020/01/21/cotizacion-online-de-federacion-patronal.png', 4),
('Test User', 'UserTest@user.com', 'testing', 'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2022/03/15/federal-seguros-en-posadas-misiones.png', 5);
