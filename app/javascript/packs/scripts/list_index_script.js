const box = document.querySelector('#box');
const input_data = document.querySelector('#input_data');

input_data.addEventListener('keyup', () => {
    if(input_data.value.length <= 16){
        console.log(`${input_data.value}`);
        box.style.backgroundColor = `${input_data.value}`;
    }
});


// 同じclassを持つ者すべてに適用するには、配列として取得し、一個一個に適用する
const color_logs = document.querySelectorAll('.color_log');

for(let i = 0; i < color_logs.length; i++){
    color_logs[i].style.borderColor = `${color_logs[i].textContent}`;
    color_logs[i].addEventListener('click', () => {
        console.log(color_logs[i].textContent);
        box.style.backgroundColor = `${color_logs[i].textContent}`;
    });
}

