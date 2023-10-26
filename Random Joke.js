let button = document.getElementById("jokeBtn");
let joke = document.getElementById("jokeText");
let loading = document.getElementById("spinner");
button.onclick = function() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    loading.classList.toggle("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })

        .then(function(jsonData) {
            joke.textContent = JSON.stringify(jsonData.value);
            loading.classList.toggle("d-none");
        })
}