const fetchUserData = async (searchUser) => {

    const username = await fetch(`https://api.github.com/users/${searchUser}`, { 
        method: 'GET'
    })    
    .then(async (res) => {
       if(res.ok) {
        const resConvert = await res.json()

        localStorage.setItem('@githubUserInfo', JSON.stringify(resConvert))

        location.replace('./src/pages/profile.html')
        return resConvert
       }else {
        location.replace('./src/pages/error.html')
       }
    } )
    return username
}

const button = document.querySelector(".index__button")
button.addEventListener("click", () => {
    const input = document.querySelector("input").value;

    fetchUserData(input)
})
