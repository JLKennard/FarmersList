class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }
  removeProduct(i) {
    const product = this.products[i];
    this.products.splice(i, 1);
    this.total -= product.price;
  }
}

module.exports = Cart;
