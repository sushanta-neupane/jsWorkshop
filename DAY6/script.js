// List of products 
const products = async()=>{
    try {
        let result  = await fetch('https://fakestoreapi.com/products')
        return await(result.json())
        
    } catch (error) {
        return error
        
    }
}

  
  // Cart array
  let cart = [];
  
  // Display products
  const  displayProducts = async()=> {
    let data=await products();
    console.log(data)
    data.forEach(product => {
      document.getElementById('products').innerHTML += `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${product.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <button href="#" value="${product.id}" onclick="addToCart(this.value)" class="btn btn-primary">Add To Cart</button>
        
        <p class="card-text"><small class="text-muted">Price: $${product.price}</small></p>

      </div>
    </div>
      `;
    });
  }
  
  // Add product to cart
  const addToCart=async(id)=> {
    let data=await products();

    
        const item = cart.find(p => p.id == id);

    if (item) {
        item.quantity++; 
    } else {
       
        const productData = data.find(p => p.id == id);
        productData.quantity = 1;
        cart.push(productData);
    }

      
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart));
      
        let saved = (JSON.parse(localStorage.getItem('cart')))
        document.getElementById('cart').innerHTML = ""
        saved.forEach(product => {
        document.getElementById('cart').innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${product.image}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><small class="text-muted">$Price: ${product.price}</small></p>
              <p class="card-text"><small class="text-muted">Quantity: ${product.quantity}</small></p>

            </div>
          </div>
        </div>
      </div>
        `;
  })
}
  
  // Initial page load
  displayProducts()
