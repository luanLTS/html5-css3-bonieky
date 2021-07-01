window.onload = () => {
    document.querySelector(".menu-mobile").addEventListener("click", () => {
        if(document.querySelector(".header-menu nav").style.display == 'flex')
            document.querySelector(".header-menu nav").style.display = 'none'
        else
            document.querySelector(".header-menu nav").style.display = 'flex'
    })
}