import { showRandomMethod, toggleDescription } from "./script.js";
import { setDifficulty } from "./level.js";

// S'assurer que le DOM est entièrement chargé avant d'appeler la fonction
document.addEventListener('DOMContentLoaded', (event) => {
    showRandomMethod();
});

// Rendre les fonctions disponibles pour l'HTML
window.showRandomMethod = showRandomMethod;
window.toggleDescription = toggleDescription;
window.setDifficulty = setDifficulty;
