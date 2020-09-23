$(function () {
    let tab = document.getElementsByClassName('menu__link'),
        tabContent = document.getElementsByClassName('tabcontent'),
        info = document.getElementsByClassName('menu')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(0);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className == 'menu__link') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
    const menu = document.querySelector(".menu");

    menu.addEventListener("mouseover", (e) => hoverMenu(e.target, true));
    menu.addEventListener("mouseout", (e) => hoverMenu(e.target, false));

    function hoverMenu(target, isIn = true) {
        if (!target.classList.contains("menu__link")) {return;}

        const liEl = target.closest(".menu__item");
        if (!liEl) return;

        const bgEl = liEl.querySelector(".menu__bg");
        if (!bgEl) return;

        const tx = isIn ? "-16px" : "calc(-100% - 32px)";
        bgEl.style.transform = `translateX(${tx})`;

        const br = isIn ? 21 : 0;

        const topSibling = liEl.previousElementSibling;
        if (topSibling) {
            topSibling.style.borderBottomLeftRadius = br + "px";
        }

        const bottomSibling = liEl.nextElementSibling;
        if (bottomSibling) {
            bottomSibling.style.borderTopLeftRadius = br + "px";
        }

        liEl.style.borderTopLeftRadius = br + "px";
        liEl.style.borderBottomLeftRadius = br + "px";
    }



    
    const popUp = document.querySelector('.popup'),
          popUp1 = document.querySelector('.popup-1'),// querySelectorAll было бы лучше
          popUp2 = document.querySelector('.popup-2'),
          popUp3 = document.querySelector('.popup-3'),
          popUp4 = document.querySelector('.popup-4'),
          popUp5 = document.querySelector('.popup-5'),
          popupText = document.querySelector('.popup__text'),
          popupGarbage = document.querySelector('.popup__garbage'),// querySelectorAll было бы лучше и код короче
          popupGarbage1 = document.querySelector('.popup__garbage-1'),
          popupGarbage2 = document.querySelector('.popup__garbage-2'),
          popupGarbage3 = document.querySelector('.popup__garbage-3'),
          popupGarbage4 = document.querySelector('.popup__garbage-4'),
          popupGarbage5 = document.querySelector('.popup__garbage-5'),
          checkInput = document.querySelector('.check__box'),
          checkInput1 = document.querySelector('.check__box-1'),
          checkInput2 = document.querySelector('.check__box-2'),
          checkInput3 = document.querySelector('.check__box-3'),
          checkInput4 = document.querySelector('.check__box-4'),
          checkInput5 = document.querySelector('.check__box-5'),
          individChsePole = document.querySelector('.individual__choose-pole');
          
    // вообще хотел использовать [псевдомассив] для корзины каждого элемента но изза того как разметку сделал сделаю так
    // добавлять по клику попап в массив и в поле выбора --> потом при клике на корзину удалять элемент из массива
    checkInput.addEventListener('click', function () {
        popUp.style.display = 'block';
        let popUP = individChsePole.appendChild(popUp);
    });

    popupGarbage.addEventListener('click', () => {
        popUp.style.display = 'none';
    });

    checkInput1.addEventListener('click', function () {
        popUp1.style.display = 'block';
        let popUP1 = individChsePole.appendChild(popUp1);
    });

    popupGarbage1.addEventListener('click', () => {
        popUp1.style.display = 'none';
    });

    checkInput2.addEventListener('click', function () {
        popUp2.style.display = 'block';
        let popUP2 = individChsePole.appendChild(popUp2);
    });

    popupGarbage2.addEventListener('click', () => {
        popUp2.style.display = 'none';
    });

    checkInput3.addEventListener('click', function () {
        popUp3.style.display = 'block';
        let popUP3 = individChsePole.appendChild(popUp3);
    });

    popupGarbage3.addEventListener('click', () => {
        popUp3.style.display = 'none';
    });

    checkInput4.addEventListener('click', function () {
        popUp4.style.display = 'block';
        let popUP4 = individChsePole.appendChild(popUp4);
    });

    popupGarbage4.addEventListener('click', () => {
        popUp4.style.display = 'none';
    });

    checkInput5.addEventListener('click', function () {
        popUp5.style.display = 'block';
        let popUP5 = individChsePole.appendChild(popUp5);
    });

    popupGarbage5.addEventListener('click', () => {
        popUp5.style.display = 'none';
    });
    
    

});
