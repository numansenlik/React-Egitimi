
//! ArrayFunctions
/*
push
map
find
filter
some
every
includes
*/

let array1 = [{name:"Numan",age:50},{name:"Mehmet",age:40},{name:"Süleyman",age:20},{name:"Ahmet",age:20}]
// sona ekleme yapar
array1.push({name:"Cahit",age:28});
// Arrayda döner
array1.map((item)=>console.log(item.name));
// Buldugu ilk kaydı getirir
let value= array1.find((item)=>item.age==20 && item.name == "Ahmet")
console.log(value);
//Array olarak döner Filtreleme yapar
let value1 = array1.filter((item)=>item.age == 20)
console.log(value1);
// Elemanların herhangi birikosua uyuyorsa true döner
let value2= array1.some((item)=>item.name=="Numan")
console.log(value2);
// Elemanların hepsi koşulu sağlıyomu diye kontrol eder sağlıysa true döner
let value3 = array1.every((item)=>item.age>=20)
console.log(value3);
// Arrayın içinde varmı yokmu diye kontrol eder objeli arayda işe yaramaz varsa true döner
let value4= array1.includes((item)=>item.name=="Numan")
console.log(value4);