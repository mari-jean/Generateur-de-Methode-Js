// Import des différents modules et fonctions nécessaires
import { decks } from "./decks.js";
import { initializeDecks } from "./initializeDecks.js";
import { setDifficulty, checkAndShowDifficultySelection } from "./level.js";
import { saveDecksToLocalStorage, loadDecksFromLocalStorage } from "./localStorage.js";

// Initialisation des decks (assignation des valeurs par défaut, etc.)
initializeDecks(decks);

// Chargement des decks à partir du stockage local
loadDecksFromLocalStorage(decks);

// Variables pour suivre le dernier thème et la dernière méthode vus par l'utilisateur
export let lastTheme = null;
export let lastMethod = null;

// Fonction pour obtenir un élément aléatoire d'un tableau, différent du dernier élément vu
function getRandomItem(items, lastItem) {
    let randomItem;
    if (items.length === 1) return items[0];
    do {
        randomItem = items[Math.floor(Math.random() * items.length)];
    } while (randomItem === lastItem);
    return randomItem;
}

// Fonction pour afficher une méthode aléatoire à l'utilisateur
function showRandomMethod() {
    // Si un thème et une méthode ont été sélectionnés lors de la dernière visualisation
    if (lastMethod && lastTheme) {
        // Vérification pour voir si la méthode a été vue 3 fois et si une difficulté n'a pas été définie
        if (decks.themes[lastTheme][lastMethod].views === 3 && !decks.themes[lastTheme][lastMethod].difficulty) {
            showDifficultySelection();
            return; // Termine la fonction ici si une difficulté doit être définie
        }
    }

    // Sélection d'un thème et d'une méthode aléatoires
    const themes = Object.keys(decks.themes);
    const theme = getRandomItem(themes, lastTheme);
    lastTheme = theme;
    const methods = Object.keys(decks.themes[theme]);
    const method = getRandomItem(methods, lastMethod);
    lastMethod = method;

    // Affichage des détails de la méthode à l'utilisateur
    const methodDetails = decks.themes[theme][method];
    document.getElementById('methodName').textContent = method;
    document.getElementById('methodDescription').textContent = methodDetails.description;
    document.getElementById('methodSyntax').textContent = methodDetails.syntaxe;
    document.getElementById('methodDescription').style.display = 'none';
    document.getElementById('methodSyntax').style.display = 'none';

    // Incrémentation du compteur de vues pour cette méthode
    decks.themes[theme][method].views++;

    // Vérification pour voir si les options de difficulté doivent être affichées
    checkAndShowDifficultySelection();

    // Sauvegarde des données dans le stockage local
    saveDecksToLocalStorage(decks);
}

// Fonction pour afficher/masquer les descriptions et les syntaxes des méthodes
function toggleDescription() {
    const elementsToToggle = ['methodDescription', 'methodSyntax'];

    elementsToToggle.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'inline';  // Change 'block' to 'inline' pour un meilleur formatage avec h2
        } else {
            element.style.display = 'none';
        }
    });
}

// Export des fonctions pour qu'elles puissent être utilisées ailleurs
export { showRandomMethod, toggleDescription };
