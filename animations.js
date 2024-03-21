

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
    

    const ltr_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-ltr');
            } else {
                entry.target.classList.remove('show-ltr');
            }
        });
    });

    const ltr_hiddenElements = document.querySelectorAll('.animate-ltr-hidden');
    ltr_hiddenElements.forEach((element) => ltr_observer.observe(element))


    const btt_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-btt');
            } else {
                entry.target.classList.remove('show-btt');
            }
        });
    }
    );

    const btt_hiddenElements = document.querySelectorAll('.animate-btt-hidden');
    btt_hiddenElements.forEach((element) => btt_observer.observe(element))
}

addAnimations();

export default addAnimations;