const tableOfContent = document.querySelector(".tableOfContents")


window.addEventListener('scroll', () => {
    if(window.scrollY > 355) {
        tableOfContent.classList.add("scroll");
    } else {
        tableOfContent.classList.remove("scroll");
    }
}) 