// This function is executed when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the anchor elements within the navigation
    var navLinks = document.querySelectorAll("nav a");

    // Attach a click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of following the link
            event.preventDefault();

            // Get the href attribute of the clicked link
            var targetPage = link.getAttribute("href");

            // Load the content of the target page
            loadPage(targetPage);
        });
    });
});
function loadPage(targetPage) {
    // Fetch the content of the target page
    fetch(targetPage)
        .then(function(response) {
            return response.text();
        })
        .then(function(content) {
            // Replace the current page content with the content of the target page
            document.body.innerHTML = content;
        })
        .catch(function(error) {
            console.error("Error loading page:", error);
        });
}



