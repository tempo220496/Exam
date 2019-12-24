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


document.querySelector("#more").onclick=function(){
    var sidebar=document.querySelector(".right-bar");
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
	var nav=document.querySelector('.nav');
	var close=document.querySelector(".nav-close");
hamburger.addEventListener('click',function(){
	hamburger.classList.toggle('is-active');
	nav.classList.add('is-active');
});
close.addEventListener('click',function(){
	hamburger.classList.toggle('is-active');
	nav.classList.remove('is-active');
});