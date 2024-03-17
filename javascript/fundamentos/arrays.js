// // produto = ['Arroz', 'Feijão', 'Macarrão', 'Carne', 'Frango', 'Peixe'];
// // console.log(produto);
// // console.log(produto[0]);
// // produto.push('Suco');
// // console.log(produto);
// // produto.pop();
// // console.log(produto);
// var frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Abacaxi'];
// var primeiro = frutas[0];
// console.log(primeiro);
// var ultimo = frutas[frutas.length - 1];
// console.log(ultimo);
// var posicao = frutas.indexOf('Morango');
// console.log(posicao);
// console.log(frutas.length);

let frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Abacaxi'];
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
});