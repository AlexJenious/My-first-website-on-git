function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    sidebar.classList.toggle('open');
    mainContent.classList.toggle('menu-open');
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.querySelector('.menu-button');
    const mainContent = document.getElementById('mainContent');

    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
        mainContent.classList.remove('menu-open');
    }
});