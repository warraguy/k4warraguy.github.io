document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        document.querySelectorAll("section").forEach(section => {
            section.style.transition = "all 0.5s ease-in-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        });
    }, 500);
});
