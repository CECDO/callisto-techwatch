const tableOfContent = document.querySelector(".tableOfContents")

window.addEventListener('scroll', () => {
    console.log('scroll')
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height();
    let winHeight = $(window).height();
    let scrollPercent = (scrollTop) / (docHeight - winHeight);
<<<<<<< HEAD
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    /* console.log(scrollPercentRounded);
     */
    if (scrollPercentRounded > 6 && scrollPercentRounded < 96) {
=======
	let scrollPercentRounded = Math.round(scrollPercent*100);
    if(scrollPercentRounded > 6 && scrollPercentRounded < 99) {
>>>>>>> 143297ec36453fb628e1d5d1af434c86705df7b9
        tableOfContent.classList.remove("scrolldown");
        tableOfContent.classList.add("scroll");
<<<<<<< HEAD
    } else if (scrollPercentRounded > 96) {
=======
    } else if(scrollPercentRounded > 99){
>>>>>>> 143297ec36453fb628e1d5d1af434c86705df7b9
        tableOfContent.classList.remove("scroll");
        tableOfContent.classList.add("scrolldown");
    } else {
        tableOfContent.classList.remove("scrolldown");
        tableOfContent.classList.remove("scroll");
    }
})