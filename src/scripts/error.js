const redirectToHomePage = () => {
    
    location.replace("/index.html")
    
}

const button = document.querySelector(".new-search__button")
button.addEventListener("click", redirectToHomePage)
