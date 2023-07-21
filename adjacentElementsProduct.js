// maior produto adjacente 

function solution(lista) {
    if (lista.length < 2) {
      throw new Error("A lista deve conter pelo menos dois números.");
    }
  
    let maxProduto = lista[0] * lista[1];
  
    for (let i = 1; i < lista.length - 1; i++) {
      const produto = lista[i] * lista[i + 1];
      if (produto > maxProduto) {
        maxProduto = produto;
      }
    }
  
    return maxProduto;
  }
  
console.log(solution([1,5,3,7,4]))