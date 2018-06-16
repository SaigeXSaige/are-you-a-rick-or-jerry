class Character {
    constructor(obj) {
        this.name = obj.name
        this.image = obj.image
        store.push(this)
        this.id = store.length
    }

    render() {
        console.log(this)
        let card = document.querySelector('.card')
        card.innerHTML = `<img class="card-img-top" src="${this.image}" alt="random Jerry">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <button>Okay</button>
            <button>Try Again</button>
        </div>`
        {/* <div class="card bg-dark text-white">
        </div> */}
    }

}