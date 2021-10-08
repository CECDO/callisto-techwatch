const tableOfContent = document.querySelector('.tableOfContents');

window.addEventListener('scroll', () => {
	let scrollTop = $(window).scrollTop();
	let docHeight = $(document).height();
	let winHeight = $(window).height();
	let scrollPercent = scrollTop / (docHeight - winHeight);
	let scrollPercentRounded = Math.round(scrollPercent * 100);
	if (scrollPercentRounded > 6 && scrollPercentRounded < 99) {
		tableOfContent.classList.remove('scrolldown');
		tableOfContent.classList.add('scroll');
	} else if (scrollPercentRounded > 99) {
		tableOfContent.classList.remove('scroll');
		tableOfContent.classList.add('scrolldown');
	} else {
		tableOfContent.classList.remove('scrolldown');
		tableOfContent.classList.remove('scroll');
	}
});