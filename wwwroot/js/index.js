
let Range = (start, multiplier) => Math.floor(start + Math.random() * start * (multiplier - 1));



setInterval(() => document.querySelectorAll(".video-views").forEach(view => {
    view.innerHTML = numeral(Range(parseFloat(view.innerHTML) + 5, 1.05)).format("0.000a");
    console.log(parseFloat(view.innerHTML));

}), Range(1000, 10));




