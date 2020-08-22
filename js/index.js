
window.onload = () => {

    ic_parent = document.querySelector(".ic-parent")

    window.onscroll = () => ic_parent.style.right = (ic_parent.style.right - 50) + "px"

}
