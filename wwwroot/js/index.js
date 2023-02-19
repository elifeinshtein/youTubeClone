var minSecInterval = 5;
var maxSecInterval = 10;
var minPercentage = 1;
var maxPercentage = 5;
var ViewCount = 1;

function findPercentage(min, max) {
    return ((Math.random() * (max - min + 1) + min) / 100);
}

function myFunction() {

    var arr = document.querySelectorAll(".video-views");

    arr.forEach(ViewCount => {
        var numOfViews = parseInt(ViewCount.innerHTML);
        numOfViews = Math.ceil(numOfViews * (1 + findPercentage(minPercentage, maxPercentage)));
        ViewCount.innerHTML = numOfViews;
    })
   
}

var rand = Math.floor(Math.random() * (maxSecInterval - minSecInterval + 1) + minSecInterval); //Generate Random number between 5 - 10
setInterval(myFunction, rand * 1000);