// nav fixed start
let main_menu=document.querySelector('.main_menu');
window.addEventListener('scroll',()=>{
    let scrooling = this.scrollY;
    if(scrooling > 150){
        main_menu.classList.add('fixed_nav');
    }
    else{
        main_menu.classList.remove('fixed_nav');
    }
})
// nav bar icon chang
let changIcon=function(icon){
    icon.classList.toggle('fa-xmark')
}