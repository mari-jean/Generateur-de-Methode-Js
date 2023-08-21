// initializeDecks.js

/**
 * Initialise ou réinitialise certaines propriétés des decks.
 * 
 * @param {Object} decks - L'objet contenant les thèmes et les méthodes.
 */
function initializeDecks(decks) {
    // Boucle à travers chaque thème dans les decks
    for (let theme in decks.themes) {
        // Boucle à travers chaque méthode dans le thème actuel
        for (let method in decks.themes[theme]) {
            // Si la méthode n'a pas de propriété 'difficulty', lui assigne la valeur par défaut de 3
            if (!decks.themes[theme][method].hasOwnProperty('difficulty')) {
                decks.themes[theme][method].difficulty = 0;
            }
            // Si la propriété 'views' de la méthode est égale à 3, réinitialise le compteur de vues à 0
            if (decks.themes[theme][method].views === 3) {
                decks.themes[theme][method].views = 0;
            }
        }
    }
}

// Exporte la fonction initializeDecks pour qu'elle puisse être utilisée dans d'autres fichiers
export { initializeDecks };
