/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distancia em KM da viagem;
*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1850;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log('Valor da Viagem')
console.log('R$ ' +valorGasto.toFixed(2));