var add = document.getElementById("add");
var uloha = document.getElementById("uloha");
var storage = [];
add.addEventListener("click", function () {
    storage.push(uloha.value);
    prestorage = JSON.stringify(storage);
    localStorage.setItem("uloha", prestorage);
    uloha.value = "";
});
var fromprestorage = JSON.parse(localStorage.getItem("uloha"));
