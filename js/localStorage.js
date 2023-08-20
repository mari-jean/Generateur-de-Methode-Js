// localStorage.js

export function saveDecksToLocalStorage(decks) {
    localStorage.setItem('decks', JSON.stringify(decks));
}

export function loadDecksFromLocalStorage(defaultDecks) {
    const savedDecks = JSON.parse(localStorage.getItem('decks'));
    if (savedDecks && savedDecks.themes) {
        defaultDecks.themes = savedDecks.themes;
    }
    return defaultDecks;
}
