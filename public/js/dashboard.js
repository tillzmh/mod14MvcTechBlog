var blogPosts = document.querySelectorAll(".card");

blogPosts.forEach(item => item.addEventListener("click", function (event) {
    if (event.currentTarget.classList.contains("card")) {
        var clickedId = event.currentTarget.dataset.id;
        document.location.replace('/blog-update/' + clickedId);
    }
}));