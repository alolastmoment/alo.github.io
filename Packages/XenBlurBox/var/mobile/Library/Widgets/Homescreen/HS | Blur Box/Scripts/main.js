function init() {
    var box = document.getElementById('blurBox');

    var styleText = 'width:' + boxWidth + "px; height:" + boxHeight + "px; background:" + boxColor + "; -webkit-backdrop-filter: blur(" + boxBlur + "px);backdrop-filter: blur(" + boxBlur + "px); border-radius:"+boxBorderRadius+"px;";
    
    
    box.setAttribute('style', styleText);
}