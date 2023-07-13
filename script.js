const htmlTarget = 90;
const cssTarget = 70;
const jsTarget = 80;

let percentHtmlString = document.getElementById("html")
let percentCssString = document.getElementById("css")
let percentJsString = document.getElementById("js")

const addOne = (string, target, interval) => {
    console.log(target)
    let percentNumber = Number(string.textContent) + 1;
    let newPercentString = percentNumber.toString();
    string.innerHTML = newPercentString;
    percentNumber = Number(newPercentString);
    if (percentNumber >= target) {
        clearInterval(interval)
    }
}

let htmlInterval = setInterval(() => addOne(percentHtmlString, htmlTarget, htmlInterval), 10);
let cssInterval = setInterval(() => addOne(percentCssString, cssTarget, cssInterval), 10);
let jsInterval = setInterval(() => addOne(percentJsString, jsTarget, jsInterval), 10);