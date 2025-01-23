const loading_image = document.querySelector('#loading_image');
const l_bar = document.querySelector('#l_bar');

const contents = document.querySelector('#contents');


// ローディング画面
// アニメーション設定
const keyframe_bar = {
    width: [0, 100],
};

const l_option = {
  duration: 300
};

// 画面の読み込み後、指定時間後に画面表示
window.addEventListener('load', () => {
    
    l_bar.animate(keyframe_bar,l_option);
    window.setTimeout(() =>{
        contents.classList.remove('hide');
        loading_image.classList.add('hide');
    },500);
});