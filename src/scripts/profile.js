const getUserFromLocalStorage = () => {

    const user = JSON.parse(localStorage.getItem("@githubUserInfo"))
    renderUserInfo(user)
    renderUserRepos(user)

}

const renderUserInfo = (currentUser) => {
    const img = document.querySelector(".profile__image");
    const login = document.querySelector(".profile__username");
    img.src = currentUser.avatar_url;
    login.innerHTML = currentUser.login;
}

const button = document.querySelector("button")
button.addEventListener("click", () => {
    localStorage.clear()
    location.replace("/index.html")
})

const renderUserRepos = async () => {

    const username = JSON.parse(localStorage.getItem("@githubUserInfo"))

    const { login } = username;

    const endpoint = `https://api.github.com/users/${login}/repos`;
    fetch(endpoint)
        .then(async response => {
            if (response.ok) {
                const repos = await response.json();
                const ul = document.querySelector(".profile__ul");
                ul.innerHTML = "";
                repos.forEach(element => {
                    const li = document.createElement("li")
                    const h4 = document.createElement("h4")
                    const p = document.createElement("p")
                    const a = document.createElement("a")

                    h4.innerHTML = element.name;

                    p.innerHTML == null ? element.description = 'Repositório sem descrição' : p.innerHTML = element.description;
                    a.innerText = "Repositório";
                    a.href = element.html_url;
                    a.target = "_blank";

                    li.append(h4, p, a)
                    ul.appendChild(li)
                })
            }
        })
}

getUserFromLocalStorage()
renderUserRepos()