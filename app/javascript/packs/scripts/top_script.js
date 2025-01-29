const loading_image = document.querySelector('#loading_image_top');
const l_bar = document.querySelector('#l_bar');

const contents = document.querySelector('#contents');


// ローディング画面
// アニメーション設定
const keyframe_bar = {
    width: [0, "100px"],
};

const l_option = {
  duration: 300
};

if(contents.classList.contains('hide_top')){
    l_bar.animate(keyframe_bar,l_option);
    window.setTimeout(() =>{
        contents.classList.remove('hide_top');
        loading_image.classList.add('hide_top');
    },500);
}
