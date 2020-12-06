import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
}

// Context/Situation #1
// We are running in dev in isolation
// We are using our local index.html 
// which DEFINTELY has an element with an ide of 'dev-products' 
// We want to immediately render the app into that element.
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products');

  // Assuming our contianer does not have a element with id 'dev-products'
  if (el) { mount(el); }
}


// Context/Situation #2
// We are running this in dev / prod through CONTAINER App
// NO GARUNTEE that an element with id may not exist
// WE DO NOT WANT to try to immedaite render the app.
export { mount };