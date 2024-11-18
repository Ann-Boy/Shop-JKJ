// JS Menu
function showmenu(){
    const nav_menu=document.querySelector('.nav_menu')
    nav_menu.style.display='flex'
}
function hidemenu(){
    const nav_menu=document.querySelector('.nav_menu')
    nav_menu.style.display='none'
}


// JS header_img
var myIndex = 0;
    carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); // Change image every 2 seconds(2500=2.5s)
}