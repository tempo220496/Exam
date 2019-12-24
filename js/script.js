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


document.querySelector("#about").onclick=function(){
    var sidebar=document.querySelector(".right-bar");
    sidebar.classList.toggle('show')
    
}