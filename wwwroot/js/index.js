let Range = (start, multiplier) => Math.floor(start + Math.random() * start * (multiplier - 1));

function FormatLongNumber(value) {

    if (value <= 9999)
    {
       
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
    
    if( str.includes(',')) {

        return str.replaceAll(/,/g, "");
    }

    else if (str.includes('K')) {
        return str.replaceAll(/K/g, '000');
    }

    else if (str.includes('M')) {
        return str.replaceAll(/M/g, '000000');
    }

    else if (str.includes('B')) {
        return str.replaceAll(/B/g, '000000000');
    }

    else
        return str;
}

setInterval(() => document.querySelectorAll(".video-views").forEach(view => {

    view.innerHTML = FormatLongNumber(Range(Number(view.innerHTML) + 5, 1.05));
    
    parseInt(replace(view.innerHTML));

}), Range(1000, 10));

