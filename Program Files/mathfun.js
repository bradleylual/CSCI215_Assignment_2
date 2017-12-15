
var userNums = []
var userInput = parseInt(prompt("Enter any number, or enter -1 to stop input:"));

while(userInput != -1) {
    userNums.push(userInput);
    userInput = parseInt(prompt("Enter any number, or enter -1 to stop input:"));
}

function max(userNums) {
    var max = userNums[0];
    for(var i = 0; i < userNums.length; i++) {
        if(userNums[i] > max) {
            max = userNums[i];
        }
    }
    return max;
}

function min(userNums) {
    var min = userNums[0];
    for(var i = 0; i < userNums.length; i++) {
        if(userNums[i] < min) {
            min = userNums[i];
        }
    }
    return min;
}

function mean(userNums) {
    var total = 0;
    for(var i = 0; i < userNums.length; i++) {
        total += userNums[i];
    }
    return total / userNums.length;
}

function median(userNums) {
    var median = 0;
    // if length is odd, median equals element at array length / 2, rounded down
    if(userNums.length % 2 !== 0) {
        median = userNums[Math.floor(userNums.length / 2)];
    }
    // if length is odd, median equals the difference of elements at (array length / 2)- 1 and array length / 2
    else {
        var medianSum = userNums[(userNums.length / 2) - 1] + userNums[userNums.length / 2];
        median = medianSum / 2;
    }
    return median;
}

function even(userNums) {
    var evenNums = 0;
    for(var i = 0; i < userNums.length; i++) {
        if(userNums[i] % 2 === 0) {
            evenNums++;
        }
    }
    return evenNums;
}

function odd(userNums) {
    var oddNums = 0;
    for(var i = 0; i < userNums.length; i++) {
        if(userNums[i] % 2 === 0) {
            oddNums++;
        }
    }
    return oddNums;
}

function prime(userNums) {
    var primeNums = 0;
    for(var i = 0; i < userNums.length; i++) {
        var isPrime = true;
        for(var j = 0; j < userNums.length; j++) {
            if(userNums[i] % j === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            primeNums++;
        }
    }
}

function power2(userNums) {
    var power2Nums = 0;
    for(var i = 0; i < userNums.length; i++) {
        if(Math.sqrt(userNums[i]) % 1 == 0) {
            power2Nums++;
        }
    }
    return power2Nums;
}

document.getElementById('max').innerHTML = max(userNums);
document.getElementById('min').innerHTML = min(userNums);
document.getElementById('mean').innerHTML = mean(userNums);
document.getElementById('median').innerHTML = median(userNums);
document.getElementById('even').innerHTML = even(userNums);
document.getElementById('odd').innerHTML = odd(userNums);
document.getElementById('prime').innerHTML = prime(userNums);
document.getElementById('power').innerHTML = power2(userNums);


