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

const openNav = () => {
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

            item.addEventListener('mouseleave', () => {
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
        const slickNextG = document.querySelector('.next-g');
        const slickPrevG = document.querySelector('.prev-g');

        const pullBack = (slickTrack, wrapPhoto, slickList) => {
            const posX = document.querySelectorAll(slickTrack)[0].style.transform;
            if (((document.querySelectorAll(wrapPhoto)[(document.querySelectorAll(wrapPhoto).length - 1)].getClientRects()[0].x) - document.querySelectorAll(slickList)[0].clientWidth) > -130) {
                document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
            } else if (((document.querySelectorAll(wrapPhoto)[(document.querySelectorAll(wrapPhoto).length - 1)].getClientRects()[0].x) - document.querySelectorAll(slickList)[0].clientWidth) < 200) {
                document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
            }
        };

        const pullForward = (slickTrack) => {
            const posX = document.querySelectorAll(slickTrack)[0].style.transform;
            const back = () => {
                if (Number(String(document.querySelectorAll(slickTrack)[0].style.transform).slice(12, -13)) > 190) {
                    document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
                }
            };
            if (Number(String(posX).slice(12, -13)) < 200) {
                document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
                setTimeout(back, 400);
            } else {
                document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
            }
        };


        slickPrev.addEventListener('click', () => {
            pullBack('.slick-track', '.wrap-photo', '.slick-list');
        });

        slickNext.addEventListener('click', () => {
            pullForward('.slick-track');
        });

        slickPrevG.addEventListener('click', () => {
            pullBack('.slick-track-g', '.col-gallery', '.gallery .slider-responsive');
        });

        slickNextG.addEventListener('click', () => {
            pullForward('.slick-track-g');
        });
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
            for (let i = 0; i < span.length; i++) {
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