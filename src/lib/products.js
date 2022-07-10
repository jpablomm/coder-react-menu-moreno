const products = [
  {
    id: 0,
    name: "Item 1",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 1,
    name: "Item 2",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 2,
    name: "Item 3",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 3,
    name: "Item 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 4,
    name: "Item 5",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 5,
    name: "Item 6",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
  {
    id: 6,
    name: "Item 7",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    price: 50,
    image_url: "https://via.placeholder.com/300x150",
  },
];

export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("products.json")
        .then((results) => results.json())
        .then((jsonData) => {
          resolve(jsonData);
        });
    }, 2000);
  });
}
