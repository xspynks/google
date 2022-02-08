const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        search();
    }
});

const searchClick = document.querySelector("#search-click");

searchClick.addEventListener("click", function(event) {

    search();
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHBF_enUS814US814&oq=" + input + "&aqs=chrome..69i57j69i59l2j69i60l2j69i61j69i65j69i61.227j0j7&sourceid=chrome&ie=UTF-8";
}