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

function handleClick(e) {
    if (e.target === document.querySelector('span')) {
        renderRandom()
    } else if (e.target === document.querySelector('#alert')) {
        alert("Jerry's can't try again")
    } else if (e.target === document.querySelector('#ok')) {
        window.location.reload()
    }
    console.log(e.target)
}
document.addEventListener('DOMContentLoaded', storeChar)
document.addEventListener('click', handleClick)