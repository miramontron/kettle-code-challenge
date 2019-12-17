/* your scripts */
// update navLinks
const navLinks = Array.from(document.querySelectorAll('.link'));

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const target = link.dataset.target;
        console.log(target);

        navLinks.forEach(t => t.classList.remove('active'));
        link.classList.add('active');
    })
})

//scroll update url 
window.addEventListener('load', () => {
    const headings = document.querySelectorAll('a[name]');
    
    document.addEventListener('scroll', (e) => {
        headings.forEach(ha => {
            const rect = ha.getBoundingClientRect();
            if(rect.top > 0 && rect.top < 150) {
                const location = window.location.toString().split('#')[0];
                history.replaceState(null, null, location + '#' + ha.name);
            }
        });
    });
});