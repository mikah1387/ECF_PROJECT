let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let header = document.querySelector('header');
let lis = document.querySelectorAll('.nav-bar li');
let Lastscrolltop = 0;

// ****animation burger *** 
burger.addEventListener('click', function(){

    this.classList.toggle('active')
    nav.classList.toggle('open')
})

// **** animation menu ecran mobile et tablette ****
lis.forEach(li => {

    li.addEventListener('click',function(){

        burger.classList.remove('active')
        nav.classList.remove('open')
    })
    
});

// ****** apparition du menu en scroll negative ***
window.addEventListener('scroll',function(){
 
    let scrolltop = window.pageYOffset || document.documentElement.scrollTop ;
    if(scrolltop === 0){
        header.style.backgroundColor = "transparent"
   

    }
    else{

        if (scrolltop > Lastscrolltop){

       
            header.style.top = "-65px";
           
        } else  {
            header.style.position= "fixed";
            header.style.top= "0";
            header.style.left= "0";
            header.style.backgroundColor = "rgb(53 52 52 / 87%)"
        
        }
        Lastscrolltop = scrolltop;
    }
   

})

// ****** animation text section home ****
gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
    rotateY:360,
 
     
    duration:8,
    ease: "power2.out",
    repeat:-1,

   
   

  });

gsap.from(".home_p1,.home h2", {
    opacity: 0, 
    y: -300, 
    duration: 2
  });

  gsap.from(".home .home_p2", {
    opacity: 0, 
    y: 300, 
    duration: 2,
  });

  gsap.from(".home .btn_reserve", {
    // opacity:0,
    x:-2000,
    duration: 2.5,
    ease: "power2.out",
    delay:1.5,
   

  });
  gsap.from(".home .btn_explore", {
    opacity:0,
    x:2000,
    duration:2.5,
    ease: "power2.out",
    delay:1.5

  });

// **********animation section intro ******
  gsap.from(".intro .text", {
      scrollTrigger:{
      trigger:".intro .text",
      toggleActions : "restart none none none",
      start: "center bottom",
      
      },
    opacity:0,
    y:200,
    duration:1,
    // ease: "power2.out",
    

  });
  gsap.from(".intro .images_parent", {
    scrollTrigger:{
    trigger:".intro .images_parent",
    toggleActions : "restart none none none",
    start: "bottom bottom",



    },
  opacity:0,
  x:200,
  duration:1,
  // ease: "power2.out",
  

});

gsap.from(".menu .menu1", {
    scrollTrigger:{
    trigger:".menu .menu1",
    toggleActions : "play none none none",
      start: "bottom bottom",
    //   end:"400px top",
      
    },
  opacity:0,
  
  duration:3,
  
  // ease: "power2.out",
  
});

// ************* animation
gsap.from(".menu .menu2", {
    scrollTrigger:{
    trigger:".menu .menu2",
    toggleActions : "play none none none",
    start: "bottom bottom",
    

    },
  opacity:0,
  
  duration:3,
  
  // ease: "power2.out",
  
});
// *************animation 
gsap.from(".menu .menu3", {
    scrollTrigger:{
    trigger:".menu .menu3",
    toggleActions : "play none none none",
    start: "bottom bottom",
    },
  opacity:0,
  
  duration:2,
  
  // ease: "power2.out",
  

});

// ************ animation
gsap.from(".menu .menu4", {
    scrollTrigger:{
    trigger:".menu .menu4",
    toggleActions : "play none none none",
      start: "bottom bottom",
    //   end:"400px top",
      
    },
  opacity:0,
  
  duration:2,
  
  // ease: "power2.out",
  
});

// ************* animation******
gsap.from(".menu .menu5", {
    scrollTrigger:{
    trigger:".menu .menu5",
    toggleActions : "play none none none",
    start: "bottom bottom",
  

    },
  opacity:0,
  
  duration:3,
  
  // ease: "power2.out",
  
});
// *************animation 
gsap.from(".menu .menu6", {
    scrollTrigger:{
    trigger:".menu .menu6",
    toggleActions : "play none none none",
    start: "bottom bottom",
    },
  opacity:0,
  
  duration:2,
});

gsap.from(".banniere3 .p1", {
    scrollTrigger:{
    trigger:".banniere3 .p1",
    toggleActions : "play none none none",
    start: "400 bottom",
   
    },
  opacity:0,
  y:-300,
  duration:2,

});
gsap.from(".banniere3 h2", {
    scrollTrigger:{
    trigger:".banniere3 h2",
    toggleActions : "play none none none",
    start: "-300 bottom",

    },
  opacity:0,
  y:300,
  duration:2,


});

let p1footer = document.querySelector('.footer .p1');
let mySplitText = new SplitText(p1footer);




