import './index.css';
import './media.css';
// import im from './images'
import MP from './MainPage';

// //TODO clean
// import test from './img/theatre_item3.png'
// import titleBlog from './img/blog.png'
// document.querySelector('.title-blog').src = titleBlog;
// const bgImage = document.querySelectorAll('.hidden-img');
// bgImage.forEach(item => {
//    item.src = test;
// });

const mainPage = new MP;

const imgObj = {
    theatre_item3: MP.check(document.querySelector('.theatre_item3')),
    bgBlog: MP.check(document.querySelector('.bgBlog')),
};

MP.closeModalWindow();
// mainPage.showAllImg(imgObj, im);


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

const sideNav = {
    init: function () {
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

    }
};
sideNav.init();

const bgItem = {
    init: function () {
        const blogItem = document.querySelectorAll('.blog-item');
        // const body = MP.check(document.querySelector('body'));

        blogItem.forEach(item => {

            item.addEventListener('click', function (e) {

                // body.setAttribute('class', 'fix-body');
                MP.removeChild(MP.check(document.querySelector('.inner-container')));
                const modalWindow = MP.check(document.querySelector('.modal-window'));
                const imgSrc = MP.check(this.querySelector('.hidden-img'));
                const title = MP.check(this.querySelector('.hidden-title'));
                const desc = MP.check(this.querySelector('.hidden-desc'));
                MP.checkNodeType(imgSrc, function () {
                    modalWindow.querySelector('.inner-container').appendChild(imgSrc.cloneNode(true))
                });
                MP.checkNodeType(title, function () {
                    modalWindow.querySelector('.inner-container').appendChild(title.cloneNode(true))
                });
                MP.checkNodeType(desc, function () {
                    modalWindow.querySelector('.inner-container').appendChild(desc.cloneNode(true))
                });


                modalWindow.style.display = 'block';
                modalWindow.style.opacity = '1';
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
            const forward = () => {
                if ((document.querySelectorAll(wrapPhoto)[(document.querySelectorAll(wrapPhoto).length - 1)].getClientRects()[0].x) - document.querySelectorAll(slickList)[0].clientWidth < -170) {
                    document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) + 200)}px, 0px, 0px)`;
                }
            };

            if (((document.querySelectorAll(wrapPhoto)[(document.querySelectorAll(wrapPhoto).length - 1)].getClientRects()[0].x) - document.querySelectorAll(slickList)[0].clientWidth) > -130) {
                document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
                setTimeout(forward, 400);
            } else {
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