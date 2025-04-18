document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.checked = savedTheme === 'dark-theme';
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});