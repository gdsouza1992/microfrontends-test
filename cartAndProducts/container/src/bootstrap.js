import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartIndex';

const myProducts = document.getElementById('my-products');
mountProducts(myProducts);

const myCart = document.getElementById('my-cart');
mountCart(myCart);