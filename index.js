let randomNumbers = [];
let userNumbers = [];
let userNumbersStr = "";
let userNumber;
let validInput = false;
let numNumbers;
const level = "Insert the level of difficulty desired:";
const userDisplay = "Random numbers generated:";
const getUserNumbers = "Enter the numbers you remember (in the given order separated by a space):";
let guessedNumbers = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createArrayOfRandNum(amount, arr){
    for (let i = 0; i < amount; i++){
        arr[i] = getRandomInt(1, 100);
    }
}

function displayArrAlert (arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += arr[i];
        str += "\n";
    }
    return str;
}

/* VERSION BEFORE CHALLENGE 2
function getNumbers() {
    userNumbersStr = prompt(getUserNumbers);
    if (userNumbersStr == null){
        alert("You're no fun.");
        validInput = false;
    }
    else{
        validInput = true;
        userNumbers = userNumbersStr.split(' ');
        for (let i = 0; i < userNumbers.length; i++) {
            userNumbers[i] = parseInt(userNumbers[i]);
        }
    }
} */

/* CHALLENGE 2 VERSION */
function getNumbers(){
    for(let i = 1; i < numNumbers+1; i++){
        userNumber = prompt(`Enter the ${i}° number:`);
        if (userNumber == null){
            alert("You're no fun.");
            validInput = false;
        } 
        else{
            if(!isNaN(userNumber)){
                validInput = true;
                userNumbers.push(parseInt(userNumber));
            }
        } 
    }
    checkNumbers(randomNumbers, userNumbers);
}

function checkNumbers(originalArray, inputArr){
    console.log("Original: ");
    console.log(originalArray);
    console.log("Users: ");
    console.log(inputArr);
    for(let i = 0; i < originalArray.length; i++){
        if(inputArr[i] === originalArray[i]){
            guessedNumbers++;
        }
    }
    alert("You remembered: " + guessedNumbers);
}

function getLevel(){
    return numNumbers = parseInt(prompt(level));
}

function playMemoryTest(level){
    console.log(numNumbers);
    if(isNaN(numNumbers)){
        alert("You're no fun.");
    }
    else{
        createArrayOfRandNum(numNumbers, randomNumbers);
        alert(userDisplay + "\n" + displayArrAlert(randomNumbers));
        setTimeout(getNumbers, 1500);
    }

}

playMemoryTest(getLevel());