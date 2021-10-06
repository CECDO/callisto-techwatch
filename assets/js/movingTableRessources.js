const tableOfContent = document.querySelector(".tableOfContents")


/* window.addEventListener('scroll', () => {
    if(window.scrollY > 355) {
        tableOfContent.classList.add("scroll");
    } else {
        tableOfContent.classList.remove("scroll");
    }
}) 

window.addEventListener('scroll', () => {
    if(window.scrollY > 3451) {
        tableOfContent.classList.add("scrolldown");
    } else {
        tableOfContent.classList.remove("scrolldown");
    }
}) */

window.addEventListener('scroll', () => {
    console.log('scroll')
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height();
    let winHeight = $(window).height();
    let scrollPercent = (scrollTop) / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    /* console.log(scrollPercentRounded);
     */
    if (scrollPercentRounded > 6 && scrollPercentRounded < 80) {
        tableOfContent.classList.remove("scrolldown");

        tableOfContent.classList.add("scroll");
    } else if (scrollPercentRounded > 80) {
        tableOfContent.classList.remove("scroll");
        tableOfContent.classList.add("scrolldown");
    } else {
        tableOfContent.classList.remove("scrolldown");
        tableOfContent.classList.remove("scroll");
    }
})