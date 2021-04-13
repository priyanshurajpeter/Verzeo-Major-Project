fetch("http://localhost:3000/products")
.then(response => response.json())
.then(productsArray => renderAllProducts(productsArray))

function renderAllProducts(productsArray){
    productsArray.forEach(product => renderOneProduct(product))    
    };

    const findDiv = document.querySelector("#clothes-box")
    function renderOneProduct(product){
         const newElement = dpcument.createElement("div")
         newElement.className = "content"
         newElement.innerHTML =
         <div class="item-card">
             <div class="center">
                 <img src="${product.image_url}" class="image">
                     <h2>${product.name}</h2>
                     <p>Price:₹${product.price}</p>
                     <button class="add-item">Add to Cart</button>
                     </img>
             </div>
         </div>

         findDiv.append(newElement)
    }

    fetch("http://localhost:3000/cart_items")
    .then(response => response.json())
    .then(cartItemsArray => {
        cartArray= cartItemsArray;
        renderAllCartItems(cartArray)
    }
    )

function renderAllCartItems(cartItemsArray){
    cartItemsArray.forEach(cartItem => renderCartItems(cartItem))
}

function renderCartItem(cart_item){
    const newLi = document.createElement("li")
    newLi.innerHTML =
    <p id="pTag">${cartItem.product.name}: ₹${cartItem.product.price}
    <button class="delete-button">
        <span>remove</span>
    </button>
    </p>
    findListOfItems.append(newLi)
}

const addButton = newElement.querySelector(".add-item")
addButton.addEventListener("click", event => {
    findListOfItems.innerText=""

    fetch("http://localhost:3000/cart_items", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id:1,
            product_id: product.id
        })
    })
.then(response => Response.json())
.then(newCartItem => {
    cartArray.push(newCartItem);
    renderAllCartItems(cartArray)
})
})

const findListOfItems = document.querySelector("list-of-items")

const removeButton = newLi.querySelector("delete-button")
removeButton.addEventListener("click", event => {
    newLi.remove()
    fetch("http://localhost:3000/cart_items/${cartItem.id}",{
        method: "DELETE"
    })
    .then(response => Response.json())
.then(results => {
    cartArray = results
    findListOfItems.innerHTML=""
    renderAllCartItems(cartArray)
})
})

const checkout = document.querySelector("#checkout")
const constDiv = document.createElement("div")
subTotal = cartItemsArray.map(item => item.product.price)
const subFloat = subTotal.map(num =>parseFloat(num))
let sum = subFloat.reduce(function (accumulator, currentValue){
    return accumulator + currentValue
},0)
let tax = sum * .08
checkout.innerHTML=""
newDiv.innerHTML =
<hr>
<p id="subtotal">Subtotal:₹${sum.toFixed(2)}</p>
<p id="taxes">Tax: ₹$(tax.toFixed(2)}</p>
<p id="total">Total: ₹${((sum + tax).toFixed(2))}</p>
<button id="check-out">Check Out</button>

checkOut.append(newDiv)
</hr>



const subtotals = document.querySelector("#subtotal")
const total = document.querySelector("total")
const taxes = Document.querySelector("taxes")
const checkoutBtn= newDiv.querySelector("#check-out")
checkoutBtn.addEventListener("click", event => {
    findListOfItems.innerHTML = ""
    subtotals.innerHTML = 'Subtotal: ₹0.00'
    taxes.innerHTML = 'Tax: ₹0.00'
    total.innerHTML = 'Total: ₹0.00'
    alert("Thankyou for shopping at MH SHOPPERS!");
    fetch("http://localhost:3000/cart_items/",{
        method: "DELETE"
    })
    cartArray =[]
})
