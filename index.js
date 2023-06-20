var times=document.querySelectorAll('.drum').length;
//selecting all drum class
for(var i=0;i<times;i++){
document.querySelectorAll('.drum')[i].addEventListener('click',handleClick);
}
//mouse press event dectecstor
function handleClick(){
    var btn=this.innerHTML;
    makeSound(btn);
}
//detect keyboard press event
document.addEventListener('keypress',function(event){
    makeSound(event.key);
});
function makeSound(btn)
{
    switch(btn){
        case 'w':var audiow=new Audio("./sounds/tom-1.mp3");
                 audiow.play();
                 break;
         case 'a':var audiow=new Audio("./sounds/tom-2.mp3");
                 audiow.play();
                 break;
        case 's':var audiow=new Audio("./sounds/tom-3.mp3");
                 audiow.play();
                 break;  
        case 'd':var audiow=new Audio("./sounds/tom-4.mp3");
                 audiow.play();
                 break;  
        case 'j':var audiow=new Audio("./sounds/crash.mp3");
                 audiow.play();
                 break;  
        case 'k':var audiow=new Audio("./sounds/kick-bass.mp3");
                 audiow.play();
                 break;  
        case 'l':var audiow=new Audio("./sounds/snare.mp3");
                 audiow.play();
                 break;  
        }
}


