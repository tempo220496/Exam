document.addEventListener("DOMContentLoaded",function(){
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions');
  });


  var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        progress = document.querySelector('.progress'),
        scroll;

  document.addEventListener('scroll', function() {
        scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        progress.style.setProperty('--scroll', scroll + '%');
      if(st=='0'){
          progress.style.display=' none';
      }
  });

var sidebar=document.querySelector(".right-bar");

document.querySelector("#more").onclick=function(){
    sidebar.classList.toggle('show');
}
var rounded_link=document.querySelector(".rounded-link");
rounded_link.addEventListener("click",function(event){
  event.preventDefault();
  document.querySelector(".myModal").style.display="block";
});
var myModal_link=document.querySelector(".myModal-link");
myModal_link.addEventListener("click",function(event){
  event.preventDefault();
  document.querySelector(".myModal").style.display="none";
});




var hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
  document.querySelector('.left-bar').classList.toggle('is-active');
  hamburger.classList.toggle('is-active');
  sidebar.classList.toggle('show');
});

var slideItem=document.querySelectorAll('.slide-item'),
    prevBtn=document.querySelector('#left-button'),
    nextBtn=document.querySelector('#right-button'),
    slideIndex=1;
showSlides(slideIndex);
function showSlides(n){
    if(n<1){
        slideIndex=slideItem.length;
    }else if(n>slideItem.length){
        slideIndex=1;
    }
    for(let i=0;i<slideItem.length;i++){
        slideItem[i].style.display="none";
    }
    slideItem[slideIndex-1].style.display='block';
}
function plusSlides(n){
    showSlides(slideIndex+=n);
}
prevBtn.onclick=function(){
    plusSlides(-1);
}
nextBtn.onclick=function(){
    plusSlides(1);
}