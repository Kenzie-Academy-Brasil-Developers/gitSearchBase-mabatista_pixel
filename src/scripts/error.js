const redirectToHomePage = () => {
    
    location.replace("http://127.0.0.1:5500/index.html")
    
}

const button = document.querySelector(".new-search__button")
button.addEventListener("click", redirectToHomePage)
