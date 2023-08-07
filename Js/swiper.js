  //this will display depending on the screen
const swiper = new Swiper('swiper-container', {
  // Optional parameters 
  freeMode:true,
 SlidesPerView:2.75,
 direction:'horizontal',
 loop:true,
 spaceBetween:10,
 centeredSlides:true,
 autoplay:{
  delay: 2500,
 },
 effect:'fade',
 fadeEffect:{
  crossFade:true
 },
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  type:'bulletes',
 }
 
});
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});