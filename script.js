const imgs = document.querySelectorAll('.slider ul img');
const prev=document.querySelector('.control-prev');
const next=document.querySelector('.control-next');

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';


}
changeSlide();
prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})
next.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})
const scrollcontainer=document.querySelectorAll('.products')
for(const item of scrollcontainer){
    item.addEventListener('wheel',(event)=>{
        item.scrollLeft+=event.deltaY;
    });
}