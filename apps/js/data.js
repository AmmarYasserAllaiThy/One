//! HTML ELEMENTS
const appName = document.querySelector('.app-name')
const appImage = document.querySelector('.app-image')
const appImageCaption = document.querySelector('.app-image-caption')
const appDesc = document.querySelector('.app-desc')
const appDate = document.querySelector('.app-date')
const appSkillsUl = document.querySelector('.skills-ul')
const appTagsUl = document.querySelector('.tags-ul')

const dotsContainer = document.querySelector('.dots-container')
const prevBTN = document.querySelector('.ctrl-btn.prev')
const nextBTN = document.querySelector('.ctrl-btn.next')

const active = 'active'

//! VARIABLES
let curId = 0
let dots = []


//! METHODS
const getSrcOf = id => { return 'images/apps/' + APP_IMAGES_DIR + APP_IMAGES[id].src }

const viewImage = id => {
    curId = id < 0 ? (APP_IMAGES.length - 1) : id >= APP_IMAGES.length ? 0 : id

    appImage.alt = curId
    appImage.src = getSrcOf(curId)
    appImageCaption.innerHTML = APP_IMAGES[curId].caption

    dots.forEach(dot => dot.classList.remove(active))
    dots[curId].classList.add(active)
}

const initDots = () => {
    n = 0

    while (n++ < APP_IMAGES.length) {
        i = document.createElement('i')
        i.classList.add('fa', 'fa-circle', 'fa-lg', 'dot')
        dots.push(i)
        dotsContainer.appendChild(i)
    }

    dots.forEach(dot => dot.addEventListener('click', () => {
        for (const i in dots) if (dots.hasOwnProperty(i) && dot == dots[i]) {
            viewImage(curId = i)
            break
        }
    }))
}

const createLi = text => {
    let li = document.createElement('li')
    li.textContent = text
    return li
}


//! REGISTER EVENTS
appImage.addEventListener('click', () => appImage.classList.toggle('long'))
prevBTN.addEventListener('click', () => viewImage(--curId))
nextBTN.addEventListener('click', () => viewImage(++curId))


//! CALLING
appName.innerHTML = APP_NAME
appDesc.innerHTML = APP_DESC
appDate.innerHTML = APP_DATE

initDots()
if (APP_IMAGES.length > 0) viewImage(0)

APP_SKILLS.forEach(skill => appSkillsUl.appendChild(createLi(skill)))
APP_TAGS.forEach(tag => appTagsUl.appendChild(createLi(tag)))

if (APP_TYPE != '') appTagsUl.prepend(createLi(APP_TYPE))
