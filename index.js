const getYear = () => {
	const date = new Date();
	return `Alright Reserved &copy; ${date.getFullYear()}`;
}

// const dateEl = document.getElementById('footer-content');
// window.onload = () => dateEl.innerHTML = getYear();

window.oncontextmenu = () => false;
    
$(document).ready(() => {
  $('.wrapper').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
  });
});

const listenForScroll = e => {

	const header   = document.getElementById('home');
	const aboutMe  = document.getElementById('about-me');
	const tools    = document.getElementById('tools');
	const projects = document.getElementById('projects');
	const home   = document.getElementById('home');
	const aboutMeLi  = document.getElementById('about-me-li');
	const toolsLi    = document.getElementById('tools-li');
	const projectsLi    = document.getElementById('projects-li');
	const hireMe = document.getElementById('hire-me');
	const headerHeight =  getComputedStyle(header).height.split('px')[0];
	const toolsHeight =  getComputedStyle(tools).height.split('px')[0];
	const aboutMeHeight =  getComputedStyle(aboutMe).height.split('px')[0];
	const projectsHeight =  getComputedStyle(projects).height.split('px')[0];
	const active = 'active';


	if (window.pageYOffset >= Number(headerHeight)){

		home.classList.remove(active);
	}
	else {

		home.classList.add(active);
	}

	let height1 = [Number(headerHeight), Number(aboutMeHeight)]

	if (window.pageYOffset > headerHeight && window.pageYOffset < addHeight(height1)) {

		aboutMeLi.classList.add(active);
	}
	else {
		aboutMeLi.classList.remove(active);
	}

	let height2 = [Number(headerHeight), Number(aboutMeHeight), Number(toolsHeight)]

	if (window.pageYOffset > addHeight(height1) && window.pageYOffset < addHeight(height2) ) {

		toolsLi.classList.add(active);
	}

	else{
		toolsLi.classList.remove(active);
	}

	let height3 = [Number(headerHeight), Number(aboutMeHeight), Number(toolsHeight), Number(projectsHeight)];

	if (window.pageYOffset > addHeight(height2) && window.pageYOffset < addHeight(height3) ) {

		projectsLi.classList.add(active);
	}

	else{
		projectsLi.classList.remove(active);
	}


	if ((document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight){
		hireMe.classList.add(active);
		projectsLi.classList.remove(active);
	}
	else{
		hireMe.classList.remove(active);
	}

}

const addHeight = heightArr => {

	return heightArr.reduce((a,b) => a+b, 0);
}


window.addEventListener('scroll', listenForScroll );


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('show');
});

const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const showSlides = n => {
	let i;
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" __active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " __active";
  }
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = n => {
  showSlides(slideIndex += n);
}

const  currentSlide = n =>  {
  showSlides(slideIndex = n);
}



