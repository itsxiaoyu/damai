window.onload=function(){
    // 轮播图
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var oImg=document.getElementById('img1');
    arrImg=['img/carousel_1.jpg','img/carousel_2.jpg','img/carousel_3.png'];
    var num=0;
    var timer=null;

    function autoPlay(){
    timer=setInterval(function(){
        num++;
        num%=arrImg.length;
        Tab();
    },2000);
}
    setTimeout(autoPlay,1000);
    function Tab(){
        for(var i=0;i<arrImg.length;i++){
        oImg.src=arrImg[num];
        }
    }
    Tab();
    oPrev.onclick=function(){
        num--;
        if(num==-1){
            num=0;
        }
        Tab();
    };
    oNext.onclick=function(){
        num++;
        if(num==arrImg.length){
            num=0;
        }
        Tab();
    };
}