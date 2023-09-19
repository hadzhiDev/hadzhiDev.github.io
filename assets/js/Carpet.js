let cardsBtns = document.querySelectorAll('.card_btn')
let xBtns = document.querySelectorAll('.xClose')

cardsBtns.forEach(item => {
    item.addEventListener('click', e => {
        e.target.closest('.card_inner').classList.toggle('hidden')
        e.target.closest('.card').children[1].classList.toggle('hidden')
    })
})

xBtns.forEach(item => {
    item.addEventListener('click', e => {
        e.target.closest('.more').classList.toggle('hidden')
        e.target.closest('.card').children[0].classList.toggle('hidden')
    })
})

function navToggle() {
    document.querySelector('#navBars').classList.toggle('hidden')
    document.querySelector('#navX').classList.toggle('hidden')
    document.querySelector('#navBar').classList.toggle('active')
    document.querySelector('nav').classList.toggle('poFixed')
    document.querySelector('#frame').classList.toggle('active')
}


// let videoPlay = document.querySelector('.videoPlay')
// let theVideo = document.querySelector('.theVideo')

// function playVideo(url) {
//     const video = new Video(url)
//     video.play()
//     theVideo.addEventListener('click', e => {
//         video.pause()
//     })
// }

// videoPlay.addEventListener('click', e => {
//     e.target.classList.add('hidden')
//     playVideo('../video')
// })

let staffPrevBtn = document.querySelector('#staffPrevBtn')
let staffNextBtn = document.querySelector('#staffNextBtn')
let staff = document.querySelectorAll('.staff')

let orderPrevBtn = document.querySelector('#orderPrevBtn')
let orderNextBtn = document.querySelector('#orderNextBtn')
let order = document.querySelectorAll('.order')

function prevBtn(orgue) {
    ex: for (let item of orgue) {
        if (item.classList[1] == null) {
            if (item.previousElementSibling == null) {
                break ex
            } else if (item.previousElementSibling.classList[1] == 'max-sm:hidden') {
                item.classList.add('max-sm:hidden')
                item.previousElementSibling.classList.remove('max-sm:hidden')
                break ex
            }
        }
    }
}

function nextBtn(orgue) {
    ex2: for (let item of orgue) {
        if (item.classList[1] == null) {
            if (item.nextElementSibling == null) {
                break ex2
            } else if (item.nextElementSibling.classList[1] == 'max-sm:hidden') {
                item.classList.add('max-sm:hidden')
                item.nextElementSibling.classList.remove('max-sm:hidden')
                break ex2
            }
        }
    }
}

staffPrevBtn.addEventListener('click', e => {
    prevBtn(staff)
})

staffNextBtn.addEventListener('click', e => {
    nextBtn(staff)
})

orderPrevBtn.addEventListener('click', e => {
    prevBtn(order)
})

orderNextBtn.addEventListener('click', e => {
    nextBtn(order)
})

orderInputs = document.querySelectorAll('.order_iputs')
orderbtn = document.querySelector('#order_btn')
accepted = document.querySelector('#accepted')

orderbtn.addEventListener('click', e => {
    e.preventDefault()
    let [fullname, phone, address] = orderInputs
    for (let {value} of orderInputs) {
        if (value == '') {
            return alert('Please enter your full info')
        }
    }
   
    accepted.classList.toggle('hidden') 
})