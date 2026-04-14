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
