---Aqui vai os scripts SQL referente a tabela de cliente



CREATE TABLE cliente (
    id serial PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) PRIMARY KEY,
    idade INT NOT NULL,
    rg VARCHAR(20) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL
)

