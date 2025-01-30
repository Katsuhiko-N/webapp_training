const box = document.querySelector('#box');
const input_data = document.querySelector('#input_data');
const color_info = document.querySelector('#color_info');

input_data.addEventListener('keyup', () => {
    if(input_data.value.length <= 16){
        console.log(`${input_data.value}`);
        box.style.backgroundColor = `${input_data.value}`;
    }
    if(box.style.backgroundColor == "transparent"){
        console.log('この色はありません');
        color_info.textContent = 'この色はありません';
    }else{
        color_info.textContent = '';
    }
});



const color_logs = document.querySelectorAll('.color_log');



for(let i = 0; i < color_logs.length; i++){
    color_logs[i].addEventListener('click', () => {
    console.log(color_logs[i].textContent);
    box.style.backgroundColor = `${color_logs[i].textContent}`;
    if(box.style.backgroundColor == "transparent"){
        console.log('この色はありません');
        color_info.textContent = 'この色はありません';
    }else{
        color_info.textContent = '';
    }
});
}

