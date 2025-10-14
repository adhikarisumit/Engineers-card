
const container = document.querySelector('.card-container')
const usernames = ["adhikarisumit", "Rezthecoder","Rajulmtn","sandip-bhujel","jharana38","RameshKunwar745","Rajendra4142","Gamer915888"]

function getUser() {
    usernames.forEach((username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML=`
                <img src="${data.avatar_url}" alt="${data.login}" class="image">
                <ul>
                    <li class="">Username:${data.login}</li>
                    <li class="id">ID:${data.id}</li>
                    <li class="location">Location:${data.location}</li>
                    <li class="followers">Followers:${data.followers}</li>
                    <li class="following">Following:${data.following}</li>
                </ul>
                `
                container.appendChild(card)
            })
    })
}
getUser()
