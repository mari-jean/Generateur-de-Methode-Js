// level.js

// Importations des modules nécessaires
import { decks } from "./decks.js";
import { lastTheme, lastMethod } from "./script.js";
import { saveDecksToLocalStorage } from "./localStorage.js";

/**
 * Définit la difficulté pour la méthode actuellement affichée.
 *
 * @param {number} difficulty - La valeur de difficulté à assigner.
 */
function setDifficulty(difficulty) {
    if (lastMethod && lastTheme) {
        decks.themes[lastTheme][lastMethod].difficulty = difficulty;
        decks.themes[lastTheme][lastMethod].views = 3;
        hideDifficultySelection();
        showRandomMethod();
        // Sauvegarde les modifications dans le localStorage après mise à jour
        saveDecksToLocalStorage(decks);
    }    
}

/**
 * Détermine si une méthode doit être affichée en fonction de sa difficulté.
 *
 * @param {number} difficulty - La difficulté de la méthode.
 * @return {boolean} - Si la méthode doit être affichée ou non.
 */
function shouldDisplayBasedOnDifficulty(difficulty) {
    const randomValue = Math.random(); // Génère un nombre aléatoire entre 0 et 1
    switch(difficulty) {
        case 1:
            return randomValue < 0.05;
        case 2:
            return randomValue < 0.20;
        case 3:
            return randomValue < 0.40;
        case 4:
            return randomValue < 0.60;
        case 5:
            return randomValue < 0.80;
        default:
            return false;
    }
}

/**
 * Affiche la sélection de difficulté à l'utilisateur.
 */
function showDifficultySelection() {
    const difficultySelection = document.querySelector('#difficultyContainer');
    difficultySelection.style.display = 'block';
}

/**
 * Cache la sélection de difficulté à l'utilisateur.
 */
function hideDifficultySelection() {
    const difficultySelection = document.querySelector('#difficultyContainer');
    difficultySelection.style.display = 'none';
}

/**
 * Vérifie si la sélection de difficulté doit être affichée et, si oui, la montre.
 */
function checkAndShowDifficultySelection() {
    if (decks.themes[lastTheme][lastMethod].views == 3 && !decks.themes[lastTheme][lastMethod].difficulty) {
        showDifficultySelection();
    }
}

// Exporte les fonctions pour qu'elles puissent être utilisées dans d'autres fichiers
export { setDifficulty, checkAndShowDifficultySelection, hideDifficultySelection, showDifficultySelection, shouldDisplayBasedOnDifficulty };
