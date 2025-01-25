const sa_image = document.querySelector('#sa_image');


// スクロール量＋画面高さ＝画面の下端の高さ

//スクロール量を取得
let scroll = window.scrollY;
//ページの高さを取得
let windowHeight = window.documentElement.clientHeight;
//ターゲット要素の高さを取得
let targetPos = sa_image.getBoundingClientRect().top;

if(targetPos > scroll + windowHeight){
    sa_image.classList.add('anime01');
}


