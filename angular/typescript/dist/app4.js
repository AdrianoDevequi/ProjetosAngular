"use strict";
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
