export default function getSliderData() {
  return fetch("https://c4-project-data.herokuapp.com/slider_data");
}

export function ProductData() {
  return fetch("https://c4-project-data.herokuapp.com/products");
}

export function buyData() {
  return fetch("https://c4-project-data.herokuapp.com/buy");
}
