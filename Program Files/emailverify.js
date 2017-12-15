function verifyEmail() {
    var userInput = document.getElementById("input").value;
    var isValid = false;
    var outputString = "";

    for(var i = 0; i < userInput.length; i++) {
        if(userInput[i] === "@") {
            for(var j = inputText[i] + 2; j < userInput.length; j++) {
                if(userInput[j] === ".") {
                    isValid = true;
                }
            }
        }
    }
    if(isValid) {
        outputString = ":)"
    }
    else {
        outputString = ":("
    }
    document.getElementById("output").innerHTML = outputString;
}