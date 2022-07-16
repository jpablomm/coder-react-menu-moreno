export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("http://localhost:3000/products.json")
        .then((results) => results.json())
        .then((jsonData) => {
          resolve(jsonData);
        });
    }, 1000);
  });
}
