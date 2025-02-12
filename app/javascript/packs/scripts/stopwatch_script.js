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


// ストップウォッチ機能

const show_time = document.querySelector('#show_time');
const s_btn = document.querySelector('#s_btn');
const r_btn = document.querySelector('#r_btn');

let start_time;
// カウント(関数)
let count;

// 一時停止していた時間
let hold_time = 0;
// 経過時間(show_timeへ形式変換前)
let elapsed_time = 0;

// スタート・ストップ切り替え
let start_stop = 0;

s_btn.addEventListener('click',() => {
    if(start_stop == 0){
        start_stop = 1;
        r_btn.disabled = true;
        // 開始時間記録
        start_time = Date.now();
        // カウント開始
        timer();
    }else{
        start_stop = 0;
        r_btn.disabled = false;
        // カウントストップ
        clearInterval(count);
        // 現在時から開始時を引く
        hold_time += Date.now() - start_time;
    }
});

r_btn.addEventListener('click', () => {
    // カウントストップ
    clearInterval(count);
    // 初期化
    elapsed_time = 0;
    hold_time = 0;
    
    show_time.textContent = '00:00.000';
    
});

// 再帰関数（繰り返されshow_timeが更新される）
let timer = () => {
    // 10ミリ秒ごとに表示変化
    count = setTimeout(() => {
        // 現在時から開始時間を引く（一時停止時間は足す）
        elapsed_time = Date.now() - start_time + hold_time;
        show_time.textContent = new Date(elapsed_time).toISOString().slice(14, 23);
        
        timer();
    },10);
};



// タイマー
const timer2 = document.querySelector('timer2');
const s_btn2 = document.querySelector('#s_btn2');
const r_btn2 = document.querySelector('#r_btn2');