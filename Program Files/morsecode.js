function translate() {
    var userInput = document.getElementById("input").value;
    var outputString = "";
    userInput = userInput.toUpperCase();
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
    var morseAlphabet = [".-", "=...","-.-.","-..",".","..-.", "--.","....","..",".---","-.-",".-..",
        "--","-.","---",".--.","--.-",".-.", "...","-","..-","...-",".--","-..-",
        "-.--","--..",".-","-...","-.-.","-..", ".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.", "--.-",".-.","...","-","..-","...-",
        ".--","-..-","-.--","--.."," "]

    userInput = userInput.split(" ");
    for(var i = 0; i < userInput.length; i++) {
        var letter = userInput[i];
        for(var j = 0; j < morseAlphabet.length; j++) {
            if(letter == morseAlphabet[j]) {
                outputString += alphabet[j];
            }
        }
    }
    document.getElementById("output").innerHTML = outputString;
}