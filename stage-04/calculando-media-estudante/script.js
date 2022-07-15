/* 
 Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno.

 A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre motivar o aluno a dar o seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

*/

let student = prompt("Qual o nome do(a) aluno(a)");
let n1 = prompt("Qual a nota da primeira prova?");
let n2 = prompt("Qual a nota da segunda prova?");
let n3 = prompt("Qual a nota da terceira prova?");

// Fazer a média  (n1 + n2 + n3) / 3

let avarage = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = avarage > 6

avarage = avarage.toFixed(2);

if (result) {
  alert("Parabéns, " + student + "! sua média foi de: " + avarage);
} else if (avarage < 3) {
  alert("Reprovado");
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " + avarage);
}