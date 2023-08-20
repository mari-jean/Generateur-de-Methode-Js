// initializeDecks.js

function initializeDecks(decks) {
    for (let theme in decks.themes) {
        for (let method in decks.themes[theme]) {
            if (!decks.themes[theme][method].hasOwnProperty('difficulty')) {
                decks.themes[theme][method].difficulty = 3;
            }
            if (!decks.themes[theme][method].hasOwnProperty('views')) {
                decks.themes[theme][method].views = 0;
            }
        }
    }
}


export { initializeDecks };
