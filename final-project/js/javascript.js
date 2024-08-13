const navbarNav= document.querySelector(".nav-list");
// when hamburger menu is clicked

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// when cursor click on other space -hide sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active");
    }
});

// slider
// script.js
let currentIndex = 0;

function moveSlide(direction) {
	const slides = document.querySelectorAll(".slide");
	const totalSlides = slides.length;

	currentIndex += direction;

	if (currentIndex < 0) {
		currentIndex = totalSlides - 1;
	} else if (currentIndex >= totalSlides) {
		currentIndex = 0;
	}

	const offset = -currentIndex * 100;
	document.querySelector(
		".slider-wrapper"
	).style.transform = `translateX(${offset}%)`;
}
