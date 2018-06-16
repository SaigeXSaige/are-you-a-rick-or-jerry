class Character {
    constructor(obj) {
        this.name = obj.name
        this.image = obj.image
        store.push(this)
        this.id = store.length
    }


}