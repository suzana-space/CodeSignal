function checkPalindrome(palavra) {
    const reversedWord = palavra.split("").reverse().join("");
    return palavra === reversedWord;
}

console.log(checkPalindrome('suzana'))