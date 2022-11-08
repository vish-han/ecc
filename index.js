console.log("hogyi link")
let burger=document.getElementsByClassName("hamburger")[0];

let bgnav=document.getElementsByClassName("bgnav")[0];
let close=document.getElementsByClassName("close")[0];

let section2=document.getElementsByClassName("section2")[0];



burger.addEventListener('click',function(){
    bgnav.classList.add('naveffects');
bgnav.style.display=`block`;
burger.style.display=`none`;
close.style.display=`block`;
section2.style.top=`100px`;
// section2.style.opacity=`1`;
})

close.addEventListener('click',function(){
    bgnav.style.display=`none`;
    console.log('ckick kia')
    burger.style.display=`block`;
    close.style.display=`none`;
    section2.style.top=`26px`;
    // section2.style.opacity=`0.9`;
})

let elm=document.querySelectorAll(".main");
let inw;
Array.from(elm).forEach((elmnt)=>{
    elmnt.addEventListener('mouseenter',function(){
        // elmnt.style.width=`400px`;
let ig=elmnt.firstElementChild;
inw=ig.style.width;
ig.style.width=`310px`;
    })
    elmnt.addEventListener('mouseout',function(){
        // elmnt.style.width=`294px`;
        let ig=elmnt.firstElementChild;
ig.style.width=inw;
    })
})

let newbtn=document.getElementsByClassName("newbtn")[0];
newbtn.addEventListener('mouseenter',function(){
    newbtn.style.backgroundColor=`#f02d34`;
    newbtn.style.color=`white`;
    newbtn.style.border=`2px solid white`;
})
newbtn.addEventListener('mouseout',function(){
    newbtn.style.backgroundColor=`white`;
    newbtn.style.color=`#f02d34`;
})

let lap=document.getElementsByClassName("lap")[0];
lap.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/link.html"
})

let a=document.getElementsByClassName("zero0")[0];
a.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/zero0.html"
})
let b=document.getElementsByClassName("one1")[0];
b.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/one1.html";
})
let c=document.getElementsByClassName("three3")[0];
c.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/three3.html"
})
let d=document.getElementsByClassName("oneone")[0];
d.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/oneone.html"
})
let e=document.getElementsByClassName("twotwo")[0];
e.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/twotwo.html"
})
let f=document.getElementsByClassName("threethree")[0];
f.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/threethree.html"
})
let g=document.getElementsByClassName("fourfour")[0];
g.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/fourfour.html"
})
let h=document.getElementsByClassName("onev")[0];
h.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/fivefive.html"
})
let i=document.getElementsByClassName("twov")[0];
i.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/sixsix.html"
})
let j=document.getElementsByClassName("threev")[0];
j.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/sevenseven.html"
})
let k=document.getElementsByClassName("fourv")[0];
k.addEventListener("click",function(){
    location.href="http://127.0.0.1:5500/eighteight.html"
})

