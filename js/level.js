// level.js

import { decks } from "./decks.js";
import { lastTheme, lastMethod } from "./script.js";
import { saveDecksToLocalStorage } from "./localStorage.js";

function setDifficulty(difficulty) {
    if (lastMethod && lastTheme) {
        decks.themes[lastTheme][lastMethod].difficulty = difficulty;
        decks.themes[lastTheme][lastMethod].views = 1;
        console.log(`Difficulté mise à jour pour ${lastMethod} à : ${difficulty}`);
        hideDifficultySelection();
        showRandomMethod();
        // Sauvegarde les modifications dans le localStorage
        saveDecksToLocalStorage(decks);
    }    
}

function shouldDisplayBasedOnDifficulty(difficulty) {
    const randomValue = Math.random(); // Génère un nombre entre 0 et 1
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

function showDifficultySelection() {
    const difficultySelection = document.querySelector('#difficultyContainer');
    difficultySelection.style.display = 'block';
}

function hideDifficultySelection() {
    const difficultySelection = document.querySelector('#difficultyContainer');
    difficultySelection.style.display = 'none';
}

function checkAndShowDifficultySelection() {
    if (decks.themes[lastTheme][lastMethod].views == 3 && !decks.themes[lastTheme][lastMethod].difficulty) {
        showDifficultySelection();
    }
}

export { setDifficulty, checkAndShowDifficultySelection, hideDifficultySelection, showDifficultySelection, shouldDisplayBasedOnDifficulty };
