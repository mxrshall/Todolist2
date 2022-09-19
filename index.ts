const add = document.getElementById("add")
let uloha = document.getElementById("uloha")

let storage = []

add.addEventListener("click", function(){
    storage.push(uloha.value)
    prestorage = JSON.stringify(storage)
    localStorage.setItem("uloha", prestorage)
    uloha.value = ""
})

let fromprestorage = JSON.parse(localStorage.getItem("uloha"))

fromprestorage.forEach(function(uloha){
        let container = document.createElement("div")
        let paragraph = document.createElement("p")
    
        paragraph.textContent = uloha
    
        container.setAttribute("class", "container")
        document.body.appendChild(container)
        container.appendChild(paragraph)
    })
}


