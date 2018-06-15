const store = []

function storeCharacters() {
    Adapter.getPages()
        .then( maxPages => { for (let i = 0; i < maxPages; i++) { Adapter.getCharactersbyChar(i)}})
}

function renderCharacter() {
    
}
