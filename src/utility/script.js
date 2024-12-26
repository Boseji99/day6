import products from "./data.js";
console.log(products);
// const p = products.map((product) => ({category: product.category}));
// console.log(p);

// const p = products.map((product) => {
//     let category = product.category;
//     let items = product.productName;
//     return{category, items};
// });
// console.log(p);

let ans = products.flatMap((product) => (
    product.productName.map((el) => {
        let category = product.category;
        return {category : category, item : el};
    })
)
)
console.log(ans)