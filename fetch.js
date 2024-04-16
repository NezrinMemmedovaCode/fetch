
fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then(data=>cards(data))

const row=document.querySelector(".row")
function cards(products) {
    products.forEach(x => {
        row.innerHTML+=`<div class="card">
        <img src=${x.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><a href="./detail.html?id=${x.id}">${x.title}</a></h5>
          <p class="card-text">${x.price}</p>
          <p >${x.category}</p>
          <p>${x.rating.rate}</p>
        </div>

      </div>`
        
    });
    
}

