const input_data = document.querySelector('#input_data');

input_data.addEventListener('keyup', () => {
    if(input_data.value.length > 9){
        console.log('10文字超えました');
        input_data.style.backgroundColor = 'red';
    }else{
        input_data.style.backgroundColor = 'transparent';
    }
});
   
