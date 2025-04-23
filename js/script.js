const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eo249od';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});


document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      autoplay: { delay: 3000 },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", clickable: true }
  });
});
function toggleMenu() {
  document.querySelector(".nav__menu--mobile").classList.toggle("active");
 
}



