// Functions
const sumCheck = function (val1,val2) {

    // Variable
    let message = "";
    console.log("Value 1:",val1);
    console.log("Value 2:",val2);
    console.log("Type of Value 1:",typeof val1);
    console.log("Type of Value 2:",typeof val2);

    // Conditional
    // // Pseudocode
    // if val1 and val2 are both numbers 
    // then do some stuff 

    if (!isNaN(val1) && !isNaN(val2)) {
        let sumTotal = val1 + val2;
        message += 'The sum of the values provided is: <br/>';
        document.write(message, sumTotal);
    }
    else {
        message += "Please enter numbers to use this feature.";
        document.write(message);
    }
    
}

let firstValue = parseInt(prompt("Please enter a number"));
let secondValue = parseInt(prompt("Please enter a second number"));

//sumCheck(firstValue, secondValue);

// // WHILE LOOP
// let index = 1; // Start Condition
// let whileMessage = "";
// while (index <= 100) { // Permission to continue??
//     whileMessage += (index + '<br/>');
//     index++; // Incrementor
// }

// document.write("Check out these 100 articles: <br/>",whileMessage);

// // FOR LOOPS
// let forMessage = "";
// for (let index = 1; index <= 100; index++) {
//     forMessage += (index + '<br/>');
// }
// document.write("Check out these OTHER 100 articles: <br/>",forMessage);

let articles = ["Gardening 101","How To Not Crash Your Code In An Infinite Loop","Arrays for Smart People", "Debugging Your Git Errors", "Troubleshooting: The Game", "How To Create Your Own Website"];
let articleString = "";

// for...of loop

// let singular of plural
for (let article of articles) {
    articleString += `<li> ${article} </li>`
}

document.write(`<ol style="color: green;">`);
document.write(articleString);
document.write(`</ol>`);