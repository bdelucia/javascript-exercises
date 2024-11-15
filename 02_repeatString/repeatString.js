const repeatString = function(string, numOfRepeat) {
    let returnString = ""

    if (numOfRepeat < 0)
        return "ERROR"

    for (let i = 0; i < numOfRepeat; i++)
        returnString += string

    return returnString;
};  

// Do not edit below this line
module.exports = repeatString;
