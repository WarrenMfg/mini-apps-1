CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE F1 (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `salt` VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE F2 (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address1` VARCHAR(255) NOT NULL,
  `address2` VARCHAR(255),
  `city` VARCHAR(255) NOT NULL,
  `state` VARCHAR(255) NOT NULL,
  `shipping_zip` INT NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE F3 (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cc` VARCHAR(255) NOT NULL,
  `salt_cc` VARCHAR(255) NOT NULL,
  `exp` VARCHAR(255) NOT NULL,
  `salt_exp` VARCHAR(255) NOT NULL,
  `cvv` VARCHAR(255) NOT NULL,
  `salt_cvv` VARCHAR(255) NOT NULL,
  `billing_zip` INT NOT NULL,
  PRIMARY KEY (ID)
);

-- salt for all data???


-- mysql -u root < database/schema.sql