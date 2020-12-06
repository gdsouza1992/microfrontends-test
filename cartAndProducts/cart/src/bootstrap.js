import faker from 'faker';

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart </div>`;

  element.innerHTML = cartText;
}

// Context/Situation #1
// We are running in dev in isolation
// We are using our local index.html 
// which DEFINTELY has an element with an ide of 'dev-cart' 
// We want to immediately render the app into that element.
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart');

  // Assuming our contianer does not have a element with id 'dev-cart'
  if (el) { mount(el); }
}


// Context/Situation #2
// We are running this in dev / prod through CONTAINER App
// NO GARUNTEE that an element with id may not exist
// WE DO NOT WANT to try to immedaite render the app.
export { mount };