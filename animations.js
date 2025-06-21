document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'animate-on-scroll'
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    // Seleciona todos os elementos com a classe 'animate-footer-section'
    const animateFooterSections = document.querySelectorAll('.animate-footer-section');
    // Seleciona o elemento com a classe 'animate-footer-bottom'
    const animateFooterBottom = document.querySelector('.animate-footer-bottom');

    // Seleciona o título da seção final
    const finalMessageTitle = document.querySelector('.final-message-title');
    // Seleciona as folhas
    const leaves = document.querySelectorAll('.leaf');


    const observerOptions = {
        root: null, // O viewport é o elemento raiz
        rootMargin: '0px',
        threshold: 0.2 // A animação será ativada quando 20% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' para disparar a animação
                entry.target.classList.add('is-visible');
                // Deixa de observar o elemento após a animação para otimizar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada elemento animate-on-scroll
    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Observa cada elemento animate-footer-section
    animateFooterSections.forEach(element => {
        observer.observe(element);
    });

    // Observa o elemento animate-footer-bottom
    if (animateFooterBottom) {
        observer.observe(animateFooterBottom);
    }

    // Observa o título da seção final para disparar a animação da linha
    if (finalMessageTitle) {
        observer.observe(finalMessageTitle);
    }

    // Observa as folhas para disparar a animação quando a seção é visível
    leaves.forEach(leaf => {
        observer.observe(leaf);
    });
});