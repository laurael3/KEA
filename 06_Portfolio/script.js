
// Sørger for at alt HTML er downloaded inden Javascript begynder
document.addEventListener('DOMContentLoaded', function () {

// Laver konstante for ThemeBtn, og Body af siden
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;

// EventListenter der lytter efter om knappen bliver ændret (Det gør den når man toggler den på)
    themeBtn.addEventListener('change', function () {
// Sætter mit color theme (Billede) på Body af siden hvis knappen er checked, hvis den er unchecked fjerner den classen
        body.classList.toggle('color-theme' , themeBtn.checked);
    });
}); 




