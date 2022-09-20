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
    paragraph.textContent = uloha;
    container.setAttribute("class", "container");
    document.body.appendChild(container);
    container.appendChild(paragraph);
});

function render(){
    var container = document.createElement("div");
    var paragraph = document.createElement("p");
    paragraph.textContent = uloha.value;
    container.setAttribute("class", "container");
    document.body.appendChild(container);
    container.appendChild(paragraph);
    uloha.value = ""
}
