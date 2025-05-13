document.addEventListener("DOMContentLoaded", function() {
    const categoriesDiv = document.querySelector(".categories");
    /**
     * @type {HTMLDivElement}
     */
    const dropdowns1 = document.querySelector(".dropdowns1");

    categoriesDiv.addEventListener("mouseenter", function() {

        dropdowns1.style.display = "block";
    });

    categoriesDiv.addEventListener("mouseleave", function() {
        dropdowns1.style.display = "none";
    });

    const scrollerDiv = document.getElementById("scroller");


});


