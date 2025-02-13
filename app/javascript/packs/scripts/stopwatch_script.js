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
        clearTimeout(count);
        // 現在時から開始時を引く
        hold_time += Date.now() - start_time;
    }
});

r_btn.addEventListener('click', () => {
    // カウントストップ
    clearTimeout(count);
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
const i_minutes = document.querySelector('#i_minutes');
const i_seconds = document.querySelector('#i_seconds');

const t_minutes = document.querySelector('#t_minutes');
const t_seconds = document.querySelector('#t_seconds');

const set_btn = document.querySelector('#set_btn');
const s_btn2 = document.querySelector('#s_btn2');
const r_btn2 = document.querySelector('#r_btn2');

const t_info = document.querySelector('#t_info');

// 経過時間
let elapsed_time_m = 0;
let elapsed_time_s = 0;
let count2;
// スタート・ストップ切り替え
let start_stop2 = 0;


i_minutes.addEventListener('keyup', () => {
    if(i_minutes.value > 59){
        i_minutes.value = 59;
    }else if(i_minutes.value < 0){
        i_minutes.value = 0;
    }
});

i_seconds.addEventListener('keyup', () => {
    if(i_seconds.value > 59){
        i_seconds.value = 59;
    }else if(i_seconds.value < 0){
        i_seconds.value = 0;
    }
});


set_btn.addEventListener('click', () => {
    // 初期化
    t_info.textContent = "";
    
    // 開始時間記録
    elapsed_time_m = i_minutes.value;
    elapsed_time_s = i_seconds.value;
    // 分の設定
    if(i_seconds.value > 9){
        t_seconds.textContent = i_seconds.value;
    }else{
        t_seconds.textContent = `0${i_seconds.value}`;
    }
    // 秒の設定
    if(i_minutes.value > 9){
        t_minutes.textContent = i_minutes.value;
    }else{
        t_minutes.textContent = `0${i_minutes.value}`;
    }
    
});

s_btn2.addEventListener('click',() => {
    if(start_stop2 == 0){
        start_stop2 = 1;
        set_btn.disabled = true;
        r_btn2.disabled = true;
        // カウント開始
        countdown();
    }else{
        start_stop2 = 0;
        set_btn.disabled = false;
        r_btn2.disabled = false;
        // カウントストップ
        clearTimeout(count2);
    }
});

r_btn2.addEventListener('click', () => {
    set_btn.disabled = false;
    // カウントストップ
    clearTimeout(count2);
    // 初期化
    t_info.textContent = "";
    // 分の設定
    if(i_seconds.value > 9){
        t_seconds.textContent = i_seconds.value;
    }else{
        t_seconds.textContent = `0${i_seconds.value}`;
    }
    // 秒の設定
    if(i_minutes.value > 9){
        t_minutes.textContent = i_minutes.value;
    }else{
        t_minutes.textContent = `0${i_minutes.value}`;
    }
});


let countdown = () => {
    count2 = setInterval(() => {
        if(elapsed_time_s > 0){
            // 経過時間から秒を引く
            elapsed_time_s = (elapsed_time_s) - 1;
            if(elapsed_time_s > 9){
                t_seconds.textContent = elapsed_time_s;
            }else{
                t_seconds.textContent = `0${elapsed_time_s}`;
            }
        }else if(elapsed_time_s == 0){
            if(elapsed_time_m == 0){
                // 残り時間０の時
                t_minutes.textContent = `0${elapsed_time_m}`;
                t_seconds.textContent = `0${elapsed_time_s}`;
                
                start_stop2 = 0;
                set_btn.disabled = false;
                r_btn2.disabled = false;
                // カウントストップ
                clearTimeout(count2);
                t_info.textContent = "時間になりました";
            }else{
                // 分が残っているなら１引く
                elapsed_time_m = (elapsed_time_m) - 1;
                if(elapsed_time_m > 9){
                    t_minutes.textContent = elapsed_time_m;
                }else{
                    t_minutes.textContent = `0${elapsed_time_m}`;
                }
                elapsed_time_s = 59;
                t_seconds.textContent = "59";
            }
        }
    },1000);
};

