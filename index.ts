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