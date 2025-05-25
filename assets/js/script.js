// Voz da Lei - Custom JavaScript

//DOMContentLoaded event listener to ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for anchor links in the navbar
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            // Ensure targetId is not just '#' to prevent errors
            if (targetId.length > 1) { 
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // If on a small screen, close the navbar after clicking a link
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarToggler && navbarCollapse.classList.contains('show')) {
                        navbarToggler.click(); // Simulate a click to close the toggler
                    }
                }
            }
        });
    });

    // Add active class to nav-link on scroll (simple version)
    // More robust solutions might use Intersection Observer API
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Adjust offset if you have a fixed header, e.g., 70px for navbar
            const sectionTop = current.offsetTop - 70; 
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    // Initialize Bootstrap components that require JS (e.g., tooltips, popovers) if you add them
    // Example: Enable all tooltips
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

    console.log('Voz da Lei scripts loaded.');
});
