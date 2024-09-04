const nav = document.querySelector('nav');
let sticky = nav.offsetTop;
console.log(sticky);

window.addEventListener('scroll', function() {
  if (window.scrollY > sticky) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }
  console.log(sticky, window.scrollY);
});
document.addEventListener('resize', ()=>{sticky = nav.offsetTop;});