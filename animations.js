

function addAnimations() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.animate-hidden');
    hiddenElements.forEach((element) => observer.observe(element))   
    
}

addAnimations();

export default addAnimations;