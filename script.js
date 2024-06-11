// JavaScript for tab navigation
document.addEventListener("DOMContentLoaded", () => {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    function opentab(tabname) {
        tablinks.forEach(tablink => tablink.classList.remove("active-link"));
        tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

        document.querySelector(`#${tabname}`).classList.add("active-tab");
        event.currentTarget.classList.add("active-link");
    }

    tablinks.forEach(tablink => {
        tablink.addEventListener("click", event => {
            opentab(event.currentTarget.getAttribute("data-tab"));
        });
    });

    // JavaScript for mobile menu
    const sidemenu = document.getElementById("sidemenu");
    const openMenuIcon = document.querySelector(".fa-bars");
    const closeMenuIcon = document.querySelector(".fa-xmark");

    openMenuIcon.addEventListener("click", () => {
        sidemenu.style.right = "0";
    });

    closeMenuIcon.addEventListener("click", () => {
        sidemenu.style.right = "-200px";
    });

    // JavaScript for form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3OWnxZqTAmdXiTcX5PSg87c-jCLJ29Z_Dz6t8JNITQwJHsSS4BGbV8HqmkUkZz7c/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});
