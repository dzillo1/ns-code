document.querySelectorAll(".menu .meal-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.classList[1]; /*Get meal category*/
        /* Add 'selected' class to the clicked button and remove from siblings*/
        document.querySelectorAll(".menu .meal-btn").forEach((btn) => {
            btn.classList.toggle("selected", btn === button);
        });
        /*Show the selected category items and hide others*/
        document.querySelectorAll(".food-wrap").forEach((item) => {
            item.style.display = item.classList.contains(`${category}-item`) ? "flex" : "none";
        });
    });
});