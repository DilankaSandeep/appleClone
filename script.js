
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 15,
    speed:1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        

      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
  });
  
  

const swippercaptionElem1= document.querySelector(`#cap1`);
const swiperElem1= document.querySelector('#swiper1');
const swippercaptionElem2= document.querySelector('#cap2');
const swiperElem2= document.querySelector('#swiper2');
const swippercaptionElem3= document.querySelector('#cap3');
const swiperElem3= document.querySelector('#swiper3');
const swippercaptionElem4= document.querySelector('#cap4');
const swiperElem4= document.querySelector('#swiper4');
const swippercaptionElem5= document.querySelector('#cap5');
const swiperElem5= document.querySelector('#swiper5');
const swippercaptionElem6= document.querySelector('#cap6');
const swiperElem6= document.querySelector('#swiper6');
const swippercaptionElem7= document.querySelector('#cap7');
const swiperElem7= document.querySelector('#swiper7');
const swippercaptionElem8= document.querySelector('#cap8');
const swiperElem8= document.querySelector('#swiper8');
const swippercaptionElem9= document.querySelector('#cap9');
const swiperElem9= document.querySelector('#swiper9');
const swippercaptionElem10= document.querySelector('#cap10');
const swiperElem10= document.querySelector('#swiper10');
const swiperElemarray= [swiperElem1,swiperElem2,swiperElem3,swiperElem4,swiperElem5,swiperElem6,swiperElem7,swiperElem8,swiperElem9,swiperElem10];
const swiperCaptionElemArray=[swippercaptionElem1,swippercaptionElem2,swippercaptionElem3,swippercaptionElem4,swippercaptionElem5,swippercaptionElem6,swippercaptionElem7,swippercaptionElem8,swippercaptionElem9,swippercaptionElem10];

for (let index = 0; index < swiperCaptionElemArray.length; index++) {
  swiperElemarray[index].addEventListener('mouseover',(e)=>{
    swiperCaptionElemArray[index].style.opacity='1';
    swiperCaptionElemArray[index].style.transform = 'translateY(0px)';
  });
  swiperElemarray[index].addEventListener('mouseleave',(e)=>{
    swiperCaptionElemArray[index].style.opacity='0';
    swiperCaptionElemArray[index].style.transform = 'translateY(50px)';
  })
  
}

const navlinkElems = document.querySelectorAll('.nav-sublink-ul li');
navlinkElems.forEach((e)=>{
  e.addEventListener('mouseenter',()=>{
    e.style.color= 'white';


  });
  e.addEventListener('mouseleave',()=>{
    e.style.color= 'rgba(255, 255, 255, 0.884)';

  });
});

const reorderIconDiv = document.querySelector('#headeritem-reorder');
const reorderSetElm =document.querySelector('#reorderSet');



reorderIconDiv.addEventListener('click',()=>{
 
   reorderSetElm.style.display='flex';

});
reorderSetElm.querySelector('#reoerderset-ul>li').addEventListener('click',()=>{

  reorderSetElm.style.display='none';
})

const plussignElems= document.querySelectorAll('.footer-nav-titles #plusitems');
plussignElems.forEach((elm)=>{
    elm.addEventListener('click',(e)=>{
      if(e.target.innerText === '+'){
        elm.innerHTML=`<ion-icon name="close-outline"></ion-icon>`;
        elm.closest('ul').querySelectorAll('.footer-nav-lis').forEach((liElem)=>{
            liElem.style.display='flex';
        })
      }else{
        elm.innerHTML='+';
        elm.closest('ul').querySelectorAll('.footer-nav-lis').forEach((liElem)=>{
          liElem.style.display='none';
      })
      }
      

    
    });
})









