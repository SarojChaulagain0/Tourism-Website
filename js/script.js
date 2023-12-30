// Script for mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});

// Script for smooth scrolling
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const destinationPosition = target.offsetTop - headerHeight;

    window.scrollTo({
      top: destinationPosition,
      behavior: 'smooth'
    });
  });
}
