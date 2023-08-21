// Importe les fonctions 'showRandomMethod' et 'toggleDescription' depuis le fichier 'script.js'
import { showRandomMethod, toggleDescription } from "./script.js";

// Importe la fonction 'setDifficulty' depuis le fichier 'level.js'
import { setDifficulty } from "./level.js";

// Ajoute un écouteur d'événement au document pour s'assurer qu'il est complètement chargé avant d'exécuter la fonction
// Lorsque le DOM est prêt, la fonction 'showRandomMethod' est appelée.
document.addEventListener('DOMContentLoaded', (event) => {
    showRandomMethod();
});

// Attache les fonctions importées à l'objet 'window' pour les rendre accessibles depuis l'HTML.
// Cela est utile lorsque les fonctions sont appelées depuis des balises HTML comme des boutons, des liens, etc.
window.showRandomMethod = showRandomMethod;
window.toggleDescription = toggleDescription;
window.setDifficulty = setDifficulty;
