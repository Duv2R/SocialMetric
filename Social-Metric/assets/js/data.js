let data = ''

let avatares = document.querySelector("#avatar")
let avatares2 = document.querySelector("#avatar2")
let avatares3 = document.querySelector("#avatar3")
let avatares4 = document.querySelector("#avatar4")

fetch('/assets/datafiles/users.json')
    .then((response) => response.json())
    .then((data) => {
        let rdmnum = Math.round(Math.random() * (50 - 1) + 1,0)
        console.log(data[2])


        console.log(data[rdmnum].profile_img)

        avatares.innerHTML += `  
                <span class="iconUserPrincipal">
                    <img src="${data[rdmnum].profile_img}" class="card-img-top" width="200px" height="200px">
                </span>
                                `
        avatares2.innerHTML += ` 
                <span class="iconPerfil  d-flex justify-content-center align-items-center">
                    <img src="${data[rdmnum].profile_img}" class="card-img-top" alt="...">
                </span>
                <div class="divIndex">&nbsp;</div>
                <div class="fontTextContent">${data[rdmnum].username}</div>
                                `
        avatares3.innerHTML += ` 
                                ${data[rdmnum].interests}
                                `
        avatares4.innerHTML += ` 
                                ${data[rdmnum].about_me}
                                `
                                
    });

let dataScore = ''

let myScore = document.querySelector("#viewScore")
let pepe = ""
fetch('/assets/datafiles/review_lite.json')
    .then((response) => response.json())
    .then((dataScore) => {
        for(x=0; x<dataScore.length; x++){
            console.log(dataScore[x].score)
            pepe += ` 
                    ${(dataScore[x].score > 3) ? "<div class='divQualifyPositive'>":"<div class='divQualifyNegative'>"}
                    <div class="d-flex flex-row align-items-start">
                    <div class="d-flex">
                        <span class="material-symbols-rounded iconUser">
                        person
                        </span>
                    </div>
                    <div class="d-flex flex-column m-3">
                        <div
                        class="d-flex justify-content-between align-items-center m-1"
                        >
                        <div class="fw-bold">${dataScore[x].item}</div>
                        <div class="d-flex justify-content-end">
                            ` 

                            for(i=1; i<=dataScore[x].score; i++){

                            pepe += `
                            <span class="material-symbols-rounded iconStartQ">
                            star_rate
                            </span>
                            `

                            }
                            pepe +=`
                        </div>
                        </div>
                        <div class="text-justify m-1">
                        ${dataScore[x].text}
                        </div>
                        <div class="d-flex justify-content-between flex-row m-1">
                        <div class="d-flex">
                            <div class="d-flex align-items-center">
                            <div class="divIndexDark">&nbsp;</div>
                            <div>${dataScore[x].usernickname}</div>
                            </div>
                        </div>
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAppeal"
                        >
                            <a tabindex="0" class="btn btn-lg">
                            <span class="material-symbols-rounded iconAppeal"
                                >gavel</span
                            >
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                    `
        }
        myScore.innerHTML = pepe
                                
    });