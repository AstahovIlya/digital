const swiper = new Swiper('.home', {
   direction: 'horizontal',
   pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      dynamicBullets: 'true',
      dynamicMainBullets: 3,
      renderBullet: function (index, className) {
         if (index < 9) {
            return '<span class="' + className + '">' + `0` + (index + 1) + '</span>';
         } else {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
         }
      }
   },
});


const links = document.querySelectorAll(".benefit__link");

for (let link of links) {
   link.addEventListener("mouseover", function () {
      let parent = this.parentNode;
      let icon = parent.querySelector(".benefit__icon");
      icon.classList.add("_link-active")
   })
}

for (let link of links) {
   link.addEventListener("mouseout", function () {
      let parent = this.parentNode;
      let icon = parent.querySelector(".benefit__icon");
      icon.classList.remove("_link-active")
   })
}

const swiperReviews = new Swiper('.reviews__slider', {
   direction: 'horizontal',
   loop: true,
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
   },
});