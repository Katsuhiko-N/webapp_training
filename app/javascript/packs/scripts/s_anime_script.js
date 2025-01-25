const sa_image = document.querySelector('.sa_image');


// スクロール量＋画面高さ＝画面の下端の高さ

//ページの高さを取得
const windowHeight = document.documentElement.clientHeight;
console.log(`ページの高さ=${windowHeight}`);
//ターゲット要素の高さを取得
const targetPos = sa_image.getBoundingClientRect().top;
console.log(`ターゲットの高さ=${targetPos}`);

const getscroll = () => {
    //スクロール量を取得
    const scroll = window.scrollY;
    console.log(`スクロール量=${scroll}`);
    
    if(scroll + windowHeight > targetPos){
        sa_image.classList.add('anime01');
    }else{
        sa_image.classList.remove('anime01');
    }
};

window.addEventListener('scroll',getscroll);


