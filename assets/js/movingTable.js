const tableOfContent = document.querySelector(".tableOfContents")


window.addEventListener('scroll', () => {
    if(window.scrollY > 265) {
        tableOfContent.classList.add("scroll");
    } else {
        tableOfContent.classList.remove("scroll");
    }
}) 