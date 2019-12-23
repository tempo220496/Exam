document.addEventListener("DOMContentLoaded",function(){
    let node = document.querySelector('.preloa-transitions');
    node.classList.remove('preloa-transitions');
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
  var hamburger=document.querySelector('.hamburger');
  var nav=document.querySelector('.nav');
  var close=document.querySelector(".nav-close");
//   hamburger.addEventListener('click',function(){
//       hamburger.classList.toggle('is-active');
//       nav.classList.add('is-active');
//   });
//   close.addEventListener('click',function(){
//       hamburger.classList.toggle('is-active');
//       nav.classList.remove('is-active');
//   });
  // window.addEventListener('scroll', event=>{
  // 	let scrollTop=document.documentElement.scrollTop
  // 	let scrollHeight=document.documentElement.scrollHeight-
  // 	document.documentElement.clientHeight;
  // 	let progress=100*scrollTop/scrollHeight;
  // 	document.querySelector('.progress').style.width=progress+"%";
  // });

var myModal=document.querySelector(".myModal");
myModal.style.display='none';


var roundedLink=document.querySelector(".rounded-link");
roundedLink.addEventListener('click',function(event){
    event.preventDefault();
    myModal.style.display="block";
});
var myModalLink=document.querySelector(".myModal-link");
myModalLink.onclick=function(event){
    event.preventDefault();
    myModal.style.display='none';
}