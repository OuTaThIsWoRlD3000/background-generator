// Function to change the header content
function changeHeader() {
    document.getElementById("dynamicHeader").textContent = "A good worker";
}

// Add event listener to the button after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeHeaderButton").addEventListener("click", changeHeader);
});
