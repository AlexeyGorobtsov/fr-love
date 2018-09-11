class MainPage {
    constructor() {
        this.images = {};
    }

    getSrcImg(value, img) {
        if (value && img) {
            value.src = img
        }
    }

    static check(value) {
        return value ? value : [];
    };

    static closeModalWindow() {
        const closeW = document.querySelectorAll('.closeW');

        closeW.forEach(item => {
            item.addEventListener('click', e => {
                // body.classList.remove('fix-body');
                const myPromise = new Promise(resolve => {
                    setTimeout(function () {
                        e.target.closest('.modal-window').style.opacity = '0';
                        resolve(e.target);
                    }, 250);
                });
                myPromise.then((target) => {
                    setTimeout(function () {
                        target.closest('.modal-window').style.display = 'none';
                    }, 1000);
                });
            })
        })

    }

    showAllImg(imgObj, images) {
        for (let img in imgObj) {
            this.getSrcImg(imgObj[img], images[img]);
        }
    }

    static checkNodeType(value, func) {
        if (value.nodeType === 1) {
            func();
        }
    }

    static removeChild(value) {
        while (value.firstChild) {
            value.removeChild(value.firstChild);
        }
    }

    static showOneSelectorImg(selector, im) {
        selector.forEach(item => {
            item.src = im;
        })
    }
}

export default MainPage;
