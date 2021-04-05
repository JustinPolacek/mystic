 menu = document.getElementById("bar");
 var  item = document.getElementById("item");

 item.style.right = '-300px';
 menu.onclick = function () {

 if( item.style.right == '-300px'){
     item.style.right = '0'

 }

 else{
     item.style.right = '-300px';
 }

}



let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() =>{
        logoSpan.forEach((span,idx) =>{
            setTimeout(() =>{
              span.classList.add('active')

            }, (idx + 1) *400)

        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(() =>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 50)
            })
        },2000);

        setTimeout(() =>{
            intro.style.top = '-100vh'
        }, 2300)
    })

})



const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
nav.classList.toggle("nav-open");
burger.classList.toggle("toggle");
                                   });

 links.forEach(link => {
 link.addEventListener("click", () => {
 nav.classList.toggle("nav-open");
 burger.classList.toggle("toggle");
                                     });
                                       });

