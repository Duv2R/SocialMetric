var botones = document.getElementById("button_list");

var botones2 = botones.getElementsByClassName("btn");

for (var i = 0; i < botones2.length; i++) {
    botones2[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active2");
        current[0].className = current[0].className.replace(" active2", "");
        this.className += " active2";
    });
}

let usersHTML = "";
let followHTML = document.querySelector("#divUsers");

fetch('../assets/json/users.json')
    .then((response) => response.json())
    .then((dataUsers) => {
        let aleatorio = Math.round(Math.random() * (5 - 2) + 2, 0)

        for (x = 0; x < aleatorio; x++) {

            usersHTML += `
            <div class="innerdiv_follow">
                <div class="d-flex">
                    <i class="bi bi-person-circle" style="margin-right: 15px; font-size: 45px"></i>
                    <div class="users">
                        <p style="font-weight: 600;">${dataUsers[x].username}</p>
                        <p>${dataUsers[x].tag}</p>
                    </div>
                </div>
                <div class="boton_follow2">
                    <button class="btn btn-light boton_follow">Seguir</button>
                </div>         
            </div>
              `
        }

        followHTML.innerHTML = usersHTML;

    });

let newsData = document.querySelector("#newsDiv");
let newsHTML = "";

fetch('../assets/json/news.json')
    .then((response) => response.json())
    .then((dataNews) => {

        let random = Math.round(Math.random() * (6 - 3) + 3, 0)


        for (x = 0; x < random; x++) {
            let myNews = dataNews[x].Categoría;

            newsHTML += `
            <div class="news-widget mb-3">
            <div>
              <p>${dataNews[x].Categoría}</p>
              <h5 class="my-1">${dataNews[x].Titular}</h5>
              <p>${dataNews[x].Reportes}</p>
            </div>
          </div>
            `

        }

        newsData.innerHTML = newsHTML;

    })