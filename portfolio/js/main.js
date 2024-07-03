document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const currentTheme = localStorage.getItem('theme');

    // Set initial theme and icon
    if (currentTheme == 'dark') {
        document.documentElement.classList.add('dark');
        lightModeIcon.classList.add('hidden');
        darkModeIcon.classList.remove('hidden');
    } 
    else {
        document.documentElement.classList.add('light');
        darkModeIcon.classList.add('hidden');
        lightModeIcon.classList.remove('hidden');
    }

    // Add event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            lightModeIcon.classList.add('hidden');
            darkModeIcon.classList.remove('hidden');
        } 
        else {
            localStorage.setItem('theme', 'light');
            darkModeIcon.classList.add('hidden');
            lightModeIcon.classList.remove('hidden');
        }
    });
});