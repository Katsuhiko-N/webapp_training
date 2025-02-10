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
const color_input = document.querySelector('#color_input');
const size_input = document.querySelector('#size_input');
const duration_input = document.querySelector('#duration_input');


// スタートボタン無効化関数
const disable = () => {
    if(color_input.value.length == 0 || size_input.value.length == 0 || duration_input.value.length == 0){
        start_btn.classList.add('r_border');
        start_btn.disabled = true;
    }else{
        start_btn.classList.remove('r_border');
        start_btn.disabled = false;
    }
};

color_input.addEventListener('keyup', () => {
    if(color_input.value.length == 0){
        color_input.classList.add('r_border');
    }else{
        color_input.classList.remove('r_border');
    }
    disable();
});

size_input.addEventListener('keyup', () => {
    if(size_input.value.length == 0){
        size_input.classList.add('r_border');
    }else{
        size_input.classList.remove('r_border');
    }
    disable();
});

duration_input.addEventListener('keyup', () => {
    if(duration_input.value.length == 0){
        duration_input.classList.add('r_border');
    }else{
        duration_input.classList.remove('r_border');
    }
    disable();
});


start_btn.addEventListener('click', () => {
    signage.style.fontSize = `${size_input.value}px`;
    let area_css = getComputedStyle(area, '');
    let area_width = area_css.getPropertyValue("width");
    // 単位を削除
    let width = Number( area_width.replace(/px/g , '') );
    
    signage.style.color = `${color_input.value}`;
    
    const keyframe1 = {
        translate: [`${width * 0.9}px 0`, `-${width * 0.9}px 0`]
    };
    
    console.log(duration_input.value);
    // 整数型に変換してから
    let duration_time = parseInt(duration_input.value);
    const option1 = {
        duration: duration_time,
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