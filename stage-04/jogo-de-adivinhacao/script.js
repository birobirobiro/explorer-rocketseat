/* Jogo da adivinhação 

Apresente a mensagem ao usuário:
"Adivinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o nímero, apresentar a mensagem:
"Parabéns! Você adivinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas

*/

let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente")
  xAttempts++
}

alert(`Parabéns, você adivinhou em ${xAttempts} tentativas`)