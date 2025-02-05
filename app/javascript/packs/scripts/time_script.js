const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const layout = (data) => {
    let num;
    if(data < 10){
        num = '0' + data;
    }else{
        num = data;
    }
    return num;
};

const getTime = () => {
    let nowTimes = new Date();
    let nowHours = layout(nowTimes.getHours());
    let nowMinutes = layout(nowTimes.getMinutes());
    let nowSeconds = layout(nowTimes.getSeconds());
    clock.textContent = `${nowHours}:${nowMinutes}:${nowSeconds}`;
};


const getDay = () => {
    let nowTimes = new Date();
    let nowYears = layout(nowTimes.getFullYear());
    let nowMonthes = layout(nowTimes.getMonth() + 1);
    let nowDates = layout(nowTimes.getDate());
    date.textContent = `${nowYears}年${nowMonthes}月${nowDates}日`;
};

setInterval(getDay, 1000);
setInterval(getTime, 1000);




// ここからサークル時計
const c_hours = document.querySelector('#c_hours');
const c_minutes = document.querySelector('#c_minutes');
const c_seconds = document.querySelector('#c_seconds');

// 円の色
c_hours.style.stroke = "dodgerblue";
c_minutes.style.stroke = "springgreen";
c_seconds.style.stroke = "#ff7b00";

// strokeDasharrayの中身は割合、円周長の順

const hour_circle = () => {
    let nowTimes = new Date();
    let nowHours = layout(nowTimes.getHours());
    let hours_area = 220 * (nowHours / 24);
    c_hours.style.strokeDasharray = `${hours_area}, 220`;
};

const minute_circle = () => {
    let nowTimes = new Date();
    let nowMinutes = layout(nowTimes.getMinutes());
    let minutes_area = 220 * (nowMinutes / 60);
    c_minutes.style.strokeDasharray = `${minutes_area}, 220`;
};

const second_circle = () => {
    let nowTimes = new Date();
    let nowSeconds = layout(nowTimes.getSeconds());
    let seconds_area = 220 * (nowSeconds / 60);
    c_seconds.style.strokeDasharray = `${seconds_area}, 220`;
};

setInterval(hour_circle, 1000);
setInterval(minute_circle, 1000);
setInterval(second_circle, 1000);





// ここからアナログ時計

// const a_hours = document.querySelector('#a_hours');
// const a_minutes = document.querySelector('#a_minutes');
const a_seconds = document.querySelector('#a_seconds');

// 円の色
// a_hours.style.stroke = "dodgerblue";
// a_minutes.style.stroke = "springgreen";
a_seconds.style.stroke = "#ff7b00";


// strokeDashoffsetを時刻によって変化（一周３６０度）
// const hour_analogue = () => {
//     let nowTimes = new Date();
//     let nowHours = layout(nowTimes.getHours());
//     let hours_area = 360 * (nowHours / 24);
//     a_hours.style.strokeDashoffset = `${hours_area}deg`;
// };

// const minute_analogue = () => {
//     let nowTimes = new Date();
//     let nowMinutes = layout(nowTimes.getMinutes());
//     let minutes_area = 360 * (nowMinutes / 60);
//     a_minutes.style.strokeDasharray = `${minutes_area}deg`;
// };

const second_analogue = () => {
    let nowTimes = new Date();
    let nowSeconds = layout(nowTimes.getSeconds());
    let seconds_area = 360 * (nowSeconds / 60);
    a_seconds.style.strokeDasharray = `${seconds_area}deg`;
};

// setInterval(hour_analogue, 1000);
// setInterval(minute_analogue, 1000);
setInterval(second_analogue, 1000);