"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
    Trabalho[Trabalho["Motorista"] = 2] = "Motorista";
    Trabalho[Trabalho["Cozinheiro"] = 3] = "Cozinheiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 23,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'Andrey Santos',
    idade: 24,
    profissao: Trabalho.Motorista
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
console.log(pessoa4);
