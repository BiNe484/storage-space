const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("keyup", function () {
const keyword = searchInput.value.toLowerCase();

items.forEach(function (item) {
    const text = item.textContent.toLowerCase();

    if (text.includes(keyword)) {
    item.style.display = "block";
    } else {
    item.style.display = "none";
    }
});
});