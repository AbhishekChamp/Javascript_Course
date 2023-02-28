import {
    addToCart,
    totalPrice as price,
    totalQuantity,
} from "./shoppingCart.js";
console.log("Importing Module");

addToCart("bread", 5);
console.log(price);
console.log(totalQuantity);

// console.log("Start Fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
