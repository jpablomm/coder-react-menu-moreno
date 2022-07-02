const products = [
  { id: 0, name: "Pelota de futbol", precio: 50 },
  { id: 1, name: "Pelota de tenis", precio: 50 },
  { id: 2, name: "Pelota de basketball", precio: 50 },
  { id: 3, name: "Pelota de golf", precio: 50 },
  { id: 4, name: "Pelota de baseball", precio: 50 },
];

export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}
