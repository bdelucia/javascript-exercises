const palindromes = function (string) {
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanedString === cleanedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
