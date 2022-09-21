var add = document.getElementById("add");
var uloha = document.getElementById("uloha");
var storage = [];

var fromprestorage = JSON.parse(localStorage.getItem("uloha"));

add.addEventListener("click", function () {
    storage.push(uloha.value);
    prestorage = JSON.stringify(storage);
    localStorage.setItem("uloha", prestorage);
    render()
});

fromprestorage.forEach(function (uloha) {
    var container = document.createElement("div");
    var paragraph = document.createElement("p");
    var checkmark = document.createElement("div");
    paragraph.textContent = uloha;
    container.setAttribute("class", "container");
    checkmark.setAttribute("class", "checkmark");
    document.body.appendChild(container);
    container.appendChild(paragraph);
    container.appendChild(checkmark);
});

function render(){
    var container = document.createElement("div");
    var paragraph = document.createElement("p");
    var checkmark = document.createElement("button");
    paragraph.textContent = uloha.value;
    container.setAttribute("class", "container");
    checkmark.setAttribute("class", "checkmark");
    document.body.appendChild(container);
    container.appendChild(paragraph);
    container.appendChild(checkmark);
    uloha.value = ""
}

checkmark.addEventListener("click", function(){
    document.body.removeChild(container);
    localStorage.removeItem("uloha")
});