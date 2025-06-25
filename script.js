let product = {"name" : "Стейк из грудки индейки охлаждённый",
    "image" : "images/2.webp",
    "rating" : "4.89",
    "value" : "500 ккал",
    "price" : "450"
}
let counter = 0
if(localStorage.getItem("counter")){
    counter = Number(localStorage.getItem("counter"))
}
else{
    localStorage.setItem("counter", 0)
}
function createProduct(product){
    counter+=1
    localStorage.setItem("counter" ,counter)
    localStorage.setItem(`card${counter}`, JSON.stringify(product))
}
function appendProduct(){
    let productsKeys = Object.keys(localStorage).reverse().sort()
    for (let key of productsKeys){
        if(key != "counter"){
            let product = JSON.parse(localStorage.getItem(key))
            let products = document.querySelector(".products")
            let productsCard = document.createElement("div")
            productsCard.classList.add("products__card")
            productsCard.innerHTML = 
            `<div class="card__image-block">
                <img src="${product.image}" class="card__image">
            </div>
            <div class="card__description">
                <div class="card__meta">
                    <div class="card__rating">
                        ${product.rating}
                    </div>
                    <div class="card__value">
                        ${product.value}
                    </div>
                </div>
                <div class="card__name">
                    ${product.name}
                </div>
                <div class="card__cost">
                    ${product.price}
                </div>
            </div>`
            products.append(productsCard)
        }
    }
}
appendProduct()