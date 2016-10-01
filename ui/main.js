console.log('Loaded!');
var element =document.getElementbyId('main-text');

element.InnerHTML='New value';

var img=document.getElementbyId('modi');
marinLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+ 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};