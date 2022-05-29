const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");

menuBtn.addEventListener("click", function(){
    nav.classList.toggle("nav-show");
    menuBtn.classList.toggle("hide-element");
    closeBtn.classList.toggle("show-element");
})

closeBtn.addEventListener("click", function(){
    nav.classList.toggle("nav-show");
    menuBtn.classList.toggle("hide-element");
    closeBtn.classList.toggle("show-element");
})


// <!--Start of Tawk.to Script-->
//<script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/627f0f797b967b11798f4a19/1g3058to7';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
//</script>
// <!--End of Tawk.to Script-->


// scroll effect
window.addEventListener("scroll", function(){

    mbScrollActive();
    // mbScrollActiveMid();
})

let old_header= document.querySelector(".header-navigation");
let new_header = document.querySelector(".new-header-scroll");
function mbScrollActive()
{
    let position_scroll = window.scrollY>200;
    old_header.classList.toggle("new-header-scroll",position_scroll);
}
