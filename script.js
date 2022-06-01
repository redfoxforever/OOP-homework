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

// const burger = () => {

//     const headerBurger = document.querySelector('.header__burger')
//     const menuOpenBtn = document.querySelector('.burger-btn.open')
//     const menuCloseBtn = document.querySelector('.burger-btn.close')

//     menuOpenBtn.addEventListener('click', function () {
//         showMenu(headerBurger)
//     })

//     menuCloseBtn.addEventListener('click', function () {
//         hideMenu(headerBurger)
//     })

//     headerBurger.addEventListener('click', function (e) {
//         if (e.target == e.currentTarget) {
//             hideMenu(headerBurger) 
//         }
//     })

//     function showMenu(option) {
//         option.classList.toggle('active')
//     }

//     function hideMenu(option) {
//         option.classList.remove('active')
//     }
// }

// burger()


class BurgerMenu {
    constructor(option) {
        this.mainBurger = document.querySelector(option.el)
        this.burgerBtn = document.querySelector(option.burgerBtn)
        this.closeBtn = document.querySelector(option.closeBtn)
        this.burgerBtn.addEventListener('click', () => this.showMenu())
        this.closeBtn.addEventListener('click', () => this.hideMenu())
        this.mainBurger.addEventListener('click', (e) => {
            if (e.target == e.currentTarget) {
                this.hideMenu()
            }
        })
    }

    showMenu() {
        this.mainBurger.style.left = 0
        this.mainBurger.style.opacity = 1
        this.mainBurger.style.background = "rgba(0, 0, 0, 0.7)"
        // this.mainBurger.classList.add('active')
    }
    
    hideMenu() {
        this.mainBurger.style.left = "-100%"
        this.mainBurger.style.opacity = 0
        this.mainBurger.style.background = "none"
    }
}

const headerBurger = new BurgerMenu ({
    el: ".header__burger",
    burgerBtn: ".burger-btn.open",
    closeBtn: ".burger-btn.close"
})


// header burger end


// header content animation start 

// const headerContentAnim = () => {

//     const headerContent = document.querySelector('.header__content')

//     headerContent.addEventListener('mouseover', function () {
//         // headerContent.style.transform = `translate(${randomNum(headerContent.offsetLeft)}px, ${randomNum(headerContent.offsetLeft)}px)`
//         // console.log(randomNum(headerContent.offsetLeft));
//     })

//     function randomNum() {
//         return Math.floor(Math.random() * window.innerWidth) + 1
//     }
// }

// headerContentAnim()


class Moves {
    constructor(option) {
        this.move = document.querySelector(option.el)
        this.nav = document.querySelector(option.nav)
        this.move.addEventListener('mouseover', () => {
            this.move.style.marginLeft = this.myRandom(window.innerWidth - this.move.clientWidth) + "px"
            this.move.style.marginTop = this.myRandom(window.innerHeight - this.move.clientHeight - this.nav.clientHeight) + "px"
        })
    }

    myRandom(num) {
        return Math.floor(Math.random() * num + 1)
    }
}

const move = new Moves({
    el: ".header__content",
    nav: ".header__nav"
})

// header content animation end 


// header nav animation start

// const headerNavAnim = () => {

//     const headerNav = document.querySelector('.header__nav')

//     const headerNavTopSize = headerNav.offsetTop

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > headerNav.offsetTop) {
//             headerNav.classList.add('active')
//         } else if (window.scrollY < headerNavTopSize) {
//             headerNav.classList.remove('active')
//         }
//     })

// }

// headerNavAnim()

class Sticky {
    constructor(option) {
        this.nav = document.querySelector(option.el)
        this.nav.style.position = "fixed"
        this.nav.style.top = this.scrollCalc()

        window.addEventListener('scroll', () => this.scrollCalc())
    }

    scrollCalc() {
        if (window.innerHeight - this.nav.offsetHeight - window.scrollY > 0) {
            this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY + "px"
        } else {
            this.nav.style.top = 0
        }
    }
}

const headerNav = new Sticky({
    el: ".header__nav"
})

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