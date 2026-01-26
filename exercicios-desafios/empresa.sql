CREATE DATABSE empresa;
USE empresa;

CREATE TABLE funcionarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(100)NOT NULL,
     cargo VARCHAR(100)NOT NULL,
     salario DECIMAL(10,2) NOT NULL,
     data_admissao DATE NOT NULL
);

INSERT INTO funcioinarios (nome,cargo,salario,data_admissao)
VALUES
('Ana Silva','Gerente',7500.00,'2020-03-15'),
('Bruno Costa','Desenvolvedor',5500.00,'2019-07-22'),
('Carla Souza','Analista de Marketing',4800.00,'2021-01-10'),
('Daniel Oliveira','Designer',4200.00,'2018-11-05'),
('Eduardo Lima','Vendedor',3900.00,'2022-06-30');


