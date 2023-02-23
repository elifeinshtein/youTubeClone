let Range = (start, multiplier) => Math.floor(start + Math.random() * start * (multiplier - 1));

function FormatLongNumber(value) {

    if (value <= 9999) {

        return value.toLocaleString("en-US");
    }

    else if (value >= 10000 && value <= 999999) {
        return (value / 1000) + 'K';
    }

    else if (value >= 1000000 && value <= 999999999) {
        return (value / 1000000) + 'M';
    }

    else if (value >= 1000000000 && value <= 999999999999) {
        return (value / 1000000000) + 'B';
    }
    else
        return value;
}

function replace(str) {
<<<<<<< HEAD
 
     if (str.includes('K')) {
         return 1000 * parseFloat(str);
=======

    if (str.includes(',')) {

        return str.replaceAll(/,/g, "");
    }

    else if (str.includes('K')) {
        return str.replaceAll(/K/g, '000');
>>>>>>> cdc223fe787a4557bd75901e47a12692b3a12f79
    }

    else if (str.includes('M')) {
         return 1000000 * parseFloat(str);
    }

    else if (str.includes('B')) {
         return 1000000000 * parseFloat(str);
    }

    else
         return 1 *parseFloat(Number(str));
}

<<<<<<< HEAD

let IntervalFrequency = Range(1000, 3);
console.log(`The interval frequency is: ${IntervalFrequency}ms`);
console.log("-------------------------------"); // just creating an empty line

let Iteration = 0;
setInterval(function () {
    let ElementsToProcess = 6; 

    console.log(`The function inside of setInterval is being called, current iteration: ${Iteration++}`);

=======
let IntervalFrequency = Range(1000, 3);
console.log(`The interval frequency is: ${IntervalFrequency}ms`);
console.log("-------------------------------"); // just creating an empty line

let Iteration = 0;
setInterval(function () {
    let ElementsToProcess = 1; // change this value to 6 in order to process all elements, I've set it to 1 in order to reduce the amount of logs being written

    console.log(`The function inside of setInterval is being called, current iteration: ${Iteration++}`);

>>>>>>> cdc223fe787a4557bd75901e47a12692b3a12f79
    document.querySelectorAll(".video-views").forEach(view => {
        if (--ElementsToProcess < 0) return;

        let current = view.innerHTML;
        console.log(`The current value is: ${current}`);

        let replaced = replace(current);
        console.log(`The value after being cleaned from letters: ${replaced}`);

        let number = Number(replaced); // turning the "clean value" into a number.
        number = Range(number + 5, 1.05);
        console.log(`The incremented number: ${number}`);

        let formatted = FormatLongNumber(number);
        console.log(`The formatted number: ${formatted}`);

        view.innerHTML = formatted;
    });
    console.log("-------------------------------"); // just creating an empty line
}, IntervalFrequency);