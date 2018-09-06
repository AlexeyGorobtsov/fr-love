import './index.css';
import './media.css';
import im from './img/bg_blog.png'

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

const bgItem = {
    init: function () {
        const blogItem = document.querySelectorAll('.blog-item');
        blogItem.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.color = '#fff';
                item.style.background = `url(${im}) no-repeat`;
            });

            item.addEventListener('mouseleave', ()=> {
                item.style.color = '#000';
                item.style.background = 'transparent';
            })
        })
    }
};

bgItem.init();


const slid = {
  init: function () {
      const slickNext = document.querySelector('.slick-next');
      const slickPrev = document.querySelector('.slick-prev');
      const photoWidth = document.querySelectorAll('.wrap-photo .photo')[0].clientWidth;



      slickPrev.addEventListener('click', () => {
          const posX = document.querySelectorAll('.slick-track')[0].style.transform;
          if ((document.querySelectorAll('.wrap-photo')[(document.querySelectorAll('.wrap-photo').length -1)].getClientRects()[0].x) > document.querySelectorAll('.slick-list')[0].clientWidth) {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
          } else if(((document.querySelectorAll('.wrap-photo')[(document.querySelectorAll('.wrap-photo').length -1)].getClientRects()[0].x) - document.querySelectorAll('.slick-list')[0].clientWidth) < 200) {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
          }
      });

      slickNext.addEventListener('click', () => {

          const posX = document.querySelectorAll('.slick-track')[0].style.transform;
          const back = () => {
              if (Number(String(document.querySelectorAll('.slick-track')[0].style.transform).slice(12, -13)) > 190) {
                  document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
                  console.log('test2')
              }
          };
          if (Number(String(posX).slice(12, -13)) < 200) {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
              setTimeout(back, 400);
          } else {
              document.querySelectorAll('.slick-track')[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
          }
      })
  }
};
slid.init();

const tabs = {
    init: function () {
        const span = document.querySelectorAll('.films-date span');
        const tabs = document.querySelectorAll('.wrap-tabs');
        const cleanActive = () => {
            span.forEach(item => {
                item.classList.remove('active');
            })
        };
        const cleanTabs = () => {
            tabs.forEach(item => {
                item.style.display = 'none';
            })
        };
        const showTabs = () => {
            for (let i = 0; i <span.length; i++ ) {
                span[i].classList;
                if (span[i].classList.value === 'active') {
                    tabs[i].style.display = 'block';
                }
            }
        };
        span.forEach(item => {
            item.addEventListener('click', e => {
                cleanActive();
                cleanTabs();
                e.target.classList.add('active');
                showTabs();


            });
        })
    }
};

tabs.init();