let id=new URLSearchParams(location.search).get("id")
fetch("https://fakestoreapi.com/products/"+id)
.then((res)=>res.json())
.then(data=>DetailCreate(data))

const row=document.querySelector(".row")

function DetailCreate(element) {
    console.log("salam");
    row.innerHTML+=` <div class="card">
    <img src=${element.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><a href="./detail.html?id=${element.id}"></a></h5>
      <p class="card-text">${element.price}</p>
      <p>${element.category}</p>
      <p>${element.rating.rate}</p>
    </div>

  </div>`

    
}



