// ! Fech api ya göre direk json formatında dosyayı çekiyoruz birddaa json()dememize gerek kalmıyor.
const axios = require('axios');

const veri = async()=>{
    let {data} = await axios("https://jsonplaceholder.typicode.com/users/1");
    console.log(data);
}
veri()
console.log("Başla");


// const getUsers = ()=>{
// return new Promise(async(resolve,reject)=>{
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data)
// })}

// const getPost = ()=>{
//     return new Promise(async(resolve,reject)=>{
//         const {data :post} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//         resolve(post)
// })}


// (async ()=> {
//     try {
//         const post = await getPost();
//         const user = await getUsers();

//         console.log(user);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }

// })();
// Promise.all([getUsers(),getPost()])
// .then(console.log)
// .catch(console.log)
