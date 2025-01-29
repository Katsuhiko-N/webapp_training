const box = document.querySelector('#box');
const input_data = document.querySelector('#input_data');

input_data.addEventListener('keyup', () => {
    if(input_data.value.length <= 16){
        console.log(`${input_data.value}`);
        box.style.backgroundColor = `${input_data.value}`;
    }
    if(box.style.backgroundColor == "transparent"){
        console.log('この色はありません');
    }
});
   
