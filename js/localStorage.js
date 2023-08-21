// localStorage.js

// Cette fonction sauvegarde l'objet 'decks' dans le localStorage.
// Elle convertit d'abord l'objet en une chaîne JSON, puis utilise la méthode 'setItem' pour la stocker sous la clé 'decks'.
export function saveDecksToLocalStorage(decks) {
    localStorage.setItem('decks', JSON.stringify(decks));
}

// Cette fonction charge l'objet 'decks' à partir du localStorage.
// Elle utilise d'abord la méthode 'getItem' pour récupérer la chaîne JSON stockée sous la clé 'decks', puis la convertit en objet.
// Si l'objet récupéré contient une propriété 'themes', celle-ci est assignée à l'objet 'defaultDecks' passé en argument.
// La fonction retourne ensuite cet objet 'defaultDecks', potentiellement modifié.
export function loadDecksFromLocalStorage(defaultDecks) {
    const savedDecks = JSON.parse(localStorage.getItem('decks'));
    if (savedDecks && savedDecks.themes) {
        defaultDecks.themes = savedDecks.themes;
    }
    return defaultDecks;
}
