document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-enter');
    setTimeout(() => {
        document.body.classList.remove('page-enter');
    }, 300);
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === '#' || link.getAttribute('href') === '') return;
        link.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey) return;
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            document.body.classList.add('page-leave');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactsBtn = document.getElementById('contactsBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    contactsBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});