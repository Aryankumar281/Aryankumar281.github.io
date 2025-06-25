// // arrays

// const score= [1,2,3,4,5];
// console.log(score)
// console.log(score[0])
// score.push(9);
// console.log(score)
// console.log(score.length)
// const newScore = [...score,9]
// console.log(newScore)
// const cart = {
//     1:5,
//     5:3,
// };
// const newCart = {...cart, 2:10}
// console.log(newCart)
// let cart ={};
// const product = [
//     {id:1, name: 'product1', price: 10.99},
//     {id:2, name: 'product2', price: 9.99},
//     {id:3, name: 'product3', price: 7.99},
// ];

// add new products

// console.log(product)
// console.log(product[0])
// console.log(product[0].price)
// console.log(product[0].price.toFixed(2))
// function addToCart(id){
//     cart = { ...cart,[id]:1};
// }
// addToCart(3)
// console.log(cart);
// addToCart(2)
// console.log(cart)

// console.log(product[0].price.toFixed(2).replace('.', ','))



const scores  =  [2,1,7,5,3];
// scores.forEach((score,b,c)=>{
//     console.log(c[b]);
    
// })
// const newScore=scores.map((score)=>{
//     return score>2;
    
// })
const newScore=scores.filter((score)=>{
    return score>2;
    
})
console.log(newScore)