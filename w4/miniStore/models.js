class Product {
    constructor(name, price, categories){
        this.name = name;
        this.price = price;
        this.categories = categories;
        this._id = Product.idGenerator();
        this.comment = []
    }
    addComment(comment){
        this.comment.push(comment)
    }
    static idGenerator(){
        Math.floor(Math.random())
    }
    get id(){
        return this._id
    }
}

class User {
    constructor(){
        this.username = this.username
        this.purchaseHistory = []
    }
    addToCart(product){
        this.purchaseHistory.push(product.id)
    }
}

class Comment {
    constructor(user, rating, text) {
        this.user = user;
        this.rating = rating;
        this.text = text;
    }
}

const pro = new Product("ali",23)
console.log(pro);