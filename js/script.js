import { decks } from "./decks.js";
import { initializeDecks } from "./initializeDecks.js";
import { setDifficulty, checkAndShowDifficultySelection } from "./level.js";
import { saveDecksToLocalStorage, loadDecksFromLocalStorage } from "./localStorage.js";

// Appel de la fonction pour initialiser les decks
initializeDecks(decks);

// Charge les decks à partir du localStorage
loadDecksFromLocalStorage(decks);

export let lastTheme = null;
export let lastMethod = null;

function getRandomItem(items, lastItem) {
    let randomItem;
    if (items.length === 1) return items[0];
    do {
        randomItem = items[Math.floor(Math.random() * items.length)];
    } while (randomItem === lastItem);
    return randomItem;
}

function showRandomMethod() {
    // Si on a déjà sélectionné une méthode et un thème précédemment
    if (lastMethod && lastTheme) {
        // Vérifie si l'utilisateur a vu la méthode 5 fois et n'a pas défini de difficulté
        if (decks.themes[lastTheme][lastMethod].views === 5 && !decks.themes[lastTheme][lastMethod].difficulty) {
            showDifficultySelection();
            return; // Ne fait rien d'autre si on doit définir une difficulté
        }
    }

    // Récupère tous les thèmes disponibles
    const themes = Object.keys(decks.themes);
    const theme = getRandomItem(themes, lastTheme);
    lastTheme = theme;

    // Récupère toutes les méthodes du thème choisi
    const methods = Object.keys(decks.themes[theme]);
    const method = getRandomItem(methods, lastMethod);
    lastMethod = method;

    // Récupère les détails de la méthode choisie
    const methodDetails = decks.themes[theme][method];
    document.getElementById('methodName').textContent = method;
    document.getElementById('methodDescription').textContent = methodDetails.description;
    document.getElementById('methodSyntax').textContent = methodDetails.syntaxe;  // Ajoutez cette ligne pour la syntaxe
    document.getElementById('methodDescription').style.display = 'none';
    document.getElementById('methodSyntax').style.display = 'none';  // Gardez la syntaxe initialement cachée
    // Incrémente le compteur de vues pour cette méthode
    decks.themes[theme][method].views++;
    // Vérifie si les options de difficulté doivent être affichées
    checkAndShowDifficultySelection();
    // Sauvegarde les decks après avoir affiché une méthode aléatoire
    saveDecksToLocalStorage(decks);
}

function toggleDescription() {
    const descriptionElem = document.getElementById('methodDescription');
    const syntaxElem = document.getElementById('methodSyntax');
    
    if (descriptionElem.style.display === 'none' || descriptionElem.style.display === '') {
        descriptionElem.style.display = 'block';
        syntaxElem.style.display = 'block';  // affiche la syntaxe
    } else {
        descriptionElem.style.display = 'none';
        syntaxElem.style.display = 'none';  // cache la syntaxe
    }
}


export { showRandomMethod, toggleDescription };
