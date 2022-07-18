class Product {
  /*  title = 'DEFAULT';
  imageUrl;
  description;
  price; */ //we can ommit the field description since we define them in the constructor method below.

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart(){
    console.log('Adding To Cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add To Cart</button>
        </div>
      </div>
      `;
      const addCartButton = prodEl.querySelector('button');
      addEventListener('click',this.addToCart.bind(this));
      return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/camping-pillow-comfort.jpg?&f=800x800",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://pictures-kenya.jijistatic.com/18333891_img-20210320-wa0041_1_640x640.jpg",
      "A carpet which you might like.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      // console.log(productItem);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.render();
