const palindromes = function (string) {
    const regex = /[A-Za-z0-9]/;
    let splitString = string.toLowerCase()
    .split('')
    .filter((item)=> regex.test(item));

    let forward = splitString.join('');
    let backward = splitString.reverse().join('');
    
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
