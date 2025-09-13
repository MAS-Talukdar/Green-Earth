// const loadCat=()=>{
//     fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) => res.json())
//     .then((json) => displayCat(json))
// }

// const displayCat=(cats)=>{
//     const catConainer = document.getElementById("main-cont")
//     catConainer.innerHTML="";
//     for(let cat of cats){
//         const btnDiv = document.createElement("div")
//         btnDiv.innerHTML=`
//         <button class="bg-white text-black">Catttt</button>
//         `;
//         catConainer.append(btnDiv);
//     }
// } 
// loadCat();

let totalPrice = 0;

function addToCart(name, price) {

    alert(`${name} added to cart!`);

    const cartItems = document.getElementById("cart-items");

    const li = document.createElement("li");
      li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded";
      
    li.innerHTML = `
        <span>${name} - $${price}</span>
        <button onclick="removeFromCart(this, ${price})" class="text-red-500 font-bold">×</button>
      `;
      cartItems.appendChild(li);
      totalPrice += price;
      document.getElementById("total-price").innerText = totalPrice;
}

function removeFromCart(button, price) {
      button.parentElement.remove();
      totalPrice -= price;
      document.getElementById("total-price").innerText = totalPrice;
}