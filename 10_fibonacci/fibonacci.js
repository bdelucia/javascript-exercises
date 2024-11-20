const fibonacci = function(index) {
    index = parseInt(index)
    if(index < 0)
        return 'OOPS'
    if(index === 0)
        return 0;

    let fibArray = [1, 1];
    for(let i = 2; i < index; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }

    return fibArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
