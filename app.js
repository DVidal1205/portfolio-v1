let sections = document.querySelectorAll('.main-section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.innerHeight + window.pageYOffset;
    let pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 2) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('header nav a[href="#contact"]').classList.add('active');
    } else {
        let activeSection = null;

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 75;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                activeSection = id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeSection) {
                link.classList.add('active');
            }
        });
    }
};

const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}));


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));