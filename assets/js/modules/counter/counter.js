let counterElement
let count

export default function createCounter(id, startValue) {
    counterElement = document.getElementById(id)
    count = startValue
    setInterval(countUp, 5000);
    countUp();
}

function countUp() {
    count++

    let myHtml = `<h2>Count: ${count}</h2>`
    counterElement.innerHTML = myHtml
}