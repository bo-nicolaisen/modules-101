let timeElement = null


export default function createClock(id) {
    timeElement = document.getElementById(id);

    setInterval(updateTime, 1000);
    //updateTime();


}


function updateTime() {

    // Get the current time
    const now = new Date();

    console.log(now.getDate().toString().padStart(2, '0'));
    console.log(now.getMonth().toString().padStart(2, '0'));
    console.log(now.getFullYear().toString());
    console.log(now.getDay());

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;
}

