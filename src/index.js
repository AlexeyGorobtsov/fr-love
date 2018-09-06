import './index.css';
import './media.css';

const photo = document.querySelectorAll('.wrap-photo .photo');
photo.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('up');
        item.nextElementSibling.classList.add('description-block')
    });

    item.addEventListener('mouseleave', () => {
       item.classList.remove('up');
        item.nextElementSibling.classList.remove('description-block')
    });
});

const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.closebtn');

const  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};

menu.addEventListener('click', () => {
    openNav();
});

closeBtn.addEventListener('click', () => {
   closeNav();
});

const slid = {
  init: function () {
      const slickNext = document.querySelector('.slick-next');
      const slickPrev = document.querySelector('.slick-prev');
      slickPrev.addEventListener('click', () => {
          const posX = document.querySelectorAll('.slick-track')[0].style.transform;
          if (Number(String(posX).slice(12, -13)) !== -1200) {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
          }
      });

      slickNext.addEventListener('click', () => {

          const posX = document.querySelectorAll('.slick-track')[0].style.transform;
          if (Number(String(posX).slice(12, -13)) !== 0) {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
          }
      })
  }
};
slid.init();