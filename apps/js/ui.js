//! ELEMENTS VARIABLEs
const HEAD = document.getElementsByTagName('HEAD')[0]
const header = document.querySelector('.header')
const navUL = document.querySelector('.nav-ul')
const navAs = document.querySelectorAll('ul.nav-ul li a')
const adjust = document.querySelector('.nav-btn.adjust')
const bars = document.querySelector('.nav-btn.bars')
const titleSection = document.querySelector('.title-section')
const previewContainer = document.querySelector('.preview-container')
const ctrlContainer = document.querySelector('.preview-container .ctrl-container')

//! CSS CLASSES NAMEs
const responsive = 'responsive'
const sticky = 'sticky'


//! HIGHLIGHT <link>
const linkOf = fileName => { return createLink(`css/highlight/${fileName}.css`) }

const linkOfAndroidStudio = linkOf('androidstudio')
const linkOfArduinoLight = linkOf('arduino-light')
const linkOfMonoBlue = linkOf('mono-blue')

appendToHead(linkOfArduinoLight)
appendToHead(linkOfMonoBlue)


//! CONST METHODS
const dark = () => {
    let dark = document.body.classList.toggle('dark')

    if (dark) {
        appendToHead(linkOfAndroidStudio)
        removeFromHead(linkOfArduinoLight)
        removeFromHead(linkOfMonoBlue)
    } else {
        removeFromHead(linkOfAndroidStudio)
        appendToHead(linkOfArduinoLight)
        appendToHead(linkOfMonoBlue)
    }
}

const toggleMenu = () => navUL.classList.toggle(responsive)
const hideMenu = () => navUL.classList.remove(responsive)


//! REGISTER EVENTS LISTENERS
window.addEventListener('scroll', () => {
    if (titleSection.getBoundingClientRect().bottom < 55) header.classList.add(sticky)
    // else header.classList.remove(sticky)
})
window.addEventListener('resize', hideMenu)

navAs.forEach(a => a.addEventListener('click', hideMenu))

adjust.addEventListener('click', dark)

bars.addEventListener('click', toggleMenu)


//! Confirm UI reliability
if (APP_NAME != '') document.title = APP_NAME

if (APP_IMAGES.length == 0) hide(previewContainer)
else if (APP_IMAGES.length == 1) hide(ctrlContainer)
