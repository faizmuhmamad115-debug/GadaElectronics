let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image)
{
    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}

function displayCart()
{
    let cartDiv =
        document.getElementById("cartItems");

    let totalDiv =
        document.getElementById("totalPrice");

    if(!cartDiv) return;

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    let total = 0;

    if(cart.length === 0)
    {
        cartDiv.innerHTML =
        "<h3>Your Cart Is Empty</h3>";

        return;
    }

    let output = "";

    cart.forEach(function(item)
    {
        total += parseInt(item.price.replace("$",""));

        output += `
        <div class="product">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        </div>
        `;
    });

    cartDiv.innerHTML = output;

    totalDiv.innerHTML =
    "Total: $" + total;
}

function clearCart()
{
    localStorage.removeItem("cart");

    location.reload();
}

displayCart();
function placeOrder()
{
    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    if(cart.length === 0)
    {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}