const store = []

function storeChar() {
    Adapter.getPages()
        .then( maxPages => { for (let i = 0; i < maxPages; i++) { Adapter.getCharactersbyChar(i)}})
}

function filterChar() {
    return store.filter( char => char.name.includes('Jerry'))
}

function renderRandom() {
    const items = filterChar()
    item = items[Math.floor(Math.random()*items.length)]
    item.render()
}

document.addEventListener('DOMContentLoaded', storeChar())