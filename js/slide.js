var CurrentImg = 1;
var OldImg = 1
var Imgs = 3;
AutoSlide();
function AutoSlide()
{  
    Slide(1);       
    setTimeout("AutoSlide", 3000);   
}
function Slide(x)
{
    "use strict";
    OldImg = CurrentImg
    CurrentImg = CurrentImg + x;
    if(CurrentImg > Imgs){
        CurrentImg = 1;
    }
    if(CurrentImg < 1){
        CurrentImg = Imgs;
    }
    ImgHide();
}
    
function ImgHide()
{
    setTimeout("ImgShow()", 300);
}
function ImgShow()
{
    document.getElementsByClassName('slide-imgs')[OldImg].style.left = 0;
    document.getElementsByClassName('slide-imgs')[CurrentImg].style.left = 1000;
}