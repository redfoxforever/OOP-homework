// // const car = {
// //     name: "Car",
// //     ageAuto: 2,
// //     automaticBox: true
// // }

// // console.log(car);

// class Car {

//     static type = "Universal"

//     constructor(obj) {
//         this.name = obj.name
//         this.ageAuto = obj.ageAuto
//         this.automaticBox = obj.automaticBox
//     }

//     speed() {
//         console.log("Vashe tez");
//     }

//     get ageInfo() {
//         return this.ageAuto + 5
//     }

//     set ageInfo(newAge) {
//         return this.ageAuto = newAge
//     }

// }

// const car2 = new Car({
//     name: "Car",
//     ageAuto: 2,
//     automaticBox: true
// })

// console.log(car2);

// class BMW extends Car {
//     static type = "Sedan"

//     constructor(opt) {
//         super(opt)
//         this.name = opt.name
//         this.ageAuto = opt.ageAuto
//         this.automaticBox = opt.automaticBox
//         this.color = opt.color
//     }

//     speed() {
//         super.speed()
//         console.log("360 kmh");
//     }
// }

// const bmw = new BMW({
//     name: "BMW",
//     ageAuto: 1,
//     automaticBox: true,
//     color: "Green"
// })

// console.log(bmw);

// class Matiz extends BMW {
//     constructor(set) {
//         super(set)
//         this.name = set.name
//         this.ageAuto = set.ageAuto
//         this.automaticBox = set.automaticBox
//         this.color = set.color
//         this.price = set.price
//     }
// }

// const matiz = new Matiz({
//     name: "Matiz",
//     ageAuto: 20,
//     automaticBox: false,
//     color: "White",
//     price: "3 000 $"
// })

// console.log(matiz);

class Typing {

    constructor(obj) {
        this.el = document.querySelector(obj.el)
        this.txt = this.el.innerHTML
        this.el.innerHTML = ""
        this.str()
    }

    str(x = 0) {
        this.el.innerHTML += this.txt[x]
        x++
        
        if (x < this.txt.length) {
            setTimeout(() => {
                this.str(x)
            }, 150);
        }
    }

}

const txt = new Typing({
    el: ".header__content h1"
})

const main = document.querySelector('.main')

window.addEventListener('scroll', function infoTitleAnim() {
    if (window.scrollY >= (main.offsetTop / 2)) {
        const txt2 = new Typing({
            el: ".info__scroll-title"
        })
        this.removeEventListener("scroll", infoTitleAnim)
    }
})



// header burger start

const burger = () => {

    const headerBurger = document.querySelector('.header__burger')
    const menuOpenBtn = document.querySelector('.burger-btn.open')
    const menuCloseBtn = document.querySelector('.burger-btn.close')

    menuOpenBtn.addEventListener('click', function () {
        showMenu(headerBurger)
    })

    menuCloseBtn.addEventListener('click', function () {
        hideMenu(headerBurger)
    })

    headerBurger.addEventListener('click', function (e) {
        if (e.target == e.currentTarget) {
            hideMenu(headerBurger) 
        }
    })

    function showMenu(option) {
        option.classList.toggle('active')
    }

    function hideMenu(option) {
        option.classList.remove('active')
    }
}

burger()

// class BurgerMenu {
//     constructor(burger) {
//         this.mainburger = document.querySelector(burger.mainburger)
//         this.burgerBtn = document.querySelector(burger.burgerBtn)
//         this.showMenu()
//     }

//     showMenu() {
//         this.burgerBtn.addEventListener('click', function () {
//             this.mainburger.toggle('active')        
//         })
//     }
// }

// const headerBurger = new BurgerMenu({
//     mainburger: ".header__burger",
//     burgerBtn: ".menu-open-btn"
// })


// header burger end


// header content animation start 

const headerContentAnim = () => {

    const headerContent = document.querySelector('.header__content')

    headerContent.addEventListener('mouseover', function () {
        // headerContent.style.transform = `translate(${randomNum(headerContent.offsetLeft)}px, ${randomNum(headerContent.offsetLeft)}px)`
        // console.log(randomNum(headerContent.offsetLeft));
    })

    function randomNum(option) {
        return Math.floor((window.innerWidth - option) * Math.random())
    }
}

headerContentAnim()

// header content animation end 


// header nav animation start

const headerNavAnim = () => {

    const headerNav = document.querySelector('.header__nav')

    const headerNavTopSize = headerNav.offsetTop

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerNav.offsetTop) {
            headerNav.classList.add('active')
        } else if (window.scrollY < headerNavTopSize) {
            headerNav.classList.remove('active')
        }
    })

}

headerNavAnim()

// header nav animation end


// logo reload page start

const logoReload = () => {

    const logo = document.querySelector('.header__logo')

    logo.addEventListener('click', () => {
        location.reload()
    })

}

logoReload()

// logo reload page end