import './index.css';
import './media.css';
import './lightbox.css'
//import im from './images'
import MP from './MainPage';

// //TODO clean
// import test from './img/theatre_item3.png'
// import titleBlog from './img/blog.png'
//
// document.querySelector('.title-blog').src = titleBlog;
// const bgImage = document.querySelectorAll('.hidden-img');
// bgImage.forEach(item => {
//     item.src = test;
// });

const mainPage = new MP;

// const imgObj = {
//     theatre_item3: MP.check(document.querySelector('.theatre_item3')),
//     bgBlog: MP.check(document.querySelector('.bgBlog')),
//     // photo_v1: MP.check(document.querySelector('.photo_v1')),
//     // photo_v2: MP.check(document.querySelector('.photo_v2')),
//     // photo_v3: MP.check(document.querySelector('.photo_v3')),
//     // photo_v4: MP.check(document.querySelector('.photo_v4')),
// };

MP.closeModalWindow();
// mainPage.showAllImg(imgObj, im);
// MP.showOneSelectorImg(document.querySelectorAll('.img_lights'), im.img_lights);
// MP.showOneSelectorImg(document.querySelectorAll('.img_mountains'), im.img_mountains);
// MP.showOneSelectorImg(document.querySelectorAll('.img_nature'), im.img_nature);
// MP.showOneSelectorImg(document.querySelectorAll('.img_snow'), im.img_snow);
// MP.showOneSelectorImg(document.querySelectorAll('.photo_v1'), im.photo_v1);
// MP.showOneSelectorImg(document.querySelectorAll('.photo_v2'), im.photo_v2);
// MP.showOneSelectorImg(document.querySelectorAll('.photo_v3'), im.photo_v3);
// MP.showOneSelectorImg(document.querySelectorAll('.photo_v4'), im.photo_v4);


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


const sideNav = {
    init: function () {

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
                const myPromise = new Promise(resolve => {
                    setTimeout(() => {
                        document.querySelectorAll(slickTrack)[0].style.transform = `translate3d(${(Number(String(posX).slice(12, -13)) - 200)}px, 0px, 0px)`;
                        resolve(document.querySelectorAll(slickTrack)[0].style.transform);
                    }, 200)
                });
                myPromise.then(() => {
                    setTimeout(forward, 400);
                });

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

const lightBox = {
    init: function () {
        const openModal = document.querySelectorAll('.photo img');

        const closeModal = document.querySelectorAll('.close-lightbox');
        closeModal.forEach(item => {
            item.addEventListener('click', () => {
                MP.check(document.getElementById('myModal')).style.display = 'none';
            })
        });

        let slideIndex = 1;

        const showSlides = (n) => {
            const slides = document.querySelectorAll('.mySlides');
            const dots = document.querySelectorAll('.demo');
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach(item => item.style.display = 'none');

            dots.forEach(item => {
                item.className = item.className.replace(' active', '');
            });

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].className += ' active';

        };

        const plusSlides = n => showSlides(slideIndex += n);

        showSlides(slideIndex);

        const currentSlide = n => showSlides(slideIndex = n);


        for (let i = 0; i < openModal.length; i++) {
            openModal[i].addEventListener('click', () => {
                document.getElementById('myModal').style.display = 'block';
                currentSlide(1 + i);
            })
        }

        const innerImg = MP.check(document.querySelectorAll('.wrap-inner-img .inner-img img'));
        for (let z = 0; z < innerImg.length; z++) {
            innerImg[z].addEventListener('click', () => {
                currentSlide(1 + z);
            })
        }

        const next = MP.check(document.querySelector('.prev-lb'));
        next.addEventListener('click', () => {
            plusSlides(-1);
        });

        const prev = MP.check(document.querySelector('.next-lb'));
        prev.addEventListener('click', () => {
            plusSlides(1)
        })
    }
};

lightBox.init();