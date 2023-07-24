// polígono (n-1)-interessante e adiciona polígonos 1-interessantes ao seu perímetro, lado a lado

function solution (n) {
    if( n === 1){
        return 1
    }
    else {
        return solution(n - 1) + 4 * (n - 1)
    }
}

console.log(solution(2))