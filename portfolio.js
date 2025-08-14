document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-box");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-category");

            // Filter with fade effect
            projects.forEach(project => {
                project.classList.remove("fade-in");
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                    setTimeout(() => {
                        project.classList.add("fade-in");
                    }, 10);
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
