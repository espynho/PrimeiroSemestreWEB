"use strict";
class Pessoa{
    constructor(nome, idade, altura){ // construtor 
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString(){ // método para retornar os valores
        return `Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}`;
    }
}