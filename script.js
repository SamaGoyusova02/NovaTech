function OpenMenu(){
const MobilMenubar = document.getElementById('MobilMenubar')
const mark = document.getElementById('mark')
    if(MobilMenubar.style.height == ''){
        MobilMenubar.style.height = '350px'
        MobilMenubar.style.transition = '.5s ease-in-out'
      mark.classList.replace('fa-bars-staggered', 'fa-xmark');
    }
    else{
         MobilMenubar.style.height = ''
        MobilMenubar.style.transition = '.5s ease-in-out'
        mark.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
}