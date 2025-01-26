// スクロール量と要素の高さでアニメーションの設定する方法
const sa_image1 = document.querySelector('.sa_image1');
// スクロール量＋画面高さ＝画面の下端の高さ
//ページの高さを取得
const windowHeight = document.documentElement.clientHeight;
console.log(`ページの高さ=${windowHeight}`);
//ターゲット要素の高さを取得
const targetPos = sa_image1.getBoundingClientRect().top;
console.log(`ターゲットの高さ=${targetPos}`);

const getscroll = () => {
    //スクロール量を取得
    const scroll = window.scrollY;
    
    if(scroll + windowHeight > targetPos){
        sa_image1.classList.add('anime01');
    }else{
        sa_image1.classList.remove('anime01');
    }
};

// スクロール量はスクロールする度取得するように
window.addEventListener('scroll',getscroll);



// IntersectionObserverを使う方法
const sa_image2 = document.querySelector('.sa_image2');
const sa_image3 = document.querySelector('.sa_image3');

// 範囲内に入ったら
// entriesには監視対象が配列として入る
const showImage1 = (entries) => {
    const keyframe1 = {
        translate: ['0 100px', 0],
        opacity: [0, 1]
    };
    entries[0].target.animate(keyframe1, 1000);
};

const showImage2 = (entries) => {
    const keyframe2 = {
        translate: ['100px 0', 0],
        opacity: [0, 1]
    };
    entries[0].target.animate(keyframe2, 1000);
};

// 監視設定
const imageObserver1 = new IntersectionObserver(showImage1);
const imageObserver2 = new IntersectionObserver(showImage2);

// 監視対象設定
imageObserver1.observe(sa_image2);
imageObserver2.observe(sa_image3);