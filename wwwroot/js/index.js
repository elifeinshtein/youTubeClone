let Range = (start, multiplier) => Math.floor(start + Math.random() * start * (multiplier - 1));

/*let nFormatter = (((num, digits) => Math.round(num * Math.pow(10, digits) / Math.pow(10, ('' + num).length - ('' + num).length % 3)) / Math.pow(10, digits) +
    " KMGTPE"[('' + num).length - ('' + num).length % 3 / 3]));

*/


let FormatLongNumber = (value) => ((value < 9999) ? value : (value >= 10000 && value <= 999999) ? (value / 1000) + 'K' : (value >= 1000000 && value <= 999999999) ? (value / 1000000) + 'M' : (value >= 1000000000 && value <= 999999999999) ? (value / 1000000000) + 'B' : value);

setInterval(() => document.querySelectorAll(".video-views").forEach(view => {


    view.innerHTML = Number(FormatLongNumber((Range(Number(view.innerHTML) + 5, 1.05))));

    console.log(Number(FormatLongNumber((Range(Number(view.innerHTML) + 5, 1.05)), 3)));


}), Range(1000, 10));




/*
function m(n, d) {
    x = ('' + n).length, p = Math.pow, d = p(10, d)
    x -= ('' + n).length % 3
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
}



function FormatLongNumber(value) {
   
       
        // hundreds
        if (value <= 9999) {
            return value;
        }
        // thousands
        else if (value >= 10000 && value <= 999999) {
            return (value / 1000) + 'K';
        }
        // millions
        else if (value >= 1000000 && value <= 999999999) {
            return (value / 1000000) + 'M';
        }
        // billions
        else if (value >= 1000000000 && value <= 999999999999) {
            return (value / 1000000000) + 'B';
        }
        else
            return value;
    }
}

*/

/*let FormatLongNumber = (value) => ((value < 9999) ? value : (value >= 10000 && value <= 999999) ? (value / 1000) + 'K' : (value >= 1000000 && value <= 999999999) ? (value / 1000000) + 'M' : (value >= 1000000000 && value <= 999999999999) ? (value / 1000000000) + 'B' : value);

*/
