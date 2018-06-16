class Character {
    constructor(obj) {
        this.name = obj.name
        this.image = obj.image
        store.push(this)
        this.id = store.length
    }

    render() {
        console.log(this);
        {/* <div class="card bg-dark text-white">
        <img class="card-img" src="..." alt="Card image">
        <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
        </div>
        </div> */}
    }

}