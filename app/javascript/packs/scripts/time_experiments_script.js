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

// ここから実験
const start_btn = document.querySelector('#start_btn');
const area = document.querySelector('#area');
const signage = document.querySelector('#signage');
const size_input = document.querySelector('#size_input');

start_btn.addEventListener('click', () => {
    signage.style.fontSize = `${size_input.value}px`;
    let area_css = getComputedStyle(area, '');
    let area_width = area_css.getPropertyValue("width");
    // 単位を削除
    let width = Number( area_width.replace(/px/g , '') );
    console.log(width);
    
    const keyframe1 = {
        translate: [`${width}px 0`, `-${width}px 0`]
    };
    
    const option1 = {
        duration: 5000,
        iterations: Infinity,
    };
    
    const getTime = () => {
        let nowTimes = new Date();
        let nowHours = layout(nowTimes.getHours());
        let nowMinutes = layout(nowTimes.getMinutes());
        let nowSeconds = layout(nowTimes.getSeconds());
        signage.textContent = `${nowHours}:${nowMinutes}:${nowSeconds}`;
    };
    signage.animate(keyframe1, option1);
    setInterval(getTime, 1000);
    
    
})