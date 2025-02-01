const clock = document.querySelector('#clock');

const getTime = () => {
    let nowTimes = new Date();
    let nowHours = nowTimes.getHours();
    let nowMinutes = nowTimes.getMinutes();
    let nowSeconds = nowTimes.getSeconds();
    clock.textContent = `${nowHours}:${nowMinutes}:${nowSeconds}`;
};

setInterval(getTime(), 1000);