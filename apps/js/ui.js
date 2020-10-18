//! ELEMENTS VARIABLEs
const header = document.querySelector('.header')
const navUL = document.querySelector('.nav-ul')
const navAs = document.querySelectorAll('ul.nav-ul li a')
const adjust = document.querySelector('.nav-btn.adjust')
const bars = document.querySelector('.nav-btn.bars')
const titleSection = document.querySelector('.title-section')
const previewContainer = document.querySelector('.preview-container')

//! CSS CLASSES NAMEs
const responsive = 'responsive'
const sticky = 'sticky'


//! CONST METHODS
const dark = () => document.body.classList.toggle('dark')
const toggleMenu = () => navUL.classList.toggle(responsive)
const hideMenu = () => navUL.classList.remove(responsive)


//! REGISTER EVENTS LISTENERS
window.addEventListener('scroll', () => {
    if (titleSection.getBoundingClientRect().bottom < 55) header.classList.add(sticky)
    else header.classList.remove(sticky)
})
window.addEventListener('resize', hideMenu)

navAs.forEach(a => a.addEventListener('click', hideMenu))

adjust.addEventListener('click', dark)

bars.addEventListener('click', toggleMenu)


//! Some if rules
if (APP_NAME != '') document.title = APP_NAME

if (APP_IMAGES.length == 0 || (APP_IMAGES.length == 1 && APP_IMAGES[0].src == ''))
    previewContainer.style.display = 'none'
