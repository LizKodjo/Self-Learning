// Make an array called 'myText' and set it to 'Hello'
let myText = 'Hello';


console.log(myText);

// Split 'myText' into an array
let newText = [];

newText = myText.split('');
console.log(newText);

// Create new array called 'backwardsArray'
let backwardsArray = [];
console.log(backwardsArray);

// Create loop from split characters and put them in the new array
for (let i = 0; i < newText.length; i++) {
    // use unshift to loop the letters backwards.
    backwardsArray.unshift(newText[i]);
    console.log(backwardsArray);
}

// Join the split letters
console.log(backwardsArray.join(''));

let newRevArray = [];
for (let i = 0; i < backwardsArray.length; i++) {
    // loop the reversed letters.
    newRevArray.unshift(backwardsArray[i]);
    // loop showing every step
    console.log(newRevArray.join('') + ' = showing each loop');
}
console.log(newRevArray.join('') + ' = looped reversed letters');


document.querySelector('.myText').innerHTML = `This is the 'myText' variable: ${myText}.`;
document.querySelector('.newText').innerHTML = `This is the split variable: ${newText}.`;
document.querySelector('.backwardsArray').innerHTML = `This is the joined variable: ${backwardsArray.join('')}`;
document.querySelector('.newRevArray').innerHTML = `This is the reversed looped variable: ${newRevArray.join('')}`;