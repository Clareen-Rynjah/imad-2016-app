console.log('Loaded!');
var element =document.getElementbyId('main-text');

element.InnerHTML='New value';

var img=document.getElementbyId('modi');
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};