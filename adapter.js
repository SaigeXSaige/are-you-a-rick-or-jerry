class Adapter {

    static getPages() {
        return fetch('https://rickandmortyapi.com/api/character')
            .then( resp => resp.json())
            .then( data => data.info.pages)
    }
    
    static getCharactersbyChar(id){
        return fetch('https://rickandmortyapi.com/api/character?page=' + id)
            .then( resp => resp.json())
            .then(data => {
                data.results.forEach(element => {
                    // if (element.name.includes('Jerry')) {
                    //     store.push(element)
                    // } 
                    new Character(element)
                })
            })
    }
}