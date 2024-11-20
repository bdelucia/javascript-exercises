let array = [];
for (let i = 0; i < 50; i++){
    array[i] = i;
}

console.log(array);
console.log(sumOfTripledEvens(array));

function sumOfTripledEvens(array){
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, num) => total + num);
}