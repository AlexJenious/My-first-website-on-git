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

// Range value display
const magicLevel = document.getElementById('magic-level');
const levelValue = document.getElementById('level-value');

if (magicLevel && levelValue) {
    magicLevel.addEventListener('input', function() {
        levelValue.textContent = this.value;
    });
}

// Form submission
const magicForm = document.querySelector('.magic-form');
if (magicForm) {
    magicForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your application has been sent by owl post! Professor McGonagall will review it soon.');
    });
}