
function processTxt() {
    var userInput = document.getElementById("input").value;
    userInput = userInput.toUpperCase();
    var wordArray = userInput.split(" ");
    var uniqueWords = [];
    var uniqueWordCounts = [];
    //each word in wordArray is parsed through
    for(var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var count = 0;
        //each word in wordArray is compared to every single word in wordArray
        for(var j = 0; j < wordArray.length; j++) {
            //"!uniqueWords.includes(word)" is added so every unique word only has one count
            if(wordArray[j] == word && !uniqueWords.includes(word)) {
                count++;
            }
        }
        //only counts for unique words are added to uniqueWordCounts
        if (count != 0) {
            uniqueWordCounts.push(count);
        }
        if(!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    function printTxt() {
        var userOutput = "";
        for(var x = 0; x < uniqueWords.length; x++) {
            userOutput += uniqueWords[x] + " - " + uniqueWordCounts[x] + " ";
        }
    }
    document.getElementById("output").innerHTML = printTxt();
}