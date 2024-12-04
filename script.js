const getCurrentTime = () => {
    // let curTime = new Date().toLocaleString();
    // let curTime = new Date().toLocaleTimeString();
    let curDate = new Date();
    let curTime = curDate.toLocaleTimeString();
    let formatDate = curDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    document.getElementById("clock").innerText = curTime;
    document.getElementById("date").innerText = formatDate;
}

getCurrentTime();

const startTimeEverySecondIntervalId = setInterval(() => {
    getCurrentTime();
}, 1000);

// stop time after 10 second
// setTimeout(() => clearInterval(startTimeEverySecondIntervalId), 10000);