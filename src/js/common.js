const hamburger = document.querySelector('.hamburger'),
			navbar = document.querySelector('.navbar__main'),
			navbarLogo = document.querySelector('.navbar__logo');

hamburger.addEventListener('click', e => {
	hamburger.classList.toggle('hamburger--open');
	navbar.classList.toggle('navbar__main--active');
	navbarLogo.classList.toggle('navbar__logo--active');
})
