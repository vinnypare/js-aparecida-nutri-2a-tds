var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tsImc = paciente.querySelector(".info-imc");
var imcDaLinha = tdImc.textContent;

var imc = peso / altura * altura;

tdImc.textContent = imc;